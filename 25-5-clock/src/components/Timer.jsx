import { useContext } from 'react';
import { TimerContext } from '../Context/TimerContext';

export const Timer = () => {
  const { time } = useContext(TimerContext);

  return (
    <div>
      <h2 id="timer-label">Timer</h2>
      <span id="time-left">
        {`${time.minutes}:${time.seconds < 10 ? '0' : ''}${time.seconds}`}
      </span>
    </div>
  );
};
