import styled from 'styled-components';

export const Author = styled.cite`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ color }) => color};
  transition: color 0.9s ease;
  margin-bottom: 20px;
`;
