import { useState } from "react";

export default function AddRecipeForm() {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [submittedRecipe, setSubmittedRecipe] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientsArray = ingredients
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const instructionsArray = instructions
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const newRecipe = {
      id: Date.now(),
      title: recipeName,
      summary: description,
      ingredients: ingredientsArray,
      instructions: instructionsArray,
      image: "https://placehold.co/600x400/3498db/ffffff?text=New+Recipe",
    };

    console.log("Submitting new recipe:", newRecipe);

    setSubmittedRecipe(newRecipe);
    setRecipeName("");
    setDescription("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <h1 className="text-3xl m-4 text-center font-bold mb-4 w-fit mx-auto">
        Add New Recipe
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center mx-auto m-8 shadow-xl rounded-md p-8 bg-white text-gray-800 w-full max-w-2xl border border-gray-200 md:w-1/2 lg:w-1/3"
      >
        <div className="flex justify-between gap-4 w-full items-center">
          <label htmlFor="title" className="font-bold w-1/4 min-w-fit">
            Recipe Name:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={recipeName}
            required
            className="p-2 border border-gray-300 rounded-md flex-1"
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>

        <div className="flex justify-between gap-4 w-full">
          <label
            htmlFor="description"
            className="font-bold w-1/4 min-w-fit pt-2"
          >
            Summary/Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            rows="2"
            required
            className="p-2 border border-gray-300 rounded-md flex-1"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-between gap-4 w-full">
          <label
            htmlFor="ingredients"
            className="font-bold w-1/4 min-w-fit pt-2"
          >
            Ingredients (1 per line):
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={ingredients}
            rows="4"
            required
            placeholder="e.g., 1 cup flour&#10;2 large eggs&#10;1 tsp salt"
            className="p-2 border border-gray-300 rounded-md flex-1"
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-between gap-4 w-full">
          <label
            htmlFor="instructions"
            className="font-bold w-1/4 min-w-fit pt-2"
          >
            Instructions (1 step per line):
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={instructions}
            rows="4"
            required
            placeholder="e.g., Preheat oven to 350°F.&#10;Mix dry ingredients.&#10;Bake for 30 minutes."
            className="p-2 border border-gray-300 rounded-md flex-1"
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg font-semibold transition duration-150 mt-4 shadow-md"
        >
          Add Recipe
        </button>
      </form>

      {submittedRecipe && (
        <div className="mt-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg w-full max-w-2xl">
          <p className="font-bold">✅ Recipe Submitted Successfully!</p>
          <p>
            **{submittedRecipe.title}** has {submittedRecipe.ingredients.length}{" "}
            ingredients and {submittedRecipe.instructions.length} steps.
          </p>
          <p className="text-sm italic">
            (Check your console for the full object.)
          </p>
        </div>
      )}
    </div>
  );
}
