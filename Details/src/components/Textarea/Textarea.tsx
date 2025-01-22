import React from 'react';
import styles from './Textarea.module.scss';
import cs from 'classnames';

interface TextareaProps {
  placeholder?: string;
  value?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Textarea = ({
  placeholder = '',
  value,
  rows = 4,
  onChange,
  className,
  children,
}: TextareaProps): React.JSX.Element => {
  const classes = cs(styles.textarea, className);
  const resolvedValue = value ?? (typeof children === 'string' ? children : '');

  return (
    <textarea
      className={classes}
      placeholder={placeholder}
      value={resolvedValue}
      rows={rows}
      onChange={onChange}
    />
  );
};
