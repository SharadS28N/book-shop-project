const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getBookReview,
  addOrModifyReview,
  deleteReview
} = require('../controllers/booksController');

router.get('/', getAllBooks);
router.get('/isbn/:isbn', getBookByISBN);
router.get('/author/:author', getBooksByAuthor);
router.get('/title/:title', getBooksByTitle);
router.get('/review/:isbn', getBookReview);
router.post('/review/:isbn', addOrModifyReview);
router.delete('/review/:isbn/:user', deleteReview);

module.exports = router;
