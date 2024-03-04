import React, { useState, useEffect } from 'react'
import BackButton from '../components/backbutton'
import Spinner from '../components/spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:8888/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setYear(res.data.year);
        setIsLoading(false)
      })
      .catch((error) => {
        alert('Something Wrong! Try Again!');
        console.log(error);
      })
  },[]);

  const editBook = () => {
    const data = {title,author,year};
    setIsLoading(true);
    axios.put(`http://localhost:8888/books/${id}`, data)
      .then((res) => {
        setIsLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className='p-4 bg-slate-900 pb-96'>
      <BackButton />
      <h1 className='text-3xl my-4 text-white text-center'>Edit Book</h1>
      {isLoading ? (
        <Spinner />
      ) : (" ")}
      <div className='flex flex-col border-2 border-blue-800 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-white'>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            className='border-2 border-blue-800 px-4 py-2 w-full'
            />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-white'>Author</label>
          <input 
            type="text" 
            value={author} 
            onChange={e => setAuthor(e.target.value)} 
            className='border-2 border-blue-800 px-4 py-2 w-full'
            />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-white'>Published Year</label>
          <input 
            type="text" 
            value={year} 
            onChange={e => setYear(e.target.value)} 
            className='border-2 border-blue-800 px-4 py-2 w-full'
            />
        </div>
        <button className='p-3 bg-gray-600 text-white m-8 hover:bg-gray-700' onClick={editBook}>
          Update
        </button>
      </div>
    </div>
  )
}

export default EditBook
