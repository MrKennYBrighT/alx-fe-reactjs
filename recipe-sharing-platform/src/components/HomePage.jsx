import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/src/data.json') // Adjust path if needed
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error('Error loading recipes:', err));
  }, []);

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-center">Recipe Collection</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="block transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
