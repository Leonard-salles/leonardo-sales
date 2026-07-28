import { toast } from "react-toastify";

export const useToastNotify = () => {
    const success = (message: string) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 4500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    };

    const error = (message: string) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 4500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    };

    return { success, error}
}