import { useState } from "react";
import "./App.scss";
import Lineup from "./Lineup";
import Tickets from "./Tickets";

function App() {
  const [count, setCount] = useState(0);
  const [showLineup, setShowLineup] = useState(false);
  const [showTickets, setShowTickets] = useState(false);


  return (
    <>
      {/* mainly mobile */}
      {/* <Lineup /> */}
      {!showLineup && !showTickets && (
        <button onClick={() => setShowLineup(true)}>Check out the app</button>
      )}
      {!showLineup &&  !showTickets && (
        <button onClick={() => setShowTickets(true)}>Get tickets</button>
      )}
      {showLineup && <Lineup />}
      {showTickets && <Tickets />}
      {/* mainly desktop */}
      {/* <Tickets /> */}
    </>
  );
}

export default App;
