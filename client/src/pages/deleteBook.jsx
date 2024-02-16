import React, { useState, useEffect } from 'react'
import BackButton from '../components/backbutton'
import Spinner from '../components/spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function DeleteBook() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const deleteBook = () => {
    setIsLoading(true);
    axios.delete(`http://localhost:8888/books/${id}`)
      .then(() => {
        setIsLoading(false);
        navigate('/');
      })
      .catch((error) => {
        alert('Something Wrong! Try Again!');
        console.log(error);
      })
  }

  return (
    <div className='p-4 bg-slate-900 pb-96'>
      <BackButton />
      <h1 className='text-3xl my-4 text-center text-white mb-40'>Delete Book</h1>
      {isLoading ? (<Spinner />) : ("")}
      <div className='text-white flex flex-col items-center border-2 border-blue-800 rounded-xl w-[600px] p-8 mx-auto'>
        <h2>Are you sure you want to delete this book? This action can't be undone</h2>
        <button className='p-4 bg-red-700 text-white m-8 w-full hover:bg-red-700' onClick={deleteBook}>
          Yes, I understand and delete
        </button>
      </div>
    </div>
  )
}

export default DeleteBook
