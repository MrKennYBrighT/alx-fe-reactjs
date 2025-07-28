import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  // 🗃️ Core Recipe State
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  // 💖 Favorite & Recommendation State
  favorites: [],
  recommendations: [],

  // ➕ Add a new recipe
  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes(); // Keep filtered results in sync
    get().generateRecommendations(); // Update recommendations
  },

  // 🔁 Update a recipe
  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({ recipes: updated });
    get().filterRecipes();
    get().generateRecommendations();
  },

  // 🗑️ Delete a recipe
  deleteRecipe: (id) => {
    const updated = get().recipes.filter((recipe) => recipe.id !== id);
    set({
      recipes: updated,
      favorites: get().favorites.filter((favId) => favId !== id),
      recommendations: get().recommendations.filter((recId) => recId !== id),
    });
    get().filterRecipes();
  },

  // 🧱 Replace all recipes (optional utility)
  setRecipes: (newRecipes) => {
    set({ recipes: newRecipes });
    get().filterRecipes();
    get().generateRecommendations();
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

  // ⭐ Add to favorites
  addFavorite: (id) => {
    const { favorites } = get();
    if (!favorites.includes(id)) {
      set({ favorites: [...favorites, id] });
      get().generateRecommendations();
    }
  },

  // ❌ Remove from favorites
  removeFavorite: (id) => {
    const updatedFavorites = get().favorites.filter((favId) => favId !== id);
    set({ favorites: updatedFavorites });
    get().generateRecommendations();
  },

  // 🌟 Generate recommendations (recipes not in favorites)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes
      .filter((r) => !favorites.includes(r.id))
      .map((r) => r.id);
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
