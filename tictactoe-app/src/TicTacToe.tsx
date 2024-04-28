import "./index.css";

function TicTacToe() {
  return (
    <>
      <div className="mainDiv">
        <p className="topic">Tic Tac Toe</p>
        <div className="card">
          <div className="row">
            <div className="boxes"></div>
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
