// import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormContact, Label, Input, Error, Button } from './ContactForm.styled';

import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(10).max(13).required(),
});

const nameId = nanoid();
const contactId = nanoid();

export const ContactForm = ({ onSubmit }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const [state, setState] = useState({
  //   name: '',
  //   number: '',
  // });

  const handleSubmit = (values, { resetForm }) => {
    console.log('values', values);
    resetForm();
    onSubmit(values.name, values.number);
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContact>
        <Label htmlFor="nameId">Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nameId}
          placeholder="Ivan Ivanov"
          required
        />
        <Error name="name" component="div" />
        {/* <br /> */}
        <Label htmlFor="contactId">Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={contactId}
          placeholder="+38 (999) 999 99 99"
          required
        />
        <Error name="number" component="div" />
        {/* <br /> */}
        <Button type="submit">Add contact</Button>
      </FormContact>
    </Formik>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
