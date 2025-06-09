import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavbarWithSidebar from './components/NavbarWithSidebar'
import AppointmentPage from './components/AppointmentPage'
import HomePage from './components/HomePage'
import BhajansPage from './components/BhajansPage'  
import MantrasPage from './components/MantrasPage'
import HealthTracker from './components/HealthTracker'
import AuthPage from './components/AuthPage'
import YogaPage from './components/YogaPage'
import AccountDetail from './components/AccountDetail'

function App() {
  

  return (
    <>
      <Router>
      <NavbarWithSidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-appointment" element={<AppointmentPage />} />
        <Route path="/bhajans" element={<BhajansPage />} />
        <Route path="/mantras" element={<MantrasPage />} />
        <Route path="/health-tracker" element={<HealthTracker />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/yoga" element={<YogaPage/>}/>
        <Route path='/account-detail' element={<AccountDetail/>} />
        {/* other routes... */}
      </Routes>
     
    </Router>
    </>
  )
}

export default App
