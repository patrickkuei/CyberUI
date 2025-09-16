import { default as React, ReactNode } from 'react';
export interface CyberNotificationProviderProps {
    children: ReactNode;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    defaultDuration?: number;
}
export declare const CyberNotificationProvider: React.FC<CyberNotificationProviderProps>;
