import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
