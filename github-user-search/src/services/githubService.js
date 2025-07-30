import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

/**
 * Build advanced GitHub search query string.
 * @param {Object} params - { username, location, minRepos }
 */
export function buildSearchQuery({ username, location, minRepos }) {
  let query = '';

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  return query.trim();
}

/**
 * Search GitHub users with query and pagination.
 */
export async function searchUsers(query, page = 1, perPage = 10) {
  const url = `${BASE_URL}${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;
  const response = await axios.get(url);
  return response.data.items;
}

/**
 * Fetch detailed GitHub user profile.
 */
export async function fetchUserData(userUrl) {
  const response = await axios.get(userUrl);
  return response.data;
}
