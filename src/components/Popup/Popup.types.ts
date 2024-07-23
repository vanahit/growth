
export interface IPopupProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    submitText?: string;
    cancelText?: string;
    onSubmit?: () => void;
    loading?: boolean;
}