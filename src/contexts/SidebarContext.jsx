import React, { createContext, useContext, useState } from 'react';
import {
  FaHome,
  FaPhoneAlt,
  FaWifi,
  FaTv,
  FaBolt,
  FaExchangeAlt,
  FaHistory,
  FaQuestionCircle,
} from 'react-icons/fa'; // Import the icons

// Create the context
const SidebarContext = createContext();

// Context provider component
export const SidebarProvider = ({ children }) => {
  const [sidebarItems, setSidebarItems] = useState([
    { name: 'Dashboard', icon: FaHome, path: '/' },
    {
      name: 'Buy Airtime',
      icon: FaPhoneAlt,
      path: '/buy-airtime',
      hasSubmenu: true,
    },
    { name: 'Buy Data', icon: FaWifi, path: '/buy-data', hasSubmenu: true },
    {
      name: 'TV Subscription',
      icon: FaTv,
      path: '/tv-subscription',
      hasSubmenu: true,
    },
    {
      name: 'Pay Electric Bill',
      icon: FaBolt,
      path: '/pay-electric-bill',
      hasSubmenu: true,
    },
    { name: 'Airtime to Cash', icon: FaExchangeAlt, path: '/airtime-to-cash' },
    {
      name: 'Transaction History',
      icon: FaHistory,
      path: '/transaction-history',
    },
    { name: 'Help & Support', icon: FaQuestionCircle, path: '/help-support' },
  ]);
  const [isLoginPage, setIsLoginPage] = useState(false);

  return (
    <SidebarContext.Provider
      value={{ sidebarItems, setSidebarItems, isLoginPage, setIsLoginPage }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the SidebarContext
export const useSidebar = () => useContext(SidebarContext);
