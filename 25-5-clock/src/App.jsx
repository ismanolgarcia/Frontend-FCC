import { Timer } from './components/Timer';
import { TimerControl } from './components/TimerControl';
import { BreakLength } from './components/BreakLength';
import { SessionLength } from './components/SessionLength';

export const App = () => {
  return (
    <main className="nes-container is-rounded is-dark with-title">
      <h1 className="title">25 + 5 Clock</h1>
      <section className="wrapper">
        <BreakLength />
        <SessionLength />
      </section>
      <section>
        <Timer />
        <TimerControl />
      </section>
    </main>
  );
};
