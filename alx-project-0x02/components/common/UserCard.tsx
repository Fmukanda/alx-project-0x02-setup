import React, { FC } from 'react';
import { UserProps } from '@/interfaces'; 

/**
 * A dedicated component to display user data.
 */
const UserCard: FC<UserProps> = ({ name, email, address, website }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500 hover:shadow-xl transition duration-300 transform hover:scale-[1.02]">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
      <p className="text-sm text-purple-600 mb-4">
        {website}
      </p>
      
      <div className="space-y-2 text-gray-700">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span className="truncate">{email}</span>
        </div>
        <div className="flex items-start space-x-2">
          <svg className="w-5 h-5 text-gray-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.057 4.041A7.126 7.126 0 0110 3a7.126 7.126 0 014.943 1.041 3.5 3.5 0 00-2.288-2.288 5 5 0 00-1.378-.49 5.002 5.002 0 00-1.898 0A5 5 0 006.345 1.753a3.5 3.5 0 00-2.288 2.288zM4.464 5.536A5.137 5.137 0 003 10c0 1.25.32 2.434.922 3.486l-2.096 1.886A.5.5 0 002 16h16a.5.5 0 00.174-.158L16.07 13.486A5.137 5.137 0 0017 10c0-1.25-.32-2.434-.922-3.486l2.096-1.886A.5.5 0 0018 4H2a.5.5 0 00-.174.158L4.464 5.536z" clipRule="evenodd" />
          </svg>
          <span>
            {address.street}, {address.suite}, {address.city}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
