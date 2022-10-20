import React from 'react';
import { ContactList } from './ContactList';
import { getData } from './data';
import ContactInput from './ContactInput';

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    }
  
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: '/images/anya.jpg',
          }
        ]
      }
    });
  }
  
  render() {
    return (
      <div className='contact-app-wrapper'>
        <div className="contact-app">
          <h1>Tambah Kontak</h1>
          <hr />
          <br />
          <ContactInput addContact={this.onAddContactHandler} />
        </div>
        <div className="contact-app">
          <h1>Daftar Kontak</h1>
          <hr />
          <br />
          <div className="contact-item-wrapper">
          <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
          </div>
        </div>
      </div>
      
    );
  }
}
export default ContactApp;
