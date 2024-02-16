import React, { useState } from 'react'
import BackButton from '../components/backbutton'
import Spinner from '../components/spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createBook = () => {
    const data = {title,author,year};
    setIsLoading(true);
    axios.post('http://localhost:8888/books', data)
      .then((res) => {
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
      <h1 className='text-white text-3xl my-4 text-center'>Create Book</h1>
      {isLoading ? (
        <Spinner />
      ) : (" ")}
      <div className='flex flex-col border-2 border-blue-700 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-white'>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            className='border-2 border-blue-700 px-4 py-2 w-full'
            />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-white'>Author</label>
          <input 
            type="text" 
            value={author} 
            onChange={e => setAuthor(e.target.value)} 
            className='border-2 border-blue-700 px-4 py-2 w-full'
            />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-white'>Published Year</label>
          <input 
            type="text" 
            value={year} 
            onChange={e => setYear(e.target.value)} 
            className='border-2 border-blue-700 px-4 py-2 w-full'
            />
        </div>
        <button className='p-3 bg-gray-600 hover:bg-gray-700 text-white m-8' onClick={createBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateBook
