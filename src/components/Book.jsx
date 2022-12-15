/* eslint-disable linebreak-style */
import { CircularProgressbar } from 'react-circular-progressbar';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookOne, removeBooks } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

function Book({
  title, author, id, category,
}) {
  const [percentage, Setpercentage] = useState(0);

  const dispatch = useDispatch();
  const handleClick = () => {
    const data = {
      item_id: id,
    };
    dispatch(removeBooks(data)).then(() => {
      dispatch(removeBookOne(data));
    });
  };

  const increaseClick = () => {
    if (percentage >= 100) {
      Setpercentage(100);
    } else {
      Setpercentage(() => percentage + 10);
    }
  };

  const decreaseClick = () => {
    if (percentage <= 0) {
      Setpercentage(0);
    } else {
      Setpercentage(() => percentage - 10);
    }
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
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          <div className="cross" />
          <div className="progress">
            <p>CURRENT CHAPTER</p>
            <p className="intro">
              Introduction
            </p>
            <button className="progress-btn" type="button" onClick={increaseClick}>INCREASE PROGRESS</button>
            <button className="progress-btn" type="button" onClick={decreaseClick}>DECREASE PROGRESS</button>
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
