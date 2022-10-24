import React from 'react'
import BookCollection from '../../Components/EditorsPick/BookCollection'
import GetBooks from '../../Components/TopBooks/GetBooks'

function Home() {
  return (
    <div>
      <GetBooks />
      <BookCollection />
    </div>
  )
}

export default Home