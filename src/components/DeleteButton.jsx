import React from 'react';
import { FaTrash } from 'react-icons/fa';

export const DeleteButton = ({id, onDelete}) => {
  return (
    <button className='contact-item-delete' onClick={() => onDelete(id)}><FaTrash /></button>
  )
}
