import { useState } from 'react';
import { bankOne, bankTwo } from '../assets/audio';
import { BankContext } from './BankContext';

export const BankProvider = ({ children }) => {
  const [bank, setBank] = useState(bankOne);
  const [input, setInput] = useState('');

  const changeBank = () => {
    setBank(bank === bankOne ? bankTwo : bankOne);
  };

  const getClipName = (clipName) => {
    setInput(clipName);
  };

  return (
    <BankContext.Provider value={{ bank, changeBank, input, getClipName }}>
      {children}
    </BankContext.Provider>
  );
};
