import { useState } from 'react'
import Home from './pages/Home'
import UserInfo from './pages/UserInfo';
import OtpVerify from './pages/OtpVerify';
import Success from './pages/success';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/otp-verify" element={<OtpVerify />} />
        <Route path="/success" element={<Success />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
