// src/App.jsx

import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';
import Search from './components/Search';

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch {
      setError(true); // ✅ clean — no unused variable
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>GitHub User Search</h2>
      <Search onSearch={handleSearch} />

      {/* Conditional rendering based on state */}
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can’t find the user.</p>}
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

export default App;
