import { useState } from "react";
import "./App.scss";
import LineupApp from "./LineupApp";
import Tickets from "./Tickets";

function App() {
  const [count, setCount] = useState(0);
  const [showLineup, setShowLineup] = useState(false);
  const [showTickets, setShowTickets] = useState(false);

  return (
    <>
      {!showLineup && (
        <button onClick={() => setShowLineup(true)}>Check out the app</button>
      )}
      {showLineup && <LineupApp />}
      {!showLineup && <Tickets />}
      <ul>
        <li>
          <a href={`tickets`}>Your Name</a>
        </li>
        <li>
          <a href={`contacts/2`}>Your Friend</a>
        </li>
      </ul>
    </>
  );
}

export default App;
