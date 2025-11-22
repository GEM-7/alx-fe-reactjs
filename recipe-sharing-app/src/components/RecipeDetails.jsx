import React from "react";
import { Link } from "react-router-dom";
import { LucideChevronLeft, LucideEdit } from "lucide-react";
import useRecipeStore from "../store/recipeStore";
import { Card } from "../utils/shared";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  // Return a message if data is unexpectedly missing.
  if (!recipe) {
    return <div>Error: Recipe data is missing.</div>;
  }

  return (
    <Card>
      {/* Back button logic */}
      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginBottom: "15px",
          textDecoration: "none",
          color: "#007BFF",
          fontWeight: "bold",
        }}
      >
        <LucideChevronLeft
          style={{ width: "16px", height: "16px", marginRight: "5px" }}
        />
        Back to Recipe List
      </Link>

      <h1 style={{ fontSize: "1.8em", marginBottom: "15px", color: "#333" }}>
        {recipe.title}
      </h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "25px" }}>
        <Link
          to={`/recipe/${recipe.id}/edit`}
          style={{
            padding: "8px 16px",
            background: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          <LucideEdit
            style={{ width: "16px", height: "16px", marginRight: "5px" }}
          />
          Edit Recipe
        </Link>

        {/* Render DeleteRecipeButton here */}
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.3em",
            borderBottom: "1px solid #eee",
            paddingBottom: "5px",
            color: "#555",
          }}
        >
          Description
        </h2>
        <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.5" }}>
          {recipe.description}
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.3em",
            borderBottom: "1px solid #eee",
            paddingBottom: "5px",
            color: "#555",
          }}
        >
          Ingredients
        </h2>
        <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.5" }}>
          {recipe.ingredients}
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "1.3em",
            borderBottom: "1px solid #eee",
            paddingBottom: "5px",
            color: "#555",
          }}
        >
          Steps / Instructions
        </h2>
        <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.5" }}>
          {recipe.steps}
        </p>
      </div>
    </Card>
  );
};

export default RecipeDetails;
