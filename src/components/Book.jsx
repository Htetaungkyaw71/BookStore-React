/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookOne, removeBooks } from '../redux/books/books';

function Book({
  title, author, id, category,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    const data = {
      item_id: id,
    };
    dispatch(removeBooks(data)).then(() => {
      dispatch(removeBookOne(data));
    });
  };

  return (
    <li>
      <div className="col">
        <h5>{category}</h5>
        <h3>{title}</h3>
        <p>
          {author}
        </p>
        <div>
          <button className="text-btn" type="button">Comments</button>
          <button className="text-btn" onClick={handleClick} type="button">Delete</button>
          <button className="text-edit" type="button">Edit</button>
        </div>
      </div>
      <div className="col1">
        <div className="col-inner">
          <div className="circle" />
          <div className="outer-percent">
            <h1 className="percent">8%</h1>
            <p>
              completed
            </p>
          </div>
          <div className="cross" />
          <div className="progress">
            <p>CURRENT CHAPTER</p>
            <p className="intro">
              Introduction
            </p>
            <button className="progress-btn" type="button">UPDATE PROGRESS</button>
          </div>
        </div>

      </div>

    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
