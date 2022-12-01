import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Lineup from "./Lineup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Lineup />;
      <Tickets />
    </>
  );
}

export default App;
