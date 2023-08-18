import { PadBank, PadController } from './components';
import { BankProvider } from './context/BankProvider';
import './App.css';

export const App = () => {
  return (
    <BankProvider>
      <main id="drum-machine">
        <div className="container">
          <PadBank />
          <PadController />
        </div>
      </main>
    </BankProvider>
  );
};
