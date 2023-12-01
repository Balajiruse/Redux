/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

const AppCtx = createContext(null);
const AppContext = ({ children }) => {
  const [info, setinfo] = useState();
  return (
    <AppCtx.Provider
      value={{
        info,
        setinfo,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export const AppState = () => {
  return useContext(AppCtx);
};
export default AppContext;
