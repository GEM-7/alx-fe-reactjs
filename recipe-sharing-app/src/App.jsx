import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import Navbar from "./components/Navbar";

const RecipesPage = () => (
  <div style={{ padding: "20px" }}>
    <h2>Recipe List</h2>
    <RecipeList />
  </div>
);

const Home = () => (
  <div style={{ border: "1px", borderRadius: "5px" }}>
    <p>Welcome, share your favorite recipes with us!</p>
    <AddRecipeForm />
  </div>
);

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Recipe Sharing App
          </Link>
        </h1>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
