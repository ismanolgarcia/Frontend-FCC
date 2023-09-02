import { useContext } from 'react';
import { TimerContext } from '../Context/TimerContext';

export const SessionLength = () => {
  const { increaseSession, decreaseSession, session } = useContext(TimerContext);

  return (
    <div className="Length">
      <p id="session-label"> Session Length</p>
      <div>
        <button
          type="button"
          className="nes-btn is-primary"
          id="session-decrement"
          onClick={decreaseSession}
        >
          ↓
        </button>
        <span id="session-length">{session}</span>
        <button
          type="button"
          className="nes-btn is-primary"
          id="session-increment"
          onClick={increaseSession}
        >
          ↑
        </button>
      </div>
    </div>
  );
};
