import React from 'react';
import styles from './Container.module.scss';
import { Container as ContainerProps } from 'shared-types';

export const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
