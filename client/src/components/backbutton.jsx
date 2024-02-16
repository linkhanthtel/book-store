import React from 'react'
import { Link } from 'react-router-dom'
import  { BsArrowLeft } from 'react-icons/bs' 

function BackButton({ destination = '/' }) {
  return (
    <div className='flex'>
      <Link to={destination} className='bg-blue-900 text-white px-4 py-2 rounded-lg w-fit'>
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  )
}

export default BackButton
