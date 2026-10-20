
/* global jest, describe, test, expect */

const axios = require('axios');
const { fetchInvalidUrl, fetchUsers } = require('../src/api');

jest.mock('axios');

describe('Task 1: Error Handling', () => {
  test('should handle Axios error correctly', async () => {
    axios.get.mockRejectedValue(
      new Error('Network Error')
    );

    const result = await fetchInvalidUrl();

    expect(axios.get).toHaveBeenCalledWith(
      'https://invalid.example.com/api/data'
    );

    expect(result).toBe(
      'Error: Failed to fetch data'
    );
  });
});

describe('Task 2: Headers and Params', () => {
  test('should send correct headers and params', async () => {
    const mockData = [{ id: 1, name: 'John' }];

    axios.get.mockResolvedValue({
      data: mockData
    });

    const result = await fetchUsers();

    expect(axios.get).toHaveBeenCalledWith(
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

    expect(result).toEqual(mockData);
  });
});
