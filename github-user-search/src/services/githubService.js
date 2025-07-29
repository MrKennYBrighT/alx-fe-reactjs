import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export function fetchUserData(username) {
  return axios.get(`${BASE_URL}/${username}`).then(res => res.data);
}