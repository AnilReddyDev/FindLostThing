import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function ItemSubmissionPage() {
  const navigate = useNavigate();
  const [img, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const [contact, setContact] = useState('');
  async function submitItem(ev){
    ev.preventDefault();
    try {
      await axios.post("/api/item/", {
        img:img,
        desc:desc,
        contact:contact,
      });
      navigate("/")
    } catch (error) {
      console.log("Submission failed. Try again!")
    }
  }

  return (
    <div className=' w-full h-screen bg-white flex  flex-col justify-center items-center'>
      <div className='w-1/4 bg-white rounded-lg p-5 border-b05 border-slate-300 flex flex-col  justify-center items-center'>
        <h1 className='text-2xl text-orange-500 font-bold mt-5'><span className='text-2xl text-black font-bold'>MRU</span>Space</h1>
        <h2 className='text-xl mt-2 mb-5 text-slate-600 font-normal'>Submission of Item</h2>
        <form onSubmit={submitItem} className='flex flex-col w-full items-center'>
          <input onChange={(e) => setImage(e.target.value)} value={img} type="text" name="email" id="email" placeholder='Image' className=' w-5/6 border-b05 border-slate-300 text-black h-16 placeholder:text-slate-600  outline-orange-500 py-2 px-4 text-lg rounded-md mt-4' />
          <input onChange={(e) => setDesc(e.target.value)} value={desc} type="text" name="email" id="email" placeholder='Description' className=' w-5/6 border-b05 border-slate-300 text-black h-16 placeholder:text-slate-600  outline-orange-500 py-2 px-4 text-lg rounded-md mt-4' />
          <input onChange={(e) => setContact(e.target.value)} value={contact} type="text" name="password" placeholder='Contact' id="password" className=' w-5/6 border-b05 border-slate-300 text-black h-16 placeholder:text-slate-600  outline-orange-500 py-2 px-4 text-lg rounded-md mt-4' />
          <button className='bg-orange-500 py-2 px-5 mt-4 mb-3 rounded-sm font-medium text-xl'>Submit</button>
        </form>
      </div>
    </div>
  )
}
