import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/main/Home'
import Francais from './Pages/Francais'
import English from './Pages/English'
import Vietnam from './Pages/Vienam'
import ProjectPersonnel from './Pages/ProjectPersonnel'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Francais />} />
        <Route path="/english" element={<English />} />
        <Route path="/vietnam" element={<Vietnam />} />
        <Route path="/ProjetPersonnel" element={<ProjectPersonnel/>}/>
      </Routes>
    </>
  )
}

export default App
