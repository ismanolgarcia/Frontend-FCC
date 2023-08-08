import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  height: 100vh;
  background-color: ${({ bgcolor }) => bgcolor};
  transition: background-color 0.9s ease;
`;
