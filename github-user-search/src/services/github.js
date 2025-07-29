import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchUser(username) {
  try {
    const headers = API_KEY
      ? { Authorization: `token ${API_KEY}` }
      : {};

    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}
