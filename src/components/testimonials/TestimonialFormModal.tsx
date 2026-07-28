import { lazy, Suspense, useEffect, useState } from 'react';
import { useTestimonialModal } from './TestimonialModalContext';

const TestimonialFormModalContent = lazy(() => import('./TestimonialFormModalContent'));

/**
 * Thin, eagerly-mounted wrapper: keeps Firebase/Firestore code (pulled in by
 * the actual form + submission logic) out of the main bundle entirely until
 * the user opens the modal for the first time.
 */
export function TestimonialFormModal() {
  const { isOpen } = useTestimonialModal();
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  useEffect(() => {
    if (isOpen) setHasOpenedOnce(true);
  }, [isOpen]);

  if (!hasOpenedOnce) return null;

  return (
    <Suspense fallback={null}>
      <TestimonialFormModalContent />
    </Suspense>
  );
}
