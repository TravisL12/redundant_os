import React from "react";

import { MyThemeProvider } from "./MyThemeProvider";
import MenuBar from "./MenuBar";
import Desktop from "./Desktop/index";
import "../styles/application.scss";
import { useWindowManager } from "./WindowManagerProvider";

function App() {
  const { windows, openWindow, updateWindowOrder, closeWindow } =
    useWindowManager();

  return (
    <MyThemeProvider>
      <div className="app-container">
        <MenuBar openWindow={openWindow} />
        <Desktop
          windows={windows}
          updateWindowOrder={updateWindowOrder}
          closeWindow={closeWindow}
        />
      </div>
    </MyThemeProvider>
  );
}

export default App;
