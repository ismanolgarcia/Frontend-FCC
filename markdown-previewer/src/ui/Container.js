import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ bgcolor }) => bgcolor};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  overflow: hidden;

  @media (max-width: 900px) {
    &.column {
      flex-direction: column;
      background-color: red;
    }
  }

  &.ToolBar {
    margin: 0 10px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
