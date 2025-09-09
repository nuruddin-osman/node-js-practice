import React from "react";

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-lg">
              <span className="text-blue-600 font-bold text-xl">MA</span>
            </div>
            <span className="ml-3 text-white text-2xl font-semibold">
              MyApp
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-10">
            <a
              href="/"
              className="text-white hover:text-blue-200 font-medium text-lg px-4 py-2 border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              Home
            </a>
            <a
              href="/login"
              className="text-white hover:text-blue-200 font-medium text-lg px-4 py-2 border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-white hover:text-blue-200 font-medium text-lg px-4 py-2 border-b-2 border-transparent hover:border-white transition-all duration-300"
            >
              Register
            </a>
            <a
              href="/profile"
              className="bg-white text-blue-600 font-medium text-lg px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300 shadow-md hover:shadow-lg"
            >
              Profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
