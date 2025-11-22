import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

export default function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {filteredRecipes.length === 0 ? (
        <p>No recipes match your current search.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            style={{
              textDecoration: "none",
              color: "black",
              border: "1px solid #ddd",
              padding: "15px",
              width: "250px",
              borderRadius: "8px",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <div>
              <h3>{recipe.title}</h3>
              <p
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {recipe.description}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
