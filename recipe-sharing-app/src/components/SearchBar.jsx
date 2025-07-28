import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // 🔄 Updates store & filters recipes
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search recipes by title..."
        onChange={handleChange}
        style={{
          padding: '0.5rem',
          width: '100%',
          maxWidth: '400px',
          fontSize: '1rem',
        }}
      />
    </div>
  );
};

export default SearchBar;
