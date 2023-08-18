import { useContext } from 'react';
import { BankContext } from '../../context';
import './display.css';
export const Display = () => {
  const { input } = useContext(BankContext);
  return (
    <div id="display">
      <p>{input}</p>
    </div>
  );
};
