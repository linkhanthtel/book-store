import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './bookModal';

function BookCard({ book }) {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
        <h2 className='absolute mt-2 right-2 px-2 py-1 bg-green-400 rounded-md'>
            {book.year}
        </h2>
        <h4 className='my-2 text-white text-small'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
            <PiBookOpenTextLight className='text-yellow-300 text-2xl' />
            <h2 className='my-1 text-white'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
            <BiUserCircle className='text-green-400 text-2xl' />
            <h2 className='my-1 text-white'>{book.author}</h2>
        </div>
        <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
            <BiShow
            className='text-3xl text-blue-800 hover:text-black cursor-pointer'
            onClick={() => setShowModal(true)}
            />
            <Link to={`/books/details/${book._id}`}>
            <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
            </Link>
        </div>
        {
            showModal && (
                <BookModal book={book} onClose={() => setShowModal(false)} />
            )
        }
        </div>
    )
    }

export default BookCard
