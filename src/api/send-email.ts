import { useReducer, useCallback } from "react";
import emailjs from '@emailjs/browser';

interface SendEmailProps {
    name: string;
    email: string;
    message: string;
}

export type EmailResultCode = 'sent' | 'service_unavailable' | 'send_error';

interface EmailState {
    status: 'success' | 'failed' | '';
    code: EmailResultCode | null;
    loading: boolean;
}

type TypeAction =
    | { type: 'SEND_INIT' }
    | { type: 'SEND_SUCCESS'; payload: EmailResultCode }
    | { type: 'SEND_ERROR'; payload: EmailResultCode }
    | { type: 'RESET' };

const initialState: EmailState = {
    status: '',
    code: null,
    loading: false,
};

const sendEmailReducer = (state: EmailState, action: TypeAction): EmailState => {
    switch (action.type) {
        case 'SEND_INIT':
            return { ...state, loading: true, status: '', code: null };
        case 'SEND_SUCCESS':
            return { ...state, loading: false, status: 'success', code: action.payload };
        case 'SEND_ERROR':
            return { ...state, loading: false, status: 'failed', code: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

export const useSendEmail = () => {
    const [state, dispatch] = useReducer(sendEmailReducer, initialState);

    const sendEmail = async ({ name, email, message }: SendEmailProps) => {
        dispatch({ type: 'SEND_INIT' });
        try {
            if (!import.meta.env.VITE_EMAIL_KEY_SERVICE || !import.meta.env.VITE_EMAIL_PUBLIC_KEY) {
                dispatch({ type: 'SEND_ERROR', payload: 'service_unavailable' });
                return;
            }

            const templateParams = {
                user_name: name,
                user_email: email,
                message: message
            };
            await emailjs.send(
                import.meta.env.VITE_EMAIL_KEY_SERVICE,
                import.meta.env.VITE_EMAIL_KEY_TEMPLATE,
                templateParams,
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            );

            dispatch({ type: 'SEND_SUCCESS', payload: 'sent' });

        } catch (error) {
            dispatch({ type: 'SEND_ERROR', payload: 'send_error' });
        }
    };

    const resetState = useCallback(() => dispatch({ type: 'RESET' }), []);

    return {
        sendEmail,
        resetState,
        state
    };
};
