import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe]
  })),
  editRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  }))
}));