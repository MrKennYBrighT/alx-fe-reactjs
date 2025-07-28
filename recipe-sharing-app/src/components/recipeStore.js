import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  // 🗃️ Core Recipe State
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  // ➕ Add a new recipe
  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes(); // Keep filtered results in sync
  },

  // 🔁 Update a recipe
  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({ recipes: updated });
    get().filterRecipes();
  },

  // 🗑️ Delete a recipe
  deleteRecipe: (id) => {
    const updated = get().recipes.filter((recipe) => recipe.id !== id);
    set({ recipes: updated });
    get().filterRecipes();
  },

  // 🧱 Replace all recipes (optional utility)
  setRecipes: (newRecipes) => {
    set({ recipes: newRecipes });
    get().filterRecipes();
  },

  // 🔍 Search Term Setter
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  // 🧠 Compute filtered recipes based on title match
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },
}));

export default useRecipeStore;
