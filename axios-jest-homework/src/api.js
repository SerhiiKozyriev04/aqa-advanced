
const axios = require('axios');

async function fetchInvalidUrl() {
  try {
    const response = await axios.get(
      'https://invalid.example.com/api/data'
    );
    return response.data;
 } catch {
  return 'Error: Failed to fetch data';
}
}

module.exports = { fetchInvalidUrl };


async function fetchUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
    {
      headers: {
        Authorization: 'Bearer test-token',
        'Content-Type': 'application/json'
      },
      params: {
        page: 1,
        limit: 10
      }
    }
  );

  return response.data;
}

module.exports = {
  fetchInvalidUrl,
  fetchUsers
};

