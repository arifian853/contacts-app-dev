import React from 'react';
import { ContactMainBody } from './ContactMainBody';
import { ContactProfilePhoto } from './ContactProfilePhoto';
import { DeleteButton } from './DeleteButton';

export const ContactItem = ({imageUrl, name, tag, id, onDelete}) => {
  return (
    <div className='contact-item'>
        <ContactProfilePhoto imageUrl = {imageUrl} />
        <ContactMainBody name = {name} tag = {tag} />
        <DeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}
