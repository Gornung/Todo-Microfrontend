import React from 'react';
import styles from './Button.module.scss';
import cs from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  children,
  onClick,
  className,
  type = 'button',
  disabled = false,
  variant = 'primary',
}: ButtonProps): React.JSX.Element => {
  const buttonClass = cs(styles.button, styles[variant], className, {
    [styles.disabled]: disabled,
  });

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
