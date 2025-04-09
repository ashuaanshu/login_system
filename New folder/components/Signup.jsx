import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const url = "http://localhost:5000/signup"


const Signup = () => {

  const Navigate =useNavigate()
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const subHandler = async (e) => {
    e.preventDefault()
    if (password !== repeatPassword) {
      alert("Password and Repeat Password do not match")
      return
    }
    try {
      const res = await fetch(`${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first, last, email, password
        })
      });
      const data = await res.json();
      console.log("Backend response:", data);

      if (res.status === 201) {
        alert(`Welcome ${first} ${last}! Signup successful.`)
        setFirst('')
        setLast('')
        setEmail('')
        setPassword('')
        setRepeatPassword('')
        Navigate('/login')
      }
      else{
        alert(data.message || "signup fail")
      }
      } catch (error) {
        console.error("error", error)
        alert("something went wrong")
      }
    };



    return (
      <div className=' items-center flex justify-center min-h-screen'>
        <div>
          <form className=' border p-6 shadow-2xl max-w-screen ' onSubmit={subHandler}>
            <h1 className='text-2xl font-bold text-white text-center p-2 shadow'>Signup</h1>
            <div className='p-4 font-semibold'>
              <label >First name: </label>
              <input type='text'
                placeholder='First Name'
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                required
                className='border rounded w-auto' />
            </div>

            <div className='p-4 font-semibold'>
              <label >Last name: </label>
              <input type='text'
                placeholder='Last Name'
                value={last}
                required
                onChange={(e) => setLast(e.target.value)}
                className='border rounded w-auto' />
            </div>

            <div className='p-4 font-semibold'>
              <label>Email: </label>
              <input type='email'
                required
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border rounded w-auto' />
            </div>

            <div className='p-4 font-semibold'>
              <label>Password: </label>
              <input type='password'
                placeholder='Password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border rounded w-auto' />
            </div>

            <div className='p-4 font-semibold'>
              <label>Repeat Password: </label>
              <input type='password'
                placeholder='Repeat Password'
                required
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className='border rounded w-auto' />
            </div>
            <div className='p-4 font-semibold items-center flex justify-center'>
              <button className=' border rounded-2xl w-30 h-10 bg-red-500 hover:bg-red-600 active:scale-90'>
                Signup</button>
            </div>
          </form>
        </div>

      </div>
    )
  }

  export default Signup
