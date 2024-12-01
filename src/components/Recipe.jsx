import React from "react";

const RecipeList = ({ recipes, darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } grid grid-cols-1 md:grid-cols-3 gap-4 p-4`}
    >
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          } rounded-lg shadow-lg`}
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2
              className={`text-lg font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {recipe.likes}-❤ likes
            </h2>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {recipe.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
