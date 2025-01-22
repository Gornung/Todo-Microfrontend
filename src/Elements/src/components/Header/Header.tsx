import React from 'react';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.header}>
      <div onClick={handleTitleClick} className={styles.title} id='headline-link'>
        Todo Anwendung
      </div>
    </div>
  );
};
