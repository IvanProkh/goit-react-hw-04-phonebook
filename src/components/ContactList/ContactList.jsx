import PropTypes from 'prop-types';
import { Contact } from './ContactList.styled';

export const ContactList = ({ items, deleteContact }) => {
  return (
    <Contact>
      {items.map(({ name, number, id }) => (
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
  items: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
