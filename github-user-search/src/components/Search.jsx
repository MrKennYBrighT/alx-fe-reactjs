// src/components/Search.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch, userData, loading, error }) {
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

      {/* Results Display Based on Search State */}
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {userData && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            width="100"
            style={{ borderRadius: '8px' }}
          />
          <h3>{userData.name || userData.login}</h3>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  userData: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default Search;
