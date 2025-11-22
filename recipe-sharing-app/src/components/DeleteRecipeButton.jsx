import { useRecipeStore } from "./recipeStore";

export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  // Optional: Use navigate to redirect the user after deletion
  // const navigate = useNavigate();

  const handleDelete = () => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      // Optional: navigate('/');
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        background: "red",
        color: "white",
        border: "none",
        padding: "10px",
      }}
    >
      Delete Recipe
    </button>
  );
}
