import { useEffect, useReducer, useState } from 'react';
import { collection, doc, getDocs, orderBy, query, serverTimestamp, where, writeBatch } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import { db } from '../lib/firebase';
import { normalizeAndHashEmail } from '../utils/hashEmail';

// Best-effort owner notification, reusing the same EmailJS service/template
// already configured for the contact form. Never blocks or fails the
// testimonial submission itself — the testimonial is already saved in
// Firestore by the time this runs, so a notification failure is just logged.
function notifyOwnerOfNewTestimonial(input: { name: string; email: string; message: string; rating: number; website: string }) {
  if (!import.meta.env.VITE_EMAIL_KEY_SERVICE || !import.meta.env.VITE_EMAIL_PUBLIC_KEY) return;

  const summary = [
    '[Novo depoimento recebido no site]',
    `Avaliação: ${input.rating}/5`,
    input.website ? `Site: ${input.website}` : null,
    '',
    input.message,
  ]
    .filter(Boolean)
    .join('\n');

  emailjs
    .send(
      import.meta.env.VITE_EMAIL_KEY_SERVICE,
      import.meta.env.VITE_EMAIL_KEY_TEMPLATE,
      { user_name: input.name, user_email: input.email, message: summary },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .catch((err) => {
      console.error('Failed to send testimonial notification email:', err);
    });
}

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  website: string | null;
  rating: number;
}

interface TestimonialsState {
  items: Testimonial[];
  loading: boolean;
  error: boolean;
}

export function useTestimonials() {
  const [state, setState] = useState<TestimonialsState>({ items: [], loading: true, error: false });

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const q = query(
          collection(db, 'testimonials'),
          where('approved', '==', true),
          orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        if (!active) return;

        const items: Testimonial[] = snapshot.docs.map((docSnap) => {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            name: data.name,
            message: data.message,
            website: data.website ?? null,
            rating: data.rating,
          };
        });
        setState({ items, loading: false, error: false });
      } catch {
        if (active) setState({ items: [], loading: false, error: true });
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  return state;
}

export type SubmitResultCode = 'pendingReview' | 'duplicate' | 'invalidWebsite' | 'genericError';

interface SubmitState {
  status: 'success' | 'failed' | '';
  code: SubmitResultCode | null;
  loading: boolean;
}

type SubmitAction =
  | { type: 'INIT' }
  | { type: 'SUCCESS'; payload: SubmitResultCode }
  | { type: 'ERROR'; payload: SubmitResultCode }
  | { type: 'RESET' };

const initialSubmitState: SubmitState = { status: '', code: null, loading: false };

function submitReducer(state: SubmitState, action: SubmitAction): SubmitState {
  switch (action.type) {
    case 'INIT':
      return { status: '', code: null, loading: true };
    case 'SUCCESS':
      return { status: 'success', code: action.payload, loading: false };
    case 'ERROR':
      return { status: 'failed', code: action.payload, loading: false };
    case 'RESET':
      return initialSubmitState;
    default:
      return state;
  }
}

interface SubmitTestimonialInput {
  name: string;
  email: string;
  message: string;
  website?: string;
  rating: number;
}

function isValidUrl(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

export function useSubmitTestimonial() {
  const [state, dispatch] = useReducer(submitReducer, initialSubmitState);

  const submit = async ({ name, email, message, website, rating }: SubmitTestimonialInput) => {
    dispatch({ type: 'INIT' });

    const trimmedWebsite = website?.trim() || '';
    if (trimmedWebsite && !isValidUrl(trimmedWebsite)) {
      dispatch({ type: 'ERROR', payload: 'invalidWebsite' });
      return;
    }

    try {
      const hashId = await normalizeAndHashEmail(email);
      const batch = writeBatch(db);

      batch.set(doc(db, 'testimonialContacts', hashId), {
        email: email.trim().toLowerCase(),
      });
      batch.set(doc(db, 'testimonials', hashId), {
        name: name.trim(),
        message: message.trim(),
        website: trimmedWebsite || null,
        rating,
        approved: false,
        createdAt: serverTimestamp(),
      });

      await batch.commit();
      notifyOwnerOfNewTestimonial({ name: name.trim(), email: email.trim(), message: message.trim(), rating, website: trimmedWebsite });
      dispatch({ type: 'SUCCESS', payload: 'pendingReview' });
    } catch (error) {
      const code: SubmitResultCode =
        (error as { code?: string })?.code === 'permission-denied' ? 'duplicate' : 'genericError';
      dispatch({ type: 'ERROR', payload: code });
    }
  };

  return { submit, state };
}
