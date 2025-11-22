import { create } from 'zustand'

// Mock Data: Initializing the state array here ensures recipes display immediately upon app load.
const INITIAL_RECIPE_DATA = [
    {
        id: 'r1',
        title: 'Spicy Tacos',
        description: 'Quick and easy beef tacos with a spicy kick.',
        ingredients: ['beef', 'taco seasoning', 'tortillas']
    },
    {
        id: 'r2',
        title: 'Classic Lasagna',
        description: 'Layers of pasta, ricotta, and rich meat sauce.',
        ingredients: ['pasta', 'ricotta', 'meat sauce']
    },
    {
        id: 'r3',
        title: 'Vegan Curry',
        description: 'Coconut milk and vegetable curry served with rice.',
        ingredients: ['coconut milk', 'vegetables', 'curry paste']
    },
];

export const useRecipeStore = create((set, get) => ({
    // --- State Variables ---
    recipes: INITIAL_RECIPE_DATA, // Initialized with data to prevent the list from being empty on startup.
    searchTerm: '',
    favorites: [], // Stores an array of recipe IDs that are marked as favorites.
    recommendations: [], // Stores the computed array of recommended recipe objects.

    // --- Core Recipe Actions ---

    // --- Search Action ---
    setSearchTerm: (term) => set({ searchTerm: term }),

    // --- Favorites and Recommendations Actions ---
    addFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.includes(recipeId)
            ? state.favorites
            : [...state.favorites, recipeId]
    })),
    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
    })),

    generateRecommendations: () => set(state => {
        // Find recipes not currently in favorites.
        const nonFavoriteRecipes = get().recipes.filter(recipe =>
            !get().favorites.includes(recipe.id)
        );

        // Select the first 3 (simplest recommendation logic).
        const recommended = nonFavoriteRecipes.slice(0, 3);

        // Update the recommendations state.
        return { recommendations: recommended };
    }),
}));