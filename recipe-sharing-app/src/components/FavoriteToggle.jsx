// Favoritte Toggle Component
import { useRecipeStore } from "./recipeStore";

export default function FavoriteToggle({ recipeId }) {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: isFavorite ? "#ffcc00" : "lightgray",
        color: isFavorite ? "black" : "#333",
        border: "1px solid gray",
        borderRadius: "5px",
        cursor: "pointer",
        padding: "8px 12px",
        marginLeft: "15px",
        fontWeight: "bold",
        transition: "background 0.2s",
      }}
    >
      {isFavorite ? "⭐ Favorite Added" : "☆ Add to Favorites"}
    </button>
  );
}
