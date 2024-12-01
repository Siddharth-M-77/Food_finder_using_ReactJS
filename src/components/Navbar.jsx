import React from "react";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav
      className={`p-4 shadow-md ${
        darkMode ? "bg-gray-800" : "bg-blue-600"
      } transition duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Recipe Finder</h1>
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-md font-semibold transition duration-300 ${
            darkMode
              ? "bg-white text-gray-800 hover:bg-gray-200"
              : "bg-blue-100 text-blue-800 hover:bg-blue-200"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
