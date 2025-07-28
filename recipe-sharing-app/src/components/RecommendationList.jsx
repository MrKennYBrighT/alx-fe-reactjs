import React from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationList = () => {
  const { recommendations, recipes } = useRecipeStore();

  const recommendedRecipes = recipes.filter(recipe => recommendations.includes(recipe.id));

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <ul>
        {recommendedRecipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
