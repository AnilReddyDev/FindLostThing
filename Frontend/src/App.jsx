import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Header from './pages/Header'
import ItemSubmissionPage from './pages/ItemSubmissionPage'
export default function App() {
  return (
   <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/itemsubmission' element={<ItemSubmissionPage/>}></Route>
     </Routes>

   </BrowserRouter>
  )
}
