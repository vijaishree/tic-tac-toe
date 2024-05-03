import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Board from "./Board.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Board />
  </StrictMode>
);