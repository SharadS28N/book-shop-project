const fs = require('fs');
const books = require('../data/books.json').books;
let reviews = require('../reviews/reviews.json');

const getAllBooks = (req, res) => res.json(books);

const getBookByISBN = (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  book ? res.json(book) : res.status(404).json({ message: 'Book not found' });
};

const getBooksByAuthor = (req, res) => {
  const result = books.filter(b => b.author.toLowerCase().includes(req.params.author.toLowerCase()));
  res.json(result);
};

const getBooksByTitle = (req, res) => {
  const result = books.filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
  res.json(result);
};

const getBookReview = (req, res) => {
  const review = reviews[req.params.isbn] || [];
  res.json(review);
};

const addOrModifyReview = (req, res) => {
  const { isbn } = req.params;
  const { user, review } = req.body;

  if (!reviews[isbn]) reviews[isbn] = [];

  const userReview = reviews[isbn].find(r => r.user === user);
  if (userReview) userReview.review = review;
  else reviews[isbn].push({ user, review });

  fs.writeFileSync('./reviews/reviews.json', JSON.stringify(reviews, null, 2));
  res.json({ message: 'Review added/updated successfully.' });
};

const deleteReview = (req, res) => {
  const { isbn, user } = req.params;
  if (!reviews[isbn]) return res.status(404).json({ message: 'No reviews for this book.' });

  reviews[isbn] = reviews[isbn].filter(r => r.user !== user);
  fs.writeFileSync('./reviews/reviews.json', JSON.stringify(reviews, null, 2));
  res.json({ message: 'Review deleted if existed.' });
};

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getBookReview,
  addOrModifyReview,
  deleteReview
};
