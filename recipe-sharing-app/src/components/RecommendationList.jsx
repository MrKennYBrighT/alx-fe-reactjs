// src/components/RecommendationsList.jsx
import React from "react";
import { useRecipeStore } from "..components/recipeStore";

const RecommendationsList = () => {
  const { recipes, recommendations } = useRecipeStore();

  const recommendedRecipes = recipes.filter(recipe =>
    recommendations.includes(recipe.id)
  );

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendedRecipes.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        <ul>
          {recommendedRecipes.map(recipe => (
            <li key={recipe.id}>
              <h3>{recipe.name}</h3>
              <p>{recipe.ingredients.join(", ")}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendationsList;
