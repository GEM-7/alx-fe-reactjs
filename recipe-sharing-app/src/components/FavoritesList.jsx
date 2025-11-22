// Favorites List Component
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

export default function FavoritesList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter((recipe) => recipe != null);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ffcc00",
        margin: "20px auto",
        maxWidth: "800px",
        borderRadius: "8px",
      }}
    >
      <h2>⭐️ My Favorites ({favoriteRecipes.length})</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {favoriteRecipes.length === 0 ? (
          <p>You haven't added any favorite recipes yet!</p>
        ) : (
          favoriteRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipes/${recipe.id}`}
              style={{
                textDecoration: "none",
                color: "black",
                border: "1px solid #ffcc00",
                padding: "10px",
                width: "200px",
                borderRadius: "5px",
                backgroundColor: "#fffbe6",
              }}
            >
              <div>
                <h3>{recipe.title}</h3>
                <p style={{ fontSize: "0.8em", color: "#666" }}>View Details</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
