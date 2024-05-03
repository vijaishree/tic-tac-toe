import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Square from "./Square.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Square />
  </StrictMode>
);