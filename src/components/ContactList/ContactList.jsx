import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Contact } from './ContactList.styled';

export const ContactList = ({ contacts, filter, setContacts }) => {
  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
    console.log(contacts);
  };

  // const currentContacts = () => {
  //   return contacts.filter(contact => {
  //     console.log('filter');
  //     return (
  //       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //       contact.number.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   });
  // };

  // useMemo(() => first, [second])

  const currentContacts = useMemo(() => {
    console.log('filter');
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
      );
    });
  }, [contacts, filter]);

  return (
    <Contact>
      {currentContacts.map(({ name, number, id }) => (
        <li key={id}>
          <span>{name} :</span>
          <span>{number}</span>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </Contact>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  setContacts: PropTypes.func.isRequired,
};
