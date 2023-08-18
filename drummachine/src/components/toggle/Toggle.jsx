import { useContext } from 'react';
import { BankContext } from '../../context';
import './toggle.css';

export const Toggle = () => {
  const { changeBank } = useContext(BankContext);
  return (
    <>
    <p className='title__bank'>Bank</p>
    <label className="switch">
      <input type="checkbox" onClick={changeBank} />
      <span className="slider"></span>
    </label>
    </>
  );
};
