import React from "react";

export interface Button {
    children: React.ReactNode;
    onClick?: () => void;
    onSave?: () => Promise<void>;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    id?: string;
}