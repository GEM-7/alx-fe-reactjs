import { create } from 'zustand'

export const useRecipeStore = create((set, get) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],

    addRecipe: (newRecipe) => {
        set(state => ({
            recipes: [...state.recipes, newRecipe]
        }));
        get().filterRecipes();
    },

    deleteRecipe: (recipeId) => {
        set(state => ({
            recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
        }));
        get().filterRecipes();
    },

    updateRecipe: (updatedRecipe) => {
        set(state => ({
            recipes: state.recipes.map(recipe =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            )
        }));
        get().filterRecipes();
    },

    setRecipes: (recipes) => {
        set({ recipes });
        get().filterRecipes();
    },

    setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().filterRecipes();
    },

    filterRecipes: () => set(state => {
        if (!state.searchTerm) {
            return { filteredRecipes: state.recipes };
        }

        const lowerCaseTerm = state.searchTerm.toLowerCase();

        const newFilteredRecipes = state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(lowerCaseTerm) ||
            recipe.description.toLowerCase().includes(lowerCaseTerm)
        );

        return { filteredRecipes: newFilteredRecipes };
    }),
}));