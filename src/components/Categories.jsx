/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import Navbar from './Navbar';

function Categories() {
  const { books, status } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getBooks());
  }, [params]);

  const newbooks = books.filter((book) => book.category === params.name);

  if (!status || !newbooks) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Navbar />
      <div className="status-outer">
        <h2 className="construction">{(params.name).toUpperCase()}</h2>
        <div className="main">
          <ul>
            {
            newbooks.map((book) => (
              <Book
                title={book.title}
                id={book.item_id}
                author={book.author}
                category={book.category}
                key={book.item_id}
              />
            ))
          }

          </ul>

        </div>
      </div>
    </div>
  );
}

export default Categories;
