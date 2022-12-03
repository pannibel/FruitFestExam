import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.scss";
import Tickets from "./tickets/Tickets";
import LineupApp from "./lineup/LineupApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "tickets",
    element: <Tickets />,
  },
  {
    path: "lineup",
    element: <LineupApp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
