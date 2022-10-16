import React from 'react';
import { ContactList } from './ContactList';
import { getData } from './data';

export const ContactApp = () => {
    const contact = getData();

  return (
    <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactList contacts={contact} />
    </div>
  )
}
