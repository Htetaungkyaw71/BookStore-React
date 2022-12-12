import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';


function Book({title,author,id}) {
  const dispatch = useDispatch()

  const handleClick = () => {
      dispatch(removeBook(id))
  }

  return (
    <li>
        <h4>{title}</h4>
        <p>
            {author}
        </p>
        <button onClick={handleClick}>Delete</button>
    </li>
  )
}

export default Book