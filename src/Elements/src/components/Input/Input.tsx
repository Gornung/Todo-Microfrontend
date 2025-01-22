import React from 'react';
import styles from './Input.module.scss';
import cs from 'classnames';
import { InputProps } from 'shared-types';

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
      id='input'
    />
  );
};
