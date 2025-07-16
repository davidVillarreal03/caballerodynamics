import { useState } from 'react'
import './App.css'
import Slide from './components/Navigation/Navigation.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
        <Slide />
        <Outlet />
      
    </>
  )
}

export default App
