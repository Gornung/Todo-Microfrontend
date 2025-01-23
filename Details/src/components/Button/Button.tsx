import React from 'react';
import styles from './Button.module.scss';
import cs from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  onSave?: () => Promise<void>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  children,
  onClick,
  onSave,
  className,
  type = 'button',
  disabled = false,
  variant = 'primary',
}: ButtonProps): React.JSX.Element => {
  const buttonClass = cs(styles.button, styles[variant], className, {
    [styles.disabled]: disabled,
  });

  const handleClick = async () => {
    if (onSave) {
      await onSave();
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
