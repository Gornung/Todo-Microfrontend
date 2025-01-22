import React from 'react';
import styles from './Button.module.scss';
import cs from 'classnames';
import { Button as ButtonProps } from 'shared-types';

export const Button = ({
  children,
  onClick,
  onSave,
  className,
  type = 'button',
  disabled = false,
  variant = 'primary',
  id = 'button'
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
      id={id}
    >
      {children}
    </button>
  );
};
