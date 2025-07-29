import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

/**
 * Construct search query using GitHub’s advanced search syntax.
 * @param {Object} params - Search parameters (username, location, minRepos)
 */
export async function searchUsers({ username, location, minRepos }) {
  let query = '';

  if (username) query += `${username} `; // partial match
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  try {
    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query.trim())}`);
    return response.data.items;
  } catch (error) {
    console.error('GitHub API search failed:', error);
    throw error;
  }
}
