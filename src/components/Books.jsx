/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';
import Navbar from './Navbar';
import { getBooks } from '../redux/books/books';

function Books() {
  const { books, status } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (!status) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Navbar />
      <ul>
        {
      books.map((book) => (
        <Book
          title={book.title}
          id={book.item_id}
          author={book.author}
          key={book.item_id}
        />
      ))
        }
      </ul>
      <Form />
    </div>
  );
}

export default Books;
