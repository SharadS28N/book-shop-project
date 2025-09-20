# Book Shop Project

A Node.js project for browsing books, managing user accounts, and submitting reviews.

## Features
- Browse books by ISBN, author, or title
- User registration & login
- Submit, edit, and delete reviews
- Axios used with async/await and Promises

## Getting Started

1. Clone the repo
2. Run `npm install`
3. Start server: `node index.js`
4. Visit: `http://localhost:3000`

## API Endpoints

- `GET /api/books`
- `GET /api/books/isbn/:isbn`
- `GET /api/books/author/:author`
- `GET /api/books/title/:title`
- `GET /api/books/review/:isbn`
- `POST /api/books/review/:isbn`
- `DELETE /api/books/review/:isbn/:user`
- `POST /api/users/register`
- `POST /api/users/login`
