import React from 'react';
import { useRecipeStore } from './recipeStore';

function RecommendationsList({ allRecipes }) {
  const { recommendations } = useRecipeStore();

  const recommendedRecipes = allRecipes.filter((recipe) =>
    recommendations.includes(recipe.id)
  );

  return (
    <div className="recommendations-list">
      <h2>Recommended Recipes</h2>

      {recommendedRecipes.length === 0 ? (
        <p>No recommendations available yet.</p>
      ) : (
        <ul>
          {recommendedRecipes.map((recipe) => (
            <li key={recipe.id} className="recommended-item">
              <h4>{recipe.title}</h4>
              <img src={recipe.imageUrl} alt={recipe.title} />
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecommendationsList;
