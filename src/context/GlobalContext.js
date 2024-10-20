import React, { createContext} from 'react';

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {

  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  );
};
