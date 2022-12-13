/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';
import Navbar from './Navbar';

function Books() {
  const books = useSelector((state) => state.book);

  return (
    <div>
      <Navbar />
      <ul>
        {books.map((book) => (
          <Book
            title={book.title}
            id={book.id}
            author={book.author}
            key={book.id}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
}

export default Books;
