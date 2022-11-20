import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 24px;

  :last-child {
    margin-top: 10px;
  }
`;

export const Input = styled(Field)`
  height: 30px;
  padding-left: 10px;
  /* border-radius: 35px; */
  border: 1px solid black;
  font-size: 20px;
`;

export const Error = styled(ErrorMessage)`
  color: red;
  text-align: center;
  font-weight: bold;

  margin: 3px 0;
  height: 25px;

  font-size: 20px;
`;

export const Button = styled.button`
  margin: 40px 0px 20px 0px;

  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &:hover {
    background: green;
    color: white;
    transition: opacity 0.45s ease, transform 0.1s ease;
    transform: scale(1.02);
  }
`;
