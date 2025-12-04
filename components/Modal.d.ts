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
/**
 * A CRT-styled modal dialog with retro animation effects.
 *
 * @example
 * // Basic modal
 * <Modal isOpen={isOpen} onClose={close} title="System Alert">
 *   <p>Breach detected in sector 7.</p>
 * </Modal>
 *
 * @example
 * // Confirmation modal with custom actions
 * <Modal
 *   isOpen={isOpen}
 *   onClose={close}
 *   title="Confirm Override"
 *   onConfirm={handleConfirm}
 *   confirmText="EXECUTE"
 *   variant="danger"
 * >
 *   Are you sure you want to override safety protocols?
 * </Modal>
 */
export interface ModalProps extends ModalCallbacks {
    /**
     * Whether the modal is visible.
     */
    isOpen: boolean;
    /**
     * Callback when the modal requests to close.
     */
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
    /**
     * Width of the modal.
     * @default 'md'
     */
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
