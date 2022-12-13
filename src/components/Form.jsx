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
    <div>
      <h1>Add a Book</h1>
      <form className="AddForm" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" required value={book.title} onChange={handleChange} />
        <input type="text" name="author" placeholder="author" required value={book.author} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
