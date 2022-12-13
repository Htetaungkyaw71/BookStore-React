/* eslint linebreak-style: ["error", "windows"] */
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
      <div className="status-outer">
        <h2 className="construction">Under construction</h2>
      </div>
      <button onClick={handleClick} type="button" className="status">Check Status</button>
    </div>
  );
}

export default Categories;
