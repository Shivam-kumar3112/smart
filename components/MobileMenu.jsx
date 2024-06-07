import React from "react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <nav className="lg:hidden bg-white shadow-md absolute w-full top-full left-0">
      <ul className="flex flex-col items-center py-4 space-y-4">
        <li>
          <Link href="#home">
            <a className="text-gray-900 hover:text-blue-700 font-spline transition duration-300">Home</a>
          </Link>
        </li>
        <li>
          <Link href="#how-it-works">
            <a className="text-gray-900 hover:text-blue-700 font-spline transition duration-300">How It Works</a>
          </Link>
        </li>
        <li>
          <Link href="#pricing">
            <a className="text-gray-900 hover:text-blue-700 transition font-spline duration-300">Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="#partners">
            <a className="text-gray-900 hover:text-blue-700 transition font-spline duration-300">Partners</a>
          </Link>
        </li>
        <li>
          <Link href="/evaluate">
            <a className="text-gray-900 flex items-center hover:text-blue-700 transition duration-300">
              Interview <span className="px-2"><MdArrowOutward /></span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/signIn">
            <a className="text-gray-900 hover:text-blue-700 font-spline transition duration-300 flex items-center">
              <FaSignInAlt className="mr-2" /> Login
            </a>
          </Link>
        </li>
        <li>
          <Link href="/createAccount">
            <a className="bg-blue-700 text-white px-4 py-2 font-spline rounded-md hover:bg-blue-800 transition duration-300 flex items-center">
              <FaUser className="mr-2" /> Signup
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
