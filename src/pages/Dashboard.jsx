import React from 'react';
import CreditCard from '../assets/images/Credit Card.png';

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wallet Balance and Referral Section */}
        <div className="space-y-6">
          {/* Wallet Balance */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-gray-500 text-sm">Wallet Balance</h2>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                  ₦3000
                </p>
              </div>
              <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg">
                Fund Wallet
              </button>
            </div>
          </div>

          {/* Referral Section */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md space-y-4">
            <div>
              <h2 className="text-gray-500 text-sm">Referral</h2>
              <p className="text-gray-900">Referral Code: 18/52ha089</p>
            </div>
            <div className="flex flex-wrap space-x-2 sm:space-x-4 text-blue-600 text-sm">
              <button className="flex items-center space-x-1">
                <span>Copy</span>
              </button>
              <button className="flex items-center space-x-1">
                <span>Edit</span>
              </button>
              <button className="flex items-center space-x-1">
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Referrals and Bonus */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-4 sm:mb-0">
                <h2 className="text-gray-500 text-sm">Total referrals made</h2>
                <p className="text-lg font-semibold">0</p>
              </div>
              <div>
                <h2 className="text-gray-500 text-sm">Current wallet Bonus</h2>
                <p className="text-lg font-semibold">₦0.00</p>
              </div>
            </div>
            <button className="text-blue-600 mt-4">Cashout</button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg shadow-md flex items-center gap-20 col-span-1 lg:col-span-2">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Cards</h2>
            <p className="text-gray-500">You Have No Saved Cards</p>
          </div>
          <div>
            <img
              src={CreditCard}
              alt="Cards"
              className="mx-auto w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
