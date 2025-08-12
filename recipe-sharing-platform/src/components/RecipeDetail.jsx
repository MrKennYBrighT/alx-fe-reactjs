import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setRecipe(found);
      })
      .catch((err) => console.error('Error loading recipe:', err));
  }, [id]);

  if (!recipe) {
    return <div className="p-6 text-center text-gray-500">Loading recipe...</div>;
  }

  return (
    <div className="max-w-4xl p-6 mx-auto">
      <h1 className="mb-4 text-4xl font-bold text-center">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="object-cover w-full h-64 mb-6 rounded-lg"
      />
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-2 text-2xl font-semibold">Summary</h2>
        <p className="mb-4 text-gray-700">{recipe.summary}</p>

        <h2 className="mb-2 text-2xl font-semibold">Ingredients</h2>
        <ul className="mb-4 text-gray-700 list-disc list-inside">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>

        <h2 className="mb-2 text-2xl font-semibold">Instructions</h2>
        <ol className="text-gray-700 list-decimal list-inside">
          <li>Step 1: Do something.</li>
          <li>Step 2: Do something else.</li>
          <li>Step 3: Finish up.</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
