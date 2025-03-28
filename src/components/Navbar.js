import React from 'react'
import { Link } from 'react-router-dom'
import Login from './../pages/Login';

function Navbar() {
  return (
    <nav className='bg-[#363636] p-4 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link to="/" className='text-white text-xl font-bold'>
                Exate
            </Link>
            <ul className='flex space-x-6'>
                <li>
                    <Link to='/' className='text-white hover:text-gray-400'>Home</Link>
                </li>
                <li>
                    <Link to='/news' className='text-white hover:text-gray-400'>News</Link>
                </li>
                <li>
                    <Link to='/favorites' className='text-white hover:text-gray-400'>Favorites</Link>
                </li>
                <li>
                    <Link to='/login' className='text-white hover:text-gray-400'>Login</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar