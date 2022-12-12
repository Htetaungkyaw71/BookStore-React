import React from 'react'
import Form from './Form'
import Book from './Book'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'

function Books() {

  const books = useSelector((state)=>state.book)

  return (
    <div>
        <Navbar/>
        <ul>
          {books.map(book=>{       
            return  <Book title={book.title} id={book.id} author={book.author} key={book.id} />
          })}
        </ul>
        <Form/>
    </div>
  )
}

export default Books