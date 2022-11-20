import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 350px;

  padding: 20px;
  margin: 20px;

  background-color: white;

  border: 2px solid #4caf50;
  /* border-radius: 35px; */

  box-shadow: #4caf50 0px 20px 30px -10px;

  &:hover {
    background: #9e4624;
    color: white;
    transition: opacity 0.45s ease, transform 0.1s ease;
    transform: scale(1.02);
    border: 2px solid #9e4624;
    box-shadow: #9e4624 0px 20px 30px -10px;
  }
`;
