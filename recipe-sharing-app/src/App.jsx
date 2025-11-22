import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <>
      <h1>Recipe Sharing App</h1>
      <p>Welcome, share your favorite recipes with us!</p>
      <AddRecipeForm />
      <RecipeList />
    </>
  );
}

export default App;
