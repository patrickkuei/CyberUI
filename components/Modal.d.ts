import { default as React } from 'react';
export interface ModalAnimationConfig {
    openDuration?: number;
    closeDuration?: number;
    crtEffects?: boolean;
}
export interface ModalCallbacks {
    onOpen?: () => void;
    onClose?: () => void;
    onCRTBootComplete?: () => void;
}
export interface ModalProps extends ModalCallbacks {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    onCancel?: () => void;
    onConfirm?: () => void;
    cancelText?: string;
    confirmText?: string;
    confirmLoading?: boolean;
    showCancel?: boolean;
    showConfirm?: boolean;
    size?: "sm" | "md" | "lg" | "xl" | "fullscreen";
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    animation?: ModalAnimationConfig;
    className?: string;
    overlayClassName?: string;
    showCloseButton?: boolean;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
