'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 
      backdrop-blur-md bg-green-900 border border-green-300/30 
      rounded-full px-8 py-2 flex items-center justify-between shadow-lg w-fit">

      <div className="flex items-center space-x-8">
        <Link href="/"
          className={`font-semibold cursor-default transition-colors duration-300 ${pathname === '/' ? 'text-green-300' : 'text-white hover:text-green-500'}`}>
          Home
        </Link>

        <Link href="/about"
          className={`font-semibold cursor-default transition-colors duration-300 ${pathname === '/about' ? 'text-green-300' : 'text-white hover:text-green-500'}`}>
          About
        </Link>

        <Link href="/volunteer"
          className={`font-semibold cursor-default transition-colors duration-300 ${pathname === '/volunteer' ? 'text-green-300' : 'text-white hover:text-green-500'}`}>
          Volunteer
        </Link>

        <Link href="/contact"
          className={`font-semibold cursor-default transition-colors duration-300 ${pathname === '/contact' ? 'text-green-300' : 'text-white hover:text-green-500'}`}>
          Contact us
        </Link>
      </div>

    </nav>
  );
}
