import styled from 'styled-components';
export const Button = styled.button`
  font-size: 1rem;
  color: white;
  border: transparent;
  border-radius: 5px ;
  padding: 10px;
  background-color: ${({ bgcolor }) => bgcolor};
  transition: background-color 0.9s ease;
  cursor: pointer;
`;
