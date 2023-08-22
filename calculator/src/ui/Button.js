import { styled } from 'styled-components';
import { orange, black, lightGray, darkGray } from '../styles/variables';
export const Button = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 50px;
  font-size: 2.3rem;
  font-weight: 400;
  background-color: ${darkGray};
  ${(props) => props.id && `grid-area: ${props.id};`}
  ${(props) =>
    props.id === 'clear' &&
    `background-color:   ${lightGray};  color: ${black} `}
  ${(props) =>
    props.id === 'percent' &&
    `background-color: ${lightGray};  color: ${black}  `}  
  ${(props) => props.id === 'divide' && `background-color: ${orange}  ;    `}
  ${(props) => props.id === 'multiply' && `background-color: ${orange}  ;  `}
  ${(props) => props.id === 'subtract' && `background-color: ${orange}  ;  `}
  ${(props) => props.id === 'add' && `background-color: ${orange}  ;       `}
  ${(props) => props.id === 'equals' && `background-color: ${orange}  ;    `}
`;
