import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TicTacToe from "./TicTacToe";

function App() {
  const [count, setCount] = useState(0);

  return <TicTacToe></TicTacToe>;
}

export default App;
