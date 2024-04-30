import { useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie";

function App() {
  useEffect(() => {
    document.title = "Movie Search";
  }, []);
  return (
    <div>
      <Movie />
    </div>
  );
}

export default App;
