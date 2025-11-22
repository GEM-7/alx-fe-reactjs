// Recipe Details Component
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import FavoriteToggle from "./FavoriteToggle";

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id == recipeId)
  );

  if (!recipe) {
    return <h1>Recipe Not Found</h1>;
  }

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onSave={handleSave} />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit Recipe</button>

          <FavoriteToggle recipeId={recipe.id} />
        </>
      )}

      <hr />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
}
