import styled from 'styled-components';

export const TextTarea = styled.textarea`
  background-color: #061826;
  color: white;
  width: 50%;
  height: 100%;
  border: 5px solid #0471a6;
  outline: none;
  font-size: 1rem;
  padding: 10px;
  resize: none;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
