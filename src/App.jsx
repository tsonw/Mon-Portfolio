import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/main/Home'
import Francais from './Pages/Francais'
import English from './Pages/English'
import Vietnam from './Pages/Vienam'
import ScrollToTop from './Components/ScrollToTop'

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Francais />} />
        <Route path="/english" element={<English />} />
        <Route path="/vietnam" element={<Vietnam />} />
      </Routes>
    </>
  )
}

export default App
