import React from 'react'
import Form from './Form'
import Book from './Book'
import Navbar from './Navbar'

function Books() {
  return (
    <div>
        <Navbar/>
        <ul>
            <Book title="The Hunger Games" author="Suzanne Collins" />
            <Book title="The Games" author="Suzanne Collins" />
        </ul>
        <Form/>
    </div>
  )
}

export default Books