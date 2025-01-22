import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ClassName } from 'shared-types';

export const Menu = ({ className }: ClassName) => {
  return <FontAwesomeIcon icon={faBars} className={className} />;
};
