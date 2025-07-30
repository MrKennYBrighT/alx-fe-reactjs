import React, { useState } from 'react';
import {
  buildSearchQuery,
  searchUsers,
  fetchUserDetails as fetchUserData
} from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const query = buildSearchQuery({
      username,
      location,
      minRepos
    });
    const users = await searchUsers(query);
    setResults(users);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleUserClick = async (userUrl) => {
    try {
      const data = await fetchUserData(userUrl);
      setUserDetails(data);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  const handleKeyDown = (e, userUrl) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleUserClick(userUrl);
    }
  };

  return (
    <div className="p-4 search-container">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-2 mb-4 input-group md:grid-cols-3"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input input-bordered"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input input-bordered"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(Number(e.target.value))}
          className="input input-bordered"
        />
        <button
          type="submit"
          className="w-full btn btn-primary md:col-span-3"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div className="mt-6 results">
        {results.map((user) => (
          <div
            key={user.id}
            role="button"
            tabIndex={0}
            onClick={() => handleUserClick(user.url)}
            onKeyDown={(e) => handleKeyDown(e, user.url)}
            aria-label={`View details for ${user.login}`}
            className="p-4 mb-3 border rounded cursor-pointer user-card hover:bg-gray-100"
          >
            <h3 className="text-lg font-semibold">{user.login}</h3>
            <p>{user.html_url}</p>
          </div>
        ))}
      </div>

      {userDetails && (
        <div className="p-4 mt-6 border-t user-details">
          <h2 className="mb-2 text-xl font-bold">
            {userDetails.name || userDetails.login}
          </h2>
          <p><strong>Bio:</strong> {userDetails.bio || 'No bio available.'}</p>
          <p><strong>Public Repos:</strong> {userDetails.public_repos}</p>
          <p><strong>Followers:</strong> {userDetails.followers}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
