
const axios = require('axios');
const { describe, test, expect } = require('@jest/globals');

const baseURL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API Tests', () => {

  test('GET /posts/1 - should return post', async () => {
    const response = await axios.get(`${baseURL}/posts/1`);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data.userId).toBe(1);
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
  });

  test('GET /posts - should return all posts', async () => {
    const response = await axios.get(`${baseURL}/posts`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data).toHaveLength(100);
  });

  test('GET /users/1 - should return user', async () => {
    const response = await axios.get(`${baseURL}/users/1`);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('email');
    expect(response.data).toHaveProperty('address');
  });

  test('POST /posts - should create post', async () => {
    const newPost = {
      title: 'Test title',
      body: 'Test body',
      userId: 1
    };

    const response = await axios.post(`${baseURL}/posts`, newPost);

    expect(response.status).toBe(201);
    expect(response.data.id).toBe(101);
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  test('GET /comments?postId=1 - should return comments', async () => {
    const response = await axios.get(`${baseURL}/comments`, {
      params: { postId: 1 }
    });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data).toHaveLength(5);

    response.data.forEach((comment) => {
      expect(comment.postId).toBe(1);
      expect(comment).toHaveProperty('email');
      expect(comment).toHaveProperty('body');
    });
  });

});
