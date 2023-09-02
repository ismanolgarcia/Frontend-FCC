import { useEffect, useState } from 'react';
import { TimerContext } from './TimerContext';

export const TimerProvider = ({ children }) => {
  const [session, setSession] = useState(25);
  const [breakers, setBreakers] = useState(5);
  const [time, setTime] = useState({ minutes: session, seconds: 0 });
  const [isSession, setIsSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  const increaseSession = () => {
    setTime({ ...time, minutes: time.minutes >= 60 ? 60 : time.minutes + 1 });
    setSession(session >= 60 ? 60 : session + 1);
  };

  const decreaseSession = () => {
    setSession(session <= 1 ? 1 : session - 1);
    setTime({ ...time, minutes: time.minutes <= 1 ? 1 : time.minutes - 1 });
  };

  const increaseBreak = () => {
    setBreakers(breakers >= 60 ? 60 : breakers + 1);
  };
  const decreaseBreak = () => {
    if (breakers > 1) {
      setBreakers(breakers - 1);
    } else {
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    setSession(25);
    setTime({ minutes: 25, seconds: 0 });
    setBreakers(5);
    setIsSession(true);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime.minutes === 0 && prevTime.seconds === 0) {
            setIsSession((prevIsSession) => !prevIsSession);
            if (!isSession) {
              return { minutes: session, seconds: 0 };
            } else {
              decreaseBreak();
              setIsRunning(!isRunning);
              return { minutes: session, seconds: 0 };
            }
          } else {
            const newSeconds = prevTime.seconds - 1;
            if (newSeconds < 0) {
              return { minutes: prevTime.minutes - 1, seconds: 59 };
            } else {
              return { ...prevTime, seconds: newSeconds };
            }
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, isSession, session, breakers, decreaseBreak]);

  return (
    <TimerContext.Provider
      value={{
        session,
        breakers,
        increaseSession,
        decreaseSession,
        increaseBreak,
        decreaseBreak,
        resetTimer,
        time,
        toggleTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
