import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function loginUser(ev) {
    ev.preventDefault();
    try {
      console.log("inside login function")
      const res = await axios.post("/api/user/login", {
        email:email,
        password:password,
      });
      const token = res.data;
      // console.log("token",token)
      localStorage.setItem('token', token);
      navigate("/");
    } catch (error) {
      console.log("Login failed. Try again!",error)
    }
  }

  useEffect(() => {
    
    const isTokenAvailable = localStorage.getItem('token');
    if (isTokenAvailable) {
      navigate('/')
    }
  }, [])

  return (
    <div className=' w-full h-screen bg-white flex  flex-col justify-center items-center'>
      <div className='w-1/4 bg-white rounded-lg p-5 border-b05 border-slate-300 flex flex-col  justify-center items-center'>
        <h1 className='text-2xl text-orange-500 font-bold mt-5'><span className='text-2xl text-black font-bold'>MRU</span>Space</h1>
        <h2 className='text-xl mt-2 mb-5 text-black font-normal'>Sign In to mruspace</h2>
        <form className=' flex w-full items-center flex-col' onSubmit={loginUser}>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" placeholder='Email' className=' w-5/6 border-b05 border-slate-300 text-black h-16 placeholder:text-slate-600  outline-orange-500 py-2 px-4 text-lg rounded-md mt-4' />
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" placeholder='Password' id="password" className=' w-5/6 border-b05 border-slate-300 text-black h-16 placeholder:text-slate-600  outline-orange-500 py-2 px-4 text-lg rounded-md mt-4' />
          <button className='bg-orange-500 py-2 px-5 mt-4 mb-3 rounded-md font-medium text-xl'>Login</button>
        </form>
      </div>
    </div>
  )
}
