import React from "react";

export interface InputProps {
    type?: 'text' | 'password' | 'email';
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    children?: React.ReactNode;
}