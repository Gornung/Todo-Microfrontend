import React from 'react';
import styles from './Textarea.module.scss';
import cs from 'classnames';
import { TextareaProps } from 'shared-types';

export const Textarea = ({
  placeholder = '',
  value,
  rows = 5,
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
      id='textarea'
    />
  );
};
