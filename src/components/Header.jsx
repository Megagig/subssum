import React from 'react';
import { FaBell, FaLock, FaUser } from 'react-icons/fa';
import { useNavbarContext } from '../context/NavbarContext';

const Header = () => {
  const { userInfo } = useNavbarContext(); //// Access user info from context
  return (
    <header className="bg-white shadow-sm px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
          Welcome, {userInfo.name}
        </h1>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium hidden sm:block hover:bg-blue-200 transition-colors duration-200">
            Upgrade To Merchant
          </button>
          <div className="relative">
            <FaBell className="text-gray-500 w-5 h-5 cursor-pointer hover:text-gray-700" />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 bg-red-500 text-white text-xs rounded-full">
              {userInfo.notifications}
            </span>
          </div>
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
            <FaLock className="text-gray-500 w-4 h-4" />
          </button>
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
            <FaUser className="text-gray-500 w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
