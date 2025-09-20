const axios = require('axios');

// Task 10: Get all books – Using async callback function
const getAllBooksCallback = (callback) => {
  axios.get('http://localhost:3000/api/books')
    .then(res => callback(null, res.data))
    .catch(err => callback(err));
};

// Task 11: Search by ISBN – Using Promises
const searchByISBN = (isbn) => {
  return axios.get(`http://localhost:3000/api/books/isbn/${isbn}`);
};

// Task 12: Search by Author
const searchByAuthor = async (author) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/books/author/${author}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

// Task 13: Search by Title
const searchByTitle = async (title) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/books/title/${title}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllBooksCallback,
  searchByISBN,
  searchByAuthor,
  searchByTitle
};
