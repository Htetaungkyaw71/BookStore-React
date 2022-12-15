/* eslint-disable linebreak-style */
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
      <div className="main">
        <ul>
          {
            books.map((book) => (
              <Book
                title={book.title}
                id={book.item_id}
                author={book.author}
                category={book.category}
                key={book.item_id}
              />
            ))
          }
          <hr />
        </ul>

        <Form />
      </div>

    </div>
  );
}

export default Books;
