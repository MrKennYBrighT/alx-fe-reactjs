import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetails'; // ✅ corrected filename

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ padding: '1rem' }}>
        <h2>🍽️ Recipe Sharing App</h2>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
