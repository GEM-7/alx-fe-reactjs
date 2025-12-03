import React, { useState, useEffect } from "react";
import mockRecipes from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load the data when the component mounts
  useEffect(() => {
    setTimeout(() => {
      setRecipes(mockRecipes);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <div className="text-center p-8 text-xl">Loading Recipes...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Featured Recipes
      </h1>

      {/* Grid container */}
      <div className="sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

// ------------------- Recipe Card Component -------------------

const RecipeCard = ({ recipe }) => {
  return (
    <div
      className="
        bg-grey-500 
        rounded-xl 
        shadow-lg 
        overflow-hidden 
        transition-all duration-300 
        hover:shadow-2xl 
        hover:scale-[1.02]
        cursor-pointer
        text-center
      "
    >
      {/* Image */}
      <img
        className="w-full h-48 object-cover sm:h-56 lg:h-64 md:h-72"
        src={recipe.image}
        alt={recipe.title}
      />

      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {recipe.title}
        </h2>
        {/* Summary */}
        <p className="text-gray-600 text-sm line-clamp-3">{recipe.summary}</p>
      </div>
    </div>
  );
};

export default HomePage;
