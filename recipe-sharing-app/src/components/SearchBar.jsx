import React from "react";
import { useRecipeStore } from "./recipeStore";

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by title or description..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "10px",
        width: "300px",
        margin: "10px 0",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    />
  );
}
