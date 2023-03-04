/* eslint-disable linebreak-style */
const urlApi = 'http://localhost:3004';

/**
 * List posts
 * @returns
 */
const getPosts = () => (
  fetch(`${urlApi}/posts`).then((res) => res.json())
);

/**
 * Add one post
 * @param {*} newPost
 */
const addPost = (newPost) => {
  fetch(`${urlApi}/posts`, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json',
    },
  });
};
/**
 * List users
 * @returns
 */
const getUsers = () => (
  fetch(`${urlApi}/users`).then((res) => res.json())
);

export {
  getUsers, getPosts, addPost,
};
