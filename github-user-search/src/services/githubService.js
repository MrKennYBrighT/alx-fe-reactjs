import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

/**
 * Construct GitHub advanced search query from params.
 * @param {Object} params - Search parameters (username, location, minRepos)
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
 * @param {string} query - Pre-built search query
 * @param {number} page - Page number
 * @param {number} perPage - Number of results per page
 */
export async function searchUsers(query, page = 1, perPage = 10) {
  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    console.error('GitHub user search failed:', error);
    throw error;
  }
}

/**
 * Fetch full GitHub user profile.
 * @param {string} userUrl - Direct GitHub user API URL
 */
export async function fetchUserDetails(userUrl) {
  try {
    const response = await axios.get(userUrl);
    return response.data;
  } catch (error) {
    console.error('Fetching user details failed:', error);
    return null;
  }
}
