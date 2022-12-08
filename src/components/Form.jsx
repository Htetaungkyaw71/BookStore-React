import React from 'react'

function Form () {
  return (
    <div>
        <h1>Add a Book</h1>
        <form action="" className='AddForm'>
            <input type="text" name="title" placeholder='title'/>
            <input type="text" name="author" placeholder='author'/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form