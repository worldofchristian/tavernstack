import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import GetStarted from './pages/GetStarted';
import Contact from './pages/Contact';

const RouteSwitch = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/getstarted' element={<GetStarted />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default RouteSwitch