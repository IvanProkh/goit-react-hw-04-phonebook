import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useLocalStarage } from './hooks/useLocalStarage';

import { Wrapper } from './App.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Pavel Usov', number: '+380669998822' },
    { id: 'id-2', name: 'Henri Kovil', number: '+380771117700' },
    { id: 'id-3', name: 'Daniel Fugin', number: '+380669996600' },
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
      setContacts(prevState => [newContact, ...prevState]);
    }
  };

  // const deleteContact = contactId => {
  //   setContacts(state => state.filter(contact => contact.id !== contactId));
  //   console.log(contacts);
  // };

  // const currentContacts = () => {
  //   return contacts.filter(contact => {
  //     return (
  //       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //       contact.number.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   });
  // };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} initialiseFilter={setFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        setContacts={setContacts}
      />
    </Wrapper>
  );
};
