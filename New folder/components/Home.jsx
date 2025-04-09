import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' items-center flex justify-center gap-2'>
        <div className='p-10 flex space-x-10'>
        
        <div className='active:scale-90'>

            <Link to ="/login" className=' text-center font-extrabold text-4xl border-1 h-100 w-100 flex justify-center items-center'>Login</Link>
        </div>
        <div className='active:scale-90'>
        
            <Link to ="/signup" 
            className=' text-center font-extrabold text-4xl border-1 h-100 w-100 flex justify-center items-center'>
           Signup</Link>
        
        </div>
        </div>
    </div>
  )
}

export default Home
