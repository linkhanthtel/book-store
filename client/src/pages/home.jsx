import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/spinner'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/booksTable'
import BooksCard from '../components/home/booksCard'
import Footer from '../components/footer'

function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showType, setShowType] = useState('card');

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:8888/books')
      .then((res) => {
        setBooks(res.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert('Something Wrong! Try Again!');
        console.log(error);
        setIsLoading(false);
      })
  }, [])

  return (
    <div className='px-3 pt-3 h-full bg-slate-900'>
      <div className='flex justify-center items-center gap-x-4'>
          <button className='px-4 py-1 rounded-lg bg-green-400 hover:bg-green-500' onClick={() => setShowType('table')}>Table</button>
          <button className='px-4 py-1 rounded-lg bg-green-400 hover:bg-green-500' onClick={() => setShowType('card')}>Card</button>
      </div>
      <div className='flex justify-around items-center'>
          <h1 className='text-3xl text-white my-8'>Book Lists</h1>
          <Link to="/books/create">
            <MdOutlineAddBox className='text-white text-4xl' />
          </Link>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        showType === 'table' ? <BooksTable books={books} /> : <BooksCard books={books} />
      )}
      <Footer />
    </div>
  )
}

export default Home
