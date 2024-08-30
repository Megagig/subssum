import React, { useState } from 'react';

const AirtimeToCash = () => {
  const [activeTab, setActiveTab] = useState('Fill Info');
  const [network, setNetwork] = useState('Etisalat');

  const tabs = ['Fill Info', 'Make Payment', 'View Receipt'];

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 px-4 ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                : 'text-gray-400'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-semibold text-center mb-6">
        Airtime to Cash
      </h2>

      <form>
        <div className="mb-4">
          <label
            htmlFor="network"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Select Network
          </label>
          <div className="relative">
            <select
              id="network"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
            >
              <option value="Etisalat">Etisalat</option>
              <option value="MTN">MTN</option>
              <option value="Airtel">Airtel</option>
              <option value="Glo">Glo</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="08094562627"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Amount
          </label>
          <input
            type="text"
            id="amount"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="₦5,000"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="pin"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Airtime Share Pin
          </label>
          <input
            type="password"
            id="pin"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="3546576433"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default AirtimeToCash;
