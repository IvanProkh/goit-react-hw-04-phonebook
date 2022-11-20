import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper } from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Pavel Usov', number: '+380669998822' },
      { id: 'id-2', name: 'Henri Kovil', number: '+380771117700' },
    ],
    filter: '',
  };

  componentDidMount() {
    const local = localStorage.getItem('contacts');

    const parseLocal = JSON.parse(local);

    if (parseLocal) {
      this.setState({ contacts: parseLocal });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      return alert(`${name} / ${number} is already in contacts!`);
    }
    {
      const contact = {
        name,
        number,
        id: nanoid(),
      };
      this.setState(({ contacts }) => {
        return { contacts: [contact, ...contacts] };
      });
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  currentContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
      );
    });
  };

  handleChangeFilter = e => {
    console.log(e.currentTarget.value);
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { addContact, handleChangeFilter, currentContacts, deleteContact } =
      this;
    const { filter } = this.state;

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={handleChangeFilter} />
        <ContactList items={currentContacts()} deleteContact={deleteContact} />
      </Wrapper>
    );
  }
}

export default App;
