// src/components/Search.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="github-user">GitHub Username:</label>
        <br />
        <input
          id="github-user"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ marginTop: '8px', padding: '8px', width: '250px' }}
        />
        <br />
        <button
          type="submit"
          style={{ marginTop: '10px', padding: '8px 16px' }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
