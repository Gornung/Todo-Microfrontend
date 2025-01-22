import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { ClassName } from 'shared-types';

export const Trash = ({ className }: ClassName) => {
  return <FontAwesomeIcon icon={faTrashCan} className={className} />;
};
