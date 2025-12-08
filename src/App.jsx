import { useState } from 'react'
import './App.css'
import Slide from './components/Navigation/Navigation.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollTop/ScrollToTop.jsx'

function App() {

  return (
    <>
        <ScrollToTop />
        <Slide />
        <Outlet />
        <Footer />
      
    </>
  )
}

export default App
