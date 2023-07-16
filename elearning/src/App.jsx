import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Register/Login'
import Register from './components/Register/Register'
import NotFound from './components/NotFound'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
