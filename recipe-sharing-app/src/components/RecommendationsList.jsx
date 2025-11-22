// Recommendations List Component
import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

export default function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [favorites, recipes]);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #1b1f21ff",
        margin: "20px auto",
        maxWidth: "800px",
        borderRadius: "8px",
        backgroundColor: "#1b1f21ff",
      }}
    >
      <h2>💡 Recommendations</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {recommendations.length === 0 ? (
          <p>
            No recommendations available right now. Try adding some recipes to
            your favorites!
          </p>
        ) : (
          recommendations.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipes/${recipe.id}`}
              style={{
                textDecoration: "none",
                color: "black",
                border: "1px solid #00aaff",
                padding: "10px",
                width: "200px",
                borderRadius: "5px",
                backgroundColor: "#ffffff",
              }}
            >
              <div>
                <h3>{recipe.title}</h3>
                <p style={{ fontSize: "0.8em", color: "#666" }}>
                  Recommended For You
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
