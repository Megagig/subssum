import React, { createContext, useState } from 'react';

//create the context
const NavbarContext = createContext();

//export the context: context provider component

export const NavbarProvider = ({ children }) => {
  const userInfo = {
    name: 'Lawal Wahab',
    notifications: 3,
  };
  return (
    <NavbarContext.Provider value={{ userInfo }}>
      {children}
    </NavbarContext.Provider>
  );
};

//custom hook to use the NavbarContext
export const useNavbarContext = () => {
  return React.useContext(NavbarContext);
};
