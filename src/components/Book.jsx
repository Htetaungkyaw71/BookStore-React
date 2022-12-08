import React from 'react';

function Book({title,author}) {
  return (
    <li>
        <h4>{title}</h4>
        <p>
            {author}
        </p>
        <button>Delete</button>
    </li>
  )
}

export default Book