import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction}) => direction};
  justify-content: ${({content }) => content};
  align-items: center;
  gap: 25px;
`;
