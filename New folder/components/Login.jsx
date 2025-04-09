import React from 'react'
import { useState } from 'react'

const url='http://localhost:5000';

const Login = () => {
    const[username, setUsername]=useState('')
    const[password, setPassword]=useState('')
    const [message, setMessage] = useState('');

    const subHandler=async(e)=>{
        e.preventDefault()

        try{
          const res= await fetch(`${url}/login`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({email:username, password}),
          });
          const data=await res.json()
          if(res.ok){
            setMessage(data.message)
            alert("Login successful");
          }
          else{
            setMessage(data.message)
            alert("fail ho gya tu")
            setUsername('')
            setPassword('')
          }
        }
        catch(error){
          console.error("erroe hai bhai: ",error)
          setMessage('server error')
          alert("nahi hu bhai")
        }
        
    }

  return (
    <div className=' flex justify-center items-center min-h-screen'>
        <div>
      <form onSubmit={subHandler} className='bg-transparent shadow-2xl min-w-md p-6'>
        <h1 className='font-bold text-2xl text-center pb-4'>Login</h1>
        <div className='pb-4'>
            <label className='text-xl font-semibold'>Email: </label>
        <input type='email'
        placeholder='Enter email'
        value={username}
        onChange={(e)=>setUsername(e.target.value)} 
        required
        className='border rounded-2xl'/>
        </div>

        <div><label className='text-xl font-semibold'>Password: </label>
        <input type='password'
        placeholder='enter password'
        value={password}
        required
        onChange={(e)=>setPassword(e.target.value)} 
        className='border rounded-2xl'/>
        </div>
        <div className='items-center flex justify-center p-4'>
        <button type='submit' className='border active:scale-90 rounded-2xl w-30 bg-red-600 font-bold  text-white' > Login </button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login
