import { useContext } from 'react';
import { TimerContext } from '../Context/TimerContext';

export const BreakLength = () => {
  const { increaseBreak, decreaseBreak, breakers } = useContext(TimerContext);

  return (
    <div className="Length">
      <p id="break-label">Break Length</p>
      <div>
        <button
          type="button"
          className="nes-btn is-primary"
          id="break-decrement"
          onClick={decreaseBreak}
        >
          ↓
        </button>
        <span id="break-length">{breakers}</span>
        <button
          type="button"
          className="nes-btn is-primary"
          id="break-increment"
          onClick={increaseBreak}
        >
          ↑
        </button>
      </div>
    </div>
  );
};
