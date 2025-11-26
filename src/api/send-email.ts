import { useReducer, useCallback } from "react";
import emailjs from '@emailjs/browser';

// Interfaces (Mantive iguais, estão ótimas)
interface SendEmailProps {
    name: string;
    email: string;
    message: string;
}

interface EmailState {
    status: 'success' | 'failed' | '';
    loading: boolean;
    message: string;
}

type TypeAction =
    | { type: 'SEND_INIT' }
    | { type: 'SEND_SUCCESS'; payload: string }
    | { type: 'SEND_ERROR'; payload: string }
    | { type: 'RESET' };

const initialState: EmailState = {
    status: '',
    loading: false,
    message: ''
};

const sendEmailReducer = (state: EmailState, action: TypeAction): EmailState => {
    switch (action.type) {
        case 'SEND_INIT':
            return { ...state, loading: true, status: '', message: '' };
        case 'SEND_SUCCESS':
            return { ...state, loading: false, status: 'success', message: action.payload };
        case 'SEND_ERROR':
            return { ...state, loading: false, status: 'failed', message: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

export const useSendEmail = () => {
    const [state, dispatch] = useReducer(sendEmailReducer, initialState);

    const sendEmail = useCallback(async ({ name, email, message }: SendEmailProps) => {
        dispatch({ type: 'SEND_INIT' });
        try {
            console.log("variables:", import.meta.env.VITE_EMAIL_KEY_SERVICE, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
            if (!import.meta.env.VITE_EMAIL_KEY_SERVICE || !import.meta.env.VITE_EMAIL_PUBLIC_KEY) {

                dispatch({ type: 'SEND_ERROR', payload: "Serviço indisponível temporariamente. Tente novamente em breve." })
                return
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

            dispatch({ type: 'SEND_SUCCESS', payload: 'Recebido! Vou analisar sua ideia e te chamo em breve.' });

        } catch (error) {
            const errorMsg = error instanceof Error 
                ? error.message 
                : (error as any).text || 'O envio falhou. Aguarde alguns instantes e reenvie.';
            
            dispatch({ type: 'SEND_ERROR', payload: errorMsg });
        }
    }, []); 

    const resetState = useCallback(() => dispatch({ type: 'RESET' }), []);

    return {
        sendEmail,
        resetState,
        state
    };
};