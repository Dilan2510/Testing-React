import React from "react";
import ReactDOM from "react-dom/client";
// import { HelloWordApp } from "./HelloWordApp";
import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWordApp /> */}
    {/* <FirstApp title="Hola, Soy Vegeta" /> */}
    <CounterApp value={1} />
  </React.StrictMode>
);
