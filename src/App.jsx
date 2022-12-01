import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  const [showLineup, setShowLineup] = useState(false);
  const [showTickets, setShowTickets] = useState(false);

  return (
    <>
      <ul>
        <li>
          <a href={`tickets/TicketLanding`}>Buy the tickets</a>
        </li>
        <li>
          <a href={`lineup/LineupLanding`}>Check out the app</a>
        </li>
      </ul>
    </>
  );
}

export default App;
