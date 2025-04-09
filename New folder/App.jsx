import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Enquiry from './components/Enquiry';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

const router=createBrowserRouter([
 {path:"/home",
 element:<div>
   <NavBar />
   <Home />
 </div>
 },
 {path:"/login",
 element:<div>
   <NavBar />
   <Login />
 </div>
 },
 {path:"/signup",
 element:<div>
   <NavBar />
   <Signup />
 </div>
 },
 {path:"/enquiry",
 element:<div>
   <NavBar />
   <Enquiry />
 </div>
 },
])
function App(){
  return(
    <div className='bg-gradient-to-b from-red-500 to-blue-500 h-screen w-screen'>
      <RouterProvider router={router}/>
    </div>
  )
}
export default App;