import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Lineup from "./Lineup";
import Tickets from "./Tickets";

function App() {
  const [count, setCount] = useState(0);
  const [showLineup, setShowLineup] = useState(false);

  return (
    <>
      {/* mainly mobile */}
      {/* <Lineup /> */}
      {!showLineup && (
        <button onClick={() => setShowLineup(true)}>Check out the app</button>
      )}
      {showLineup && <Lineup />}
      {!showLineup && <Tickets />}
      {/* mainly desktop */}
      {/* <Tickets /> */}
    </>
  );
}

export default App;
