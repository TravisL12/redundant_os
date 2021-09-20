import React, { createContext, useContext, useState } from "react";
import { orderWindows } from "../utils/windowUtils";
import { welcome } from "./WindowContents";

const WindowManageContext = createContext();

export const WindowManagerProvider = ({ children }) => {
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

  return (
    <WindowManageContext.Provider
      value={{ windows, openWindow, closeWindow, updateWindowOrder }}
    >
      {children}
    </WindowManageContext.Provider>
  );
};

export const useWindowManager = () => useContext(WindowManageContext);
