import styled from 'styled-components';

export const Form = styled.form`
  display: flex;

  margin-top: 5px;

  & p {
    margin-right: 5px;
    margin-bottom: 2px;
    font-size: 20px;
  }

  & input {
    padding-left: 10px;
    /* border-radius: 35px; */
    border: 1px solid black;
  }
`;
