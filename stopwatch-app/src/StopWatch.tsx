import image from "./assets/watch.jpg";
import "./stopwatch.css";

const StopWatch = () => {
  return (
    <div className="card">
      <img src={image} alt="watch" />
      <div className="card-body">
        <h2>Stopwatch</h2>
        <div className="time">
          <span>min</span>
          <span>sec</span>
          <span>m.sec</span>
        </div>
        <div className="timeBtn">
          <button className="btn btn-primary">Start</button>
          <button className="btn btn-danger">Stop</button>
          <button className="btn btn-success">Reset</button>
        </div>
      </div>
      <div className="card-footer">
        <h6>Version 1.0</h6>
      </div>
    </div>
  );
};

export default StopWatch;
