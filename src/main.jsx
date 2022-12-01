import React from "react";
import Root from "./App.jsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Tickets from "./tickets/Tickets";
import LineupApp from "./lineup/LineupApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "tickets/TicketLanding",
    element: <Tickets />,
  },
  {
    path: "lineup/LineupLanding",
    element: <LineupApp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
