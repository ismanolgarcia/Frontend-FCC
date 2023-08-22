import { styled } from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 90px);
  grid-template-rows: repeat(5, 90px);
  gap: 8px;
  grid-template-areas:
    'clear clear percent divide '
    'seven eight nine multiply'
    'four five six subtract'
    'one two three add'
    'zero zero decimal equals';

  @media (max-width: 400px) {
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(5, 80px);
  }
  @media (max-width: 370px) {
    grid-template-columns: repeat(4, 70px);
    grid-template-rows: repeat(5, 70px);
  }
`;
