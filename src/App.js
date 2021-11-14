import { useState, useCallback, useRef } from "react";
import { timer, interval } from "rxjs";

import "./App.scss";

const rxInterval = interval(1000);

function App() {
  const subscribtionRef = useRef();

  const [time, setTime] = useState(new Date(0));
  const [goTime, setGoTime] = useState(false);
  const [clicked, setClicked] = useState(false);

  const timeFixer = useCallback((str) => {
    return str.toString().length < 2 ? "0" + str : str;
  }, []);

  const stopTimer = useCallback(() => {
    subscribtionRef.current.unsubscribe();
    setGoTime(false);
  }, []);

  const startTimer = useCallback(() => {
    subscribtionRef.current = rxInterval.subscribe((n) =>
      setTime(new Date(time.setUTCSeconds(time.getUTCSeconds() + 1)))
    );
    setGoTime(true);
  }, []);

  const handleTimerStart = useCallback(() => {
    if (!goTime) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [goTime]);

  const handleWait = useCallback(() => {
    if (clicked) {
      stopTimer();
    } else {
      setClicked(true);
      timer(300).subscribe((time) => setClicked(false));
    }
  }, [clicked]);

  const handleReset = useCallback(() => {
    try {
      stopTimer();
      setTime(new Date(time.setUTCSeconds(0)));
      startTimer();
    } catch {
      alert("Time not going");
    }
  }, []);

  return (
    <div className="App col centered">
      <div className="row centered">
        <h1>{timeFixer(time.getUTCHours())}</h1>:
        <h1>{timeFixer(time.getUTCMinutes())}</h1>:
        <h1>{timeFixer(time.getUTCSeconds())}</h1>
      </div>
      <div className="row centered">
        <button
          className={`${goTime ? "red" : "green"}`}
          onClick={() => handleTimerStart()}
        >
          {goTime ? "Stop" : "Start"}
        </button>
        <button className="orange" onClick={() => handleWait()}>
          Wait
        </button>
        <button className="blue" onClick={() => handleReset()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
