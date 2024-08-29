import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

import {
  FaHome,
  FaPhoneAlt,
  FaWifi,
  FaTv,
  FaBolt,
  FaExchangeAlt,
  FaHistory,
  FaQuestionCircle,
  FaSignOutAlt,
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Header from '../components/Header';

const sidebarItems = [
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
];

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-[#F8FAFC] shadow-md flex flex-col">
        <div className="p-6">
          <img src={Logo} alt="Subssum" className="h-8" />
        </div>
        <nav className="flex-grow">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 ${
                  isActive
                    ? 'bg-[#4169E1] text-white font-medium'
                    : 'text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#3B82F6]'
                }`
              }
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.name}</span>
              {item.hasSubmenu && <IoIosArrowDown className="ml-auto" />}
            </NavLink>
          ))}
        </nav>
        <div className="p-6">
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              `flex items-center ${
                isActive
                  ? 'text-[#4169E1] font-medium'
                  : 'text-[#64748B] hover:text-[#3B82F6]'
              }`
            }
          >
            <FaSignOutAlt className="h-5 w-5 mr-3" />
            <span>Log Out</span>
            <IoIosArrowDown className="ml-auto" />
          </NavLink>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <Header />

        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
