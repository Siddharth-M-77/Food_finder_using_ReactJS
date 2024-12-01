import React, { useState } from "react";
import Navbar from "./components/Navbar";
import RecipeList from "./components/Recipe";
import SearchBar from "./components/SearchBar";

const App = () => {
  const apiKey = "8dd64198f4a64ee99ef5a5966519455b";
  const [darkMode, setDarkMode] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark"); // Toggle the dark class on the root element
  };
  const fetchRecipes = async (query) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&number=10&apiKey=${apiKey}`
    );
    const data = await response.json();
    console.log(data)
    setRecipes(data);
  };

  return (
    <div
      className={`min-h-screen  ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } w-screen`}
    >
      {/* Navbar */}
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <SearchBar onSearch={fetchRecipes} />

        {/* Recipe List */}
        <RecipeList darkMode={darkMode} recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
