import React from 'react';
import styles from './Input.module.scss';
import cs from 'classnames';

interface InputProps {
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className,
  children,
}: InputProps) => {
  const classes = cs(styles.input, className);
  const resolvedValue = value ?? (typeof children === 'string' ? children : '');

  return (
    <input
      type={type}
      className={classes}
      placeholder={placeholder}
      value={resolvedValue}
      onChange={onChange}
    />
  );
};
