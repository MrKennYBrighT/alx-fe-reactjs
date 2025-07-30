import React, { useState } from 'react';
import { fetchUserDetails as fetchUserData } from './services/githubService';
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
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>GitHub User Search</h2>
      <Search
        onSearch={handleSearch}
        userData={userData}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
