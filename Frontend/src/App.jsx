import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Header from './pages/Header'
import ItemSubmissionPage from './pages/ItemSubmissionPage'
import axios from 'axios'
import VerifyPage from './pages/VerifyPage'
import LostItemPage from './pages/LostItemPage'
axios.defaults.baseURL = "http://192.168.0.109:3000";
axios.defaults.withCredentials = true;
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LostItemPage />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/itemsubmission' element={<ItemSubmissionPage />}></Route>
        <Route path='/:id/verify/:token' element={<VerifyPage />}></Route>
      </Routes>

    </BrowserRouter>
  )
}