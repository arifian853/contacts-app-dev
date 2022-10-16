import React from 'react';
import { ContactMainBody } from './ContactMainBody';
import { ContactProfilePhoto } from './ContactProfilePhoto';

export const ContactItem = ({imageUrl, name, tag}) => {
  return (
    <div className='contact-item'>
        <ContactProfilePhoto imageUrl = {imageUrl} />
        <ContactMainBody name = {name} tag = {tag} />
    </div>
  )
}
