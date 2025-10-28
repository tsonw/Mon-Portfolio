import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/main/Home'
import Francais from './Pages/Francais'
import English from './Pages/English'
import Vietnam from './Pages/Vienam'
import ProjectPersonnel from './Pages/ProjectPersonnel'
import ProjectPersonnelEN from './Pages/ProjectPersonnelEN'
import ScrollToTop from './Components/ScrollToTop'
import ProjectInformatique from './Pages/ProjectInformatique'
import ProjectInformatiqueEN from './Pages/ProjectInformatiqueEN'

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Francais />} />
        <Route path="/english" element={<English />} />
        <Route path="/vietnam" element={<Vietnam />} />
        <Route path="/ProjetPersonnel" element={<ProjectPersonnel/>}/>
        <Route path="/ProjetInformatique" element={<ProjectInformatique/>}/>
        <Route path="/ProjetPersonnelEN" element={<ProjectPersonnelEN/>}/>
        <Route path="/ProjetInformatiqueEN" element={<ProjectInformatiqueEN/>}/>
      </Routes>
    </>
  )
}

export default App
