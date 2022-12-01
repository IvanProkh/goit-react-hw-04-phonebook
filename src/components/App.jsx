import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Wrapper } from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const useLocalStarage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Pavel Usov', number: '+380669998822' },
    { id: 'id-2', name: 'Henri Kovil', number: '+380771117700' },
  ];

  const [contacts, setContacts] = useLocalStarage('contacts', initialContacts);

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    console.log(name, number);

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      return alert(`${name} / ${number} is already in contacts!`);
    }
    {
      const newContact = {
        id: nanoid(4),
        name,
        number,
      };
      setContacts(state => [newContact, ...state]);
    }
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
    console.log(contacts);
  };

  const currentContacts = () => {
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
      );
    });
  };

  const handleChangeFilter = e => {
    console.log(e.currentTarget.value);
    setFilter(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleChangeFilter} />
      <ContactList items={currentContacts()} deleteContact={deleteContact} />
    </Wrapper>
  );
};

export default App;
