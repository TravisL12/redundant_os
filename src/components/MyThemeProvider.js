import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { orderWindows } from "../utils/windowUtils";
import { welcome } from "./windowContents";

const ThemeToggleContext = createContext();

export const MyThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ color: "#46b78d" });
  const [windows, setWindows] = useState(orderWindows([welcome]));

  const openWindow = (newWindow) => {
    const updatedWindows = [...windows, newWindow];
    updateWindowOrder(updatedWindows.length - 1, updatedWindows);
  };

  const closeWindow = (removeId) => {
    const newWindows = windows.filter(({ id }) => id !== removeId);
    newWindows?.length === 0
      ? setWindows([])
      : updateWindowOrder(newWindows[newWindows.length - 1].id, newWindows);
  };

  const updateWindowOrder = (currentId, updatedWindows = null) => {
    let newWindows = orderWindows(updatedWindows || windows);
    const currentIndex = newWindows.findIndex(({ id }) => id === currentId);
    newWindows[currentIndex].sort = newWindows.length - 1;

    newWindows = newWindows.map((window, idx) => {
      return window.sort < newWindows[currentIndex].sort || currentIndex === idx
        ? window
        : { ...window, sort: window.sort - 1 };
    });

    setWindows(newWindows);
  };

  const updateTheme = (val) => {
    setTheme(val);
  };

  return (
    <ThemeToggleContext.Provider
      value={{ updateTheme, openWindow, closeWindow, updateWindowOrder }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export const useMyTheme = () => useContext(ThemeToggleContext);
