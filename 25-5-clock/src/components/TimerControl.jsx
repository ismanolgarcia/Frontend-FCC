import { useContext } from 'react';
import { TimerContext } from '../Context/TimerContext';

export const TimerControl = () => {
  const { resetTimer, toggleTimer } = useContext(TimerContext);

  return (
    <div className="timer">
      <button
        type="button"
        className="nes-btn is-primary btn-modify"
        id="start_stop"
        onClick={toggleTimer}
      >
        <i>⏯️</i>
      </button>
      <button
        type="button"
        className="nes-btn is-primary btn-modify"
        id="reset"
        onClick={resetTimer}
      >
        <i>🔁</i>
      </button>
    </div>
  );
};
