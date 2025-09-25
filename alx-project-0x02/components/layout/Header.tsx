import Link from 'next/link';
import { FC } from 'react';

// Use the FC (Functional Component) type from React
const Header: FC = () => {
  return (
    // Tailwind CSS styling for the header
    <header className="bg-gray-800 p-4 shadow-lg sticky top-0 z-10">
      <nav className="flex space-x-6">
        
        {/* Navigates to the root (index) page */}
        <Link 
          href="/" 
          className="text-white hover:text-blue-400 transition duration-300 font-semibold"
        >
          Root
        </Link>
        
        {/* Link to the /home page */}
        <Link 
          href="/home" 
          className="text-white hover:text-blue-400 transition duration-300 font-semibold"
        >
          Home
        </Link>

        {/* Link to the /about page */}
        <Link 
          href="/about" 
          className="text-white hover:text-blue-400 transition duration-300 font-semibold"
        >
          About
        </Link>
        
        {/* Link to the new /posts page */}
        <Link 
          href="/posts" 
          className="text-white hover:text-blue-400 transition duration-300 font-semibold"
        >
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
