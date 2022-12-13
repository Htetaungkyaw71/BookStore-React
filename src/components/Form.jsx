/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookOne, addBooks } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...book,
      category: 'comedy',
      item_id: Date.now().toString(),
    };
    if (book.title.length > 0 && book.title.length > 0) {
      dispatch(addBooks(data)).then(() => {
        dispatch(addBookOne(data));
      });
    }
    setBook({
      title: '',
      author: '',
    });
  };

  return (
    <div className="form">
      <h2>ADD NEW BOOK</h2>
      <form className="AddForm" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" required value={book.title} onChange={handleChange} />
        <input type="text" name="author" placeholder="author" required value={book.author} onChange={handleChange} />
        <input type="submit" className="submit-btn" value="ADD BOOK" />
      </form>
    </div>
  );
}

export default Form;
