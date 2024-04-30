import { MouseEvent, useState } from "react";
import "./index.css";
import circle from "./assets/circle.png";
import cross from "./assets/x.png";

function TicTacToe() {
  let data = ["", "", "", "", "", "", "", ""];
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (e: React.MouseEvent<HTMLDivElement>, num: number) => {
    if (lock) return 0;
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'>`;
      setCount(++count);
      data[num] = "x";
    } else {
      e.target.innerHTML = `<img src='${circle}'>`;
      setCount(++count);
      data[num] = "o";
    }
  };
  return (
    <>
      <div className="mainDiv">
        <p className="topic">Tic Tac Toe</p>
        <div className="card">
          <div className="row">
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row1">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row2">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
        </div>
        <button className="btn">Reset</button>
      </div>
    </>
  );
}

export default TicTacToe;
