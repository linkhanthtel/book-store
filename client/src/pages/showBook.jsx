import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/backbutton'
import Spinner from '../components/spinner'

function ShowBook() {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:8888/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setIsLoading(false)
      })
      .catch((error) => {
        alert('Something Wrong! Try Again!');
        console.log(error);
        setIsLoading(false);
      })
  },[]);

  return (
    <div className='bg-slate-900 p-4 pb-96'>
      <BackButton />
      <h1 className='text-3xl my-3 text-white'>Book Details</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-blue-800 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-white'>Id : </span>
            <span className='text-white'>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-white'>Title : </span>
            <span className='text-white'>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-white'>Author : </span>
            <span className='text-white'>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-white'>Publish Year : </span>
            <span className='text-white'>{book.year}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-white'>Create Time : </span>
            <span className='text-white'>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-white'>Last Update Time : </span>
            <span className='text-white'>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook
