import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex space-x-5">
      <nav className="flex space-x-5">
        
        {/* Navigates to the root (index) page */}
        <Link href="/">
            <span className="text-white hover:text-blue-400 cursor-pointer transition duration-300">
                Root
            </span>
        </Link>
        
        {/* Navigates to the /home page */}
        <Link href="/home">
            <span className="text-white hover:text-blue-400 cursor-pointer transition duration-300">
                Home
            </span>
        </Link>

        {/* Navigates to the /about page */}
        <Link href="/about">
            <span className="text-white hover:text-blue-400 cursor-pointer transition duration-300">
                About
            </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
