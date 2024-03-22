import { useEffect, useState } from "react";
import image from "./assets/watch.jpg";
import "./stopwatch.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setRunnable] = useState(false);

  useEffect(() => {
    let interval = 0;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((ptime) => ptime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="card">
      <img src={image} alt="watch" />
      <div className="card-body">
        <h2>Stopwatch</h2>
        <div className="time">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} :</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} :</span>
          <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="timeBtn">
          <button onClick={() => setRunnable(true)} className="btn btn-primary">
            Start
          </button>
          <button onClick={() => setRunnable(false)} className="btn btn-danger">
            Stop
          </button>
          <button onClick={() => setTime(0)} className="btn btn-success">
            Reset
          </button>
        </div>
      </div>
      <div className="card-footer">
        <h6>Version 1.0</h6>
      </div>
    </div>
  );
};

export default StopWatch;
