import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import {
  HomeIcon,
  PhoneIcon,
  WifiIcon,
  DesktopComputerIcon,
  LightningBoltIcon,
  CashIcon,
  ClockIcon,
  SupportIcon,
} from '@heroicons/react/outline';

export const sidebarItems = [
  { name: 'Dashboard', icon: HomeIcon, path: '/' },
  { name: 'Buy Airtime', icon: PhoneIcon, path: '/buy-airtime' },
  { name: 'Buy Data', icon: WifiIcon, path: '/buy-data' },
  {
    name: 'TV Subscription',
    icon: DesktopComputerIcon,
    path: '/tv-subscription',
  },
  {
    name: 'Pay Electric Bill',
    icon: LightningBoltIcon,
    path: '/pay-electric-bill',
  },
  { name: 'Airtime to Cash', icon: CashIcon, path: '/airtime-to-cash' },
  {
    name: 'Transaction History',
    icon: ClockIcon,
    path: '/transaction-history',
  },
  { name: 'Help & Support', icon: SupportIcon, path: '/help-support' },
];

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <img src="/subssum-logo.png" alt="Subssum" className="h-8" />
        </div>
        <nav className="mt-8">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 ${
                  isActive ? 'bg-subssum-light-blue text-subssum-blue' : ''
                }`
              }
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Welcome, Lawal Wahab</h1>
          <button className="bg-subssum-blue text-white px-4 py-2 rounded-md">
            Upgrade To Merchant
          </button>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
