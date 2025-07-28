import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  // 🥗 Original Recipes
  recipes: [],

  // ⭐ Favorites
  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // 🔮 Personalized Recommendations
  recommendations: [],

  generateRecommendations: () =>
    set((state) => {
      const favoriteRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );

      const favoriteCategories = new Set(
        favoriteRecipes.map((r) => r.category)
      );

      const recommended = state.recipes.filter(
        (r) =>
          favoriteCategories.has(r.category) &&
          !state.favorites.includes(r.id)
      );

      return { recommendations: recommended.slice(0, 5) };
    }),
}));

export default useRecipeStore;
