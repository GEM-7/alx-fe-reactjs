import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import mockRecipes from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (mockRecipes && mockRecipes.length > 0) {
      const foundRecipe = mockRecipes.find((r) => r.id.toString() === id);

      setRecipe(foundRecipe);
      setLoading(false);
    } else if (mockRecipes) {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="text-center p-8 text-xl">Loading Recipe Details...</div>
    );
  }

  if (!recipe) {
    return (
      <div className="text-center p-8 text-xl text-red-600">
        Recipe with ID **{id}** not found.
      </div>
    );
  }

  const { name, image, summary, ingredients, instructions } = recipe;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{name}</h1>

      <div className="mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover rounded-md shadow-md"
        />
      </div>

      <p className="text-lg mb-8 text-gray-700 italic">"{summary}"</p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">
          🛒 Ingredients
        </h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          {ingredients.map((ing, index) => (
            <li key={index} className="text-gray-700">
              {ing}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">
          👨‍🍳 Cooking Instructions
        </h2>
        <ol className="list-decimal list-inside space-y-3 ml-4">
          {instructions.map((step, index) => (
            <li key={index} className="text-gray-700 leading-relaxed list-none">
              <strong>Step {index + 1}: </strong> {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="text-center mt-10">
        <a
          href="/"
          className="inline-block px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition duration-150"
        >
          &larr; Back to All Recipes
        </a>
      </div>
    </div>
  );
}
