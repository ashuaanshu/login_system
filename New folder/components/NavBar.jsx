import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className='bg-black items-center py-2 px-6'>
        <ul className='text-white font-bold flex justify-between items-center text-2xl '>
            <Link to="/home" className='rounded-2xl bg-red-500 w-30 h-10 relative text-center active:scale-90'>Home</Link>
          <Link to="/login" className='rounded-2xl bg-red-500 w-30 h-10 relative text-center active:scale-90'>Login</Link>
          <Link to="/signup" className='rounded-2xl bg-red-500 w-30 h-10 relative text-center active:scale-90'>Signup</Link>
          
          <Link to="/enquiry" className='rounded-2xl bg-red-500 w-30 h-10 relative text-center active:scale-90'>Enquiry</Link>
          
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
