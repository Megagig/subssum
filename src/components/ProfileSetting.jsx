import React, { useState } from 'react';
import { FaCamera, FaCopy } from 'react-icons/fa';

const ProfileSetting = () => {
  const [activeTab, setActiveTab] = useState('Change Password');

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Profile Image */}
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="relative w-32 h-32 mx-auto">
              <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder-image.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full">
                <FaCamera />
              </button>
            </div>
            <p className="text-blue-500 text-center mt-4">Upload Image</p>
          </div>

          {/* User Details */}
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Name</span>
                <span className="font-medium">Lawal Wahab Babatunde</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email</span>
                <span className="font-medium">wabdotmail@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone Number</span>
                <span className="font-medium">0906 856 2949</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account Status</span>
                <span className="text-green-500 font-medium">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Referral link</span>
                <div className="flex items-center">
                  <span className="font-medium mr-2 text-sm">
                    www.subsum.com/tre/wd...
                  </span>
                  <button className="text-blue-500">
                    <FaCopy />
                  </button>
                </div>
              </div>
            </div>
            <button className="text-blue-500 mt-4">Edit Details</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-lg p-6 shadow">
          <div className="flex mb-6">
            <button
              className={`mr-4 pb-2 ${
                activeTab === 'Change Password'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('Change Password')}
            >
              Change Password
            </button>
            <button
              className={`flex items-center ${
                activeTab === 'Change PIN'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('Change PIN')}
            >
              Change PIN
              <span className="ml-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                S
              </span>
            </button>
          </div>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="currentPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter Current Password"
              />
            </div>
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter New Password"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter New Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
