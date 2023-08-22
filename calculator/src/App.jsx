import { useState } from 'react';
import { KeyBoard } from './components/KeyBoard';
import { Container, Display } from './ui';
import { evaluate } from 'mathjs';
import { getValue } from './utils/getValue';
export const App = () => {
  const [input, setInput] = useState('0');

  const showResult = () => {
    if (input === '0') {
      setInput(input);
    } else {
      setInput(evaluate(input).toString());
    }
  };

  const cleanDisplay = () => {
    setInput('0');
  };

  const handleGetValue = (value) => {
    setInput((prevInput) => getValue(value, prevInput));
  };

  return (
    <Container>
      <Display id="display">{input}</Display>
      <KeyBoard
        getValue={handleGetValue}
        showResult={showResult}
        cleanDisplay={cleanDisplay}
      />
    </Container>
  );
};
