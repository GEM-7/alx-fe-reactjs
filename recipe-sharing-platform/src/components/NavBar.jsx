// NavBar.jsx
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Home Link */}
      <Link
        to="/"
        className="text-3xl font-bold text-gray-800 hover:text-gray-600 mr-6"
      >
        Recipe Share Platform
      </Link>
      <div>
        <Link to="/" className="text-blue-600 hover:text-red-800 p-4">
          Recipe List
        </Link>
        <Link to="/addrecipe" className="text-blue-600 hover:text-red-800 p-4">
          Add Recipe
        </Link>
        <Link to="/favorites" className="text-blue-600 hover:text-red-800 p-4">
          Favorites
        </Link>
      </div>
    </nav>
  );
}
