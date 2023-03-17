import React from "react";
import ReactDOM from "react-dom/client";

import PokeApi from "./components/PokeApi";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokeApi />
  </React.StrictMode>
);
