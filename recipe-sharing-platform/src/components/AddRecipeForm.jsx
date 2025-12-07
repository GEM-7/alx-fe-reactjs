import { useState } from "react";

export function validate({
  recipeName = "",
  description = "",
  ingredients = "",
  instructions = "",
} = {}) {
  const errors = {};
  const ingredientsArray = String(ingredients)
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i.length > 0);
  const instructionsArray = String(instructions)
    .split("\n")
    .map((i) => i.trim())
    .filter((i) => i.length > 0);

  if (String(recipeName).trim().length < 3) {
    errors.recipeName = "Recipe name must be at least 3 characters.";
  }
  if (String(description).trim().length < 10) {
    errors.description = "Description must be at least 10 characters.";
  }
  if (ingredientsArray.length === 0) {
    errors.ingredients = "Please add at least one ingredient (one per line).";
  }
  if (instructionsArray.length === 0) {
    errors.instructions =
      "Please add at least one instruction step (one per line).";
  }

  return errors;
}

export default function AddRecipeForm() {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [submittedRecipe, setSubmittedRecipe] = useState(null);
  const [errors, setErrors] = useState({});

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

    const newErrors = {};
    if (recipeName.trim().length < 3) {
      newErrors.recipeName = "Recipe name must be at least 3 characters.";
    }
    if (description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }
    if (ingredientsArray.length === 0) {
      newErrors.ingredients =
        "Please add at least one ingredient (one per line).";
    }
    if (instructionsArray.length === 0) {
      newErrors.instructions =
        "Please add at least one instruction step (one per line).";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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
    setErrors({});
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
            aria-invalid={errors.recipeName ? "true" : "false"}
            aria-describedby={errors.recipeName ? "title-error" : undefined}
            className={
              "p-2 border rounded-md flex-1 " +
              (errors.recipeName ? "border-red-500" : "border-gray-300")
            }
            onChange={(e) => {
              setRecipeName(e.target.value);
              if (errors.recipeName && e.target.value.trim().length >= 3) {
                setErrors((prev) => ({ ...prev, recipeName: undefined }));
              }
            }}
          />
          {errors.recipeName && (
            <p id="title-error" className="text-sm text-red-600 mt-1 w-full">
              {errors.recipeName}
            </p>
          )}
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
            aria-invalid={errors.description ? "true" : "false"}
            aria-describedby={
              errors.description ? "description-error" : undefined
            }
            className={
              "p-2 border rounded-md flex-1 " +
              (errors.description ? "border-red-500" : "border-gray-300")
            }
            onChange={(e) => {
              setDescription(e.target.value);
              if (errors.description && e.target.value.trim().length >= 10) {
                setErrors((prev) => ({ ...prev, description: undefined }));
              }
            }}
          ></textarea>
          {errors.description && (
            <p
              id="description-error"
              className="text-sm text-red-600 mt-1 w-full"
            >
              {errors.description}
            </p>
          )}
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
            aria-invalid={errors.ingredients ? "true" : "false"}
            aria-describedby={
              errors.ingredients ? "ingredients-error" : undefined
            }
            placeholder="e.g., 1 cup flour&#10;2 large eggs&#10;1 tsp salt"
            className={
              "p-2 border rounded-md flex-1 " +
              (errors.ingredients ? "border-red-500" : "border-gray-300")
            }
            onChange={(e) => {
              setIngredients(e.target.value);
              const parts = e.target.value
                .split("\n")
                .map((i) => i.trim())
                .filter((i) => i.length > 0);
              if (errors.ingredients && parts.length > 0) {
                setErrors((prev) => ({ ...prev, ingredients: undefined }));
              }
            }}
          ></textarea>
          {errors.ingredients && (
            <p
              id="ingredients-error"
              className="text-sm text-red-600 mt-1 w-full"
            >
              {errors.ingredients}
            </p>
          )}
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
            aria-invalid={errors.instructions ? "true" : "false"}
            aria-describedby={
              errors.instructions ? "instructions-error" : undefined
            }
            placeholder="e.g., Preheat oven to 350°F.&#10;Mix dry ingredients.&#10;Bake for 30 minutes."
            className={
              "p-2 border rounded-md flex-1 " +
              (errors.instructions ? "border-red-500" : "border-gray-300")
            }
            onChange={(e) => {
              setInstructions(e.target.value);
              const parts = e.target.value
                .split("\n")
                .map((i) => i.trim())
                .filter((i) => i.length > 0);
              if (errors.instructions && parts.length > 0) {
                setErrors((prev) => ({ ...prev, instructions: undefined }));
              }
            }}
          ></textarea>
          {errors.instructions && (
            <p
              id="instructions-error"
              className="text-sm text-red-600 mt-1 w-full"
            >
              {errors.instructions}
            </p>
          )}
        </div>

        {(() => {
          const ingredientsCount = ingredients
            .split("\n")
            .map((i) => i.trim())
            .filter((i) => i.length > 0).length;
          const instructionsCount = instructions
            .split("\n")
            .map((i) => i.trim())
            .filter((i) => i.length > 0).length;
          const isFormValid =
            recipeName.trim().length >= 3 &&
            description.trim().length >= 10 &&
            ingredientsCount > 0 &&
            instructionsCount > 0;

          return (
            <button
              type="submit"
              disabled={!isFormValid}
              className={
                "py-2 px-6 rounded-lg font-semibold transition duration-150 mt-4 shadow-md " +
                (isFormValid
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed")
              }
            >
              Add Recipe
            </button>
          );
        })()}
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
