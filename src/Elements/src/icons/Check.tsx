import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { ClassName } from 'shared-types';

export const Check = ({ className }: ClassName) => {
  return <FontAwesomeIcon icon={faCircleCheck} className={className} />;
};
