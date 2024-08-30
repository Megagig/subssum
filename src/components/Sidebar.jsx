import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../contexts/SidebarContext';
import { FaChevronDown, FaSignOutAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Logo from '../assets/images/logo.png';

const nonClickablePaths = [
  '/buy-airtime',
  '/buy-data',
  '/tv-subscription',
  '/pay-electric-bill',
];

const Sidebar = () => {
  const { sidebarItems, isLoginPage } = useSidebar();

  if (isLoginPage) {
    return (
      <aside className="w-64 bg-blue-600 text-white min-h-screen p-6 flex flex-col">
        <div className="mb-8">
          <img src={Logo} alt="Subsum" className="h-8" />
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className="flex items-center justify-between p-2 hover:bg-blue-700 rounded"
                >
                  <div className="flex items-center">
                    <item.icon className="mr-3" />
                    <span>{item.name}</span>
                  </div>
                  {item.hasSubmenu && <FaChevronDown className="ml-2" />}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <p className="text-sm font-semibold">
            The BEST place to subscribe / buy
          </p>
        </div>
      </aside>
    );
  }

  return (
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
  );
};

export default Sidebar;
