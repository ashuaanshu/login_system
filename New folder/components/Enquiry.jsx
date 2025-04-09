import React, { useState } from 'react'

const Enquiry = () => {
    const[name, setName]=useState('')
    const[email, setEmail]=useState('')
    const [query,setQuery] =useState('')
    const subHandler=(e)=>{
        e.preventDefault()
        alert(`Thank you ${name} for your enquiry. We will get back to you soon.`)
        setName('')
        setEmail('')
        setQuery('')
    }

  return (
    <div className=' flex justify-center items-center min-h-screen'>
        <div>
            <form className='max-h-screen'onSubmit={subHandler}>
                <div className='font-extrabold text-center text-2xl p-4'>
                <h1>Enquiry</h1>
                </div>
                <div className='pb-4'>
                    <label className='font-semibold'>Name: </label>
                    <input
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className='border rounded' />
                </div>

                <div className='pb-4'>
                    <label className='font-semibold'>Email: </label>
                    <input type='email'
                    placeholder='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='border rounded'
                    />
                    
                </div>

                <div className='pb-4'>
                    <label className='font-semibold'>Query: </label>
                    <textarea 
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    className='border rounded items-center flex w-full'/>
                    
                </div>

                <div className=' flex justify-center'>
                    <button className='bg-red-500 active:scale-90 hover:bg-red-600 rounded-2xl w-40 font-bold text-2xl font-serif transition duration-300'>Send</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Enquiry
