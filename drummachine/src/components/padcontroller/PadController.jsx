import { Display, Toggle,Author } from '../';
import './padcontroller.css'
export const PadController = () => {
  return (
    <div className='padcontroller'>
      <Display />
      <Toggle />
      <Author />
    </div>
  );
};
