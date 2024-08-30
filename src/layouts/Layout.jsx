import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSidebar } from '../contexts/SidebarContext';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Header from '../components/Header';
import Logo from '../assets/images/logo.png';

const nonClickablePaths = [
  '/buy-airtime',
  '/buy-data',
  '/tv-subscription',
  '/pay-electric-bill',
];

const Layout = () => {
  const { sidebarItems } = useSidebar();

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-[#F8FAFC] shadow-md flex flex-col">
        <div className="p-6">
          <img src={Logo} alt="Subssum" className="h-8" />
        </div>
        <nav className="flex-grow">
          {sidebarItems.map((item) => {
            const isNonClickable = nonClickablePaths.includes(item.path);

            return isNonClickable ? (
              <div
                key={item.name}
                className="flex items-center justify-between px-6 py-3 text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#3B82F6] cursor-pointer"
              >
                <div className="flex items-center">
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.name}</span>
                </div>
                <IoIosArrowDown className="h-4 w-4" />
              </div>
            ) : (
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
              </NavLink>
            );
          })}
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
