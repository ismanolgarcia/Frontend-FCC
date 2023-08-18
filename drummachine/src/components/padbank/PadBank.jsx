import { useContext } from 'react';
import { Pad } from '../';
import './padBank.css';
import { BankContext } from '../../context';

export const PadBank = () => {
  const { bank } = useContext(BankContext);

  return (
    <div className="wrapper">
      {bank.map(({ clipName, url, id }) => (
        <Pad key={clipName} clipName={clipName} url={url} id={id} />
      ))}
    </div>
  );
};
