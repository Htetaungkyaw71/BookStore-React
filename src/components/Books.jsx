/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';
import Navbar from './Navbar';
import { addBooks, getBooks } from '../redux/books/books';


function Books() {
  const {books,status} = useSelector((state) => state.book);

  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getBooks())
  },[])



  if(!status){
    return <h1>loading</h1>
  }


  return (
    <div>
      <Navbar />
      <ul>
        {
        Object.entries(books).map(([key, book]) => (
          <Book
          title={book[0].title}
          id={key}
          author={book[0].author}
          key={key}
        />
      ))
        }
      </ul>
      <Form />
    </div>
  );
}

export default Books;
