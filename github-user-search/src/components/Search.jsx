// src/components/Search.jsx

import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username.trim());
      setUserData(data);
    } catch {
      setError(true); // ✅ precise catch clause
    } finally {
      setLoading(false);
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

      {/* Search result feedback */}
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

export default Search;
