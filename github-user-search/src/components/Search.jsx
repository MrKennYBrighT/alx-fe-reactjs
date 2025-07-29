// src/components/SearchForm.jsx
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">GitHub User Search</h2>

      <div>
        <label className="block text-sm font-medium text-gray-600">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          placeholder="Enter GitHub username"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          placeholder="e.g. Lagos, Nigeria"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Minimum Repositories</label>
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          placeholder="e.g. 10"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Search Users
      </button>
    </form>
  );
};

export default SearchForm;
