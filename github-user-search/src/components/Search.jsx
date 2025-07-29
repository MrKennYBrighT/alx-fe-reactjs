import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchUserDetails = async (users) => {
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        try {
          const response = await axios.get(user.url);
          return response.data;
        } catch (error) {
          console.error('Error fetching user details:', error);
          return null;
        }
      })
    );
    return detailedUsers.filter(Boolean);
  };

  const buildQuery = () => {
    let q = '';
    if (username) q += `${username} `;
    if (location) q += `location:${location} `;
    if (minRepos) q += `repos:>${minRepos} `;
    return q.trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const q = buildQuery();
    setQuery(q);
    setPage(1);

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${encodeURIComponent(q)}&per_page=10&page=1`
      );
      const detailedResults = await fetchUserDetails(response.data.items);
      setResults(detailedResults);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreUsers = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${nextPage}`
      );
      const detailedUsers = await fetchUserDetails(response.data.items);
      setResults((prev) => [...prev, ...detailedUsers]);
      setPage(nextPage);
    } catch (error) {
      console.error('Error loading more users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub username"
          className="w-full p-2 border rounded-md"
        />

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="w-full p-2 border rounded-md"
        />

        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories"
          className="w-full p-2 border rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search GitHub Users
        </button>
      </form>

      {loading && <p className="mt-4 text-center text-gray-500">Loading...</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="p-4 border rounded-md hover:bg-gray-50 space-y-2">
            <div className="flex items-center space-x-4">
              <img src={user.avatar_url} alt="avatar" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-lg font-bold">{user.login}</p>
                <p className="text-sm text-gray-500">{user.name || 'No name provided'}</p>
              </div>
            </div>
            <p>📍 Location: {user.location || 'N/A'}</p>
            <p>📦 Public Repos: {user.public_repos}</p>
            <a
              href={user.html_url}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Profile
            </a>
          </div>
        ))}

        {results.length > 0 && (
          <button
            onClick={loadMoreUsers}
            className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Load More Users
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
