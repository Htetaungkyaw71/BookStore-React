/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import Navbar from './Navbar';

function Categories() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <Navbar />
      <button onClick={handleClick} type="button">Check Status</button>
    </div>
  );
}

export default Categories;
