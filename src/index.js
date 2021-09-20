import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { WindowManagerProvider } from "./components/WindowManagerProvider";

ReactDOM.render(
  <React.StrictMode>
    <WindowManagerProvider>
      <App />
    </WindowManagerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
