import React from "react";

export interface TextareaProps {
    placeholder?: string;
    value?: string;
    rows?: number;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    children?: React.ReactNode;
}