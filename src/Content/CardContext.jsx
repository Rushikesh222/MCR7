import { createContext, useContext, useState } from "react";
import { trip } from "../assets/Data";

export const CardContext = createContext();
export const CardProvider = ({ children }) => {
  return (
    <CardContext.Provider value={{ trip }}>{children}</CardContext.Provider>
  );
};
export const usedata = () => useContext(CardContext);
