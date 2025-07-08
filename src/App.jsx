import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Francais from './Pages/Francais'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Francais />} />
        <Route path="/english" element={<Home />} />
        <Route path="/vietnam" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
