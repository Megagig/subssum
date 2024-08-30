import React, { createContext, useState, useContext } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: 'Lawal Wahab',
    notifications: 3,
  });
  const [currentPage, setCurrentPage] = useState('');

  return (
    <NavbarContext.Provider
      value={{ userInfo, setUserInfo, currentPage, setCurrentPage }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);
