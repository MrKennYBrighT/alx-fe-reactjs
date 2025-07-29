import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let query = '';

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos} `;

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`
      );
      setResults(response.data.items || []);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
        {/* 🔤 Username Input */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full p-2 border rounded-md"
        />

        {/* 🌍 Location Input */}
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Filter by location"
          className="w-full p-2 border rounded-md"
        />

        {/* 🧮 Minimum Repositories Input */}
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum number of repositories"
          className="w-full p-2 border rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search GitHub Users
        </button>
      </form>

      {/* 🔎 Display Results */}
      <div className="mt-6 space-y-4">
        {results.length > 0 &&
          results.map((user) => (
            <div key={user.id} className="p-4 border rounded-md hover:bg-gray-50">
              <p className="font-semibold">{user.login}</p>
              <a
                href={user.html_url}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchForm;
