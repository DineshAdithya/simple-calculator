import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BasicGrid from "./BasicGrid";
import Screen from "./Screen";
import { Paper } from "@mui/material";
export default function App() {
  return (
    <>
      <Paper elevation={9} className="calculator">
        <div className="keyboard">
          <BasicGrid />
        </div>
      </Paper>
    </>
  );
}
