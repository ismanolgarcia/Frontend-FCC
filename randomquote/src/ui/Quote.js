import styled from 'styled-components';

export const Quote = styled.q`
  font-size: 1.5rem;
  color: ${({ color }) => color};
  transition: color 0.9s ease;
  font-weight: 400;
  text-align: center;
`;
