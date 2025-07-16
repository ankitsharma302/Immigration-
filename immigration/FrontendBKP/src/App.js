import React, { Component, useEffect, useState } from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import Countries from './pages/Countries';
import Services from './pages/Services';
import Hiring from './pages/Hiring';
import Menu from './pages/Menu';
import Work from './pages/Work';
import Tourist from './pages/Tourist';
import Study from './pages/Study';
import Bussiness from './pages/Bussiness';
import Login from './pages/Login';
import Canada from './pages/Canada';
import America from './pages/America';
import Australia from './pages/Australia';
import Spain from './pages/Spain';
import France from './pages/France';
import Newzealand from './pages/Newzealand';
import Who from './pages/Who';
import Data from './pages/data';
import Image from './pages/image';
import Register from './pages/Register';
import { BrowserRouter as router, Router, Routes, Route } from 'react-router-dom';
import { getAuth } from './helper/auth';


function App() {
  const [state, setState] = useState({
    userTOken: ""
  })
  useEffect(() => {
    console.log("getAuth()")
    console.log(getAuth())
    var token = getAuth()
    if (token != false) {
      setState({
        ...state,
        userTOken: token,
      })
    }
  }, [])

  return (
    // <Contact/>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='countries' element={<Countries />} />
        <Route path='/services' element={<Services />} />
        <Route path='/hiring' element={<Hiring />} />
        {/* <Route path='/http://localhost:3002/register' element={<Login/>}/> */}

        {/* New */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Bussiness' element={<Bussiness/>} />
        <Route path='/Work' element={<Work/>} />
        <Route path='/Tourist' element={<Tourist/>} />
        <Route path='/study' element={<Study/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Canada' element={<Canada />} />
        <Route path='/America' element={<America />} />
        <Route path='/Spain' element={<Spain />} />
        <Route path='/France' element={<France />} />
        <Route path='/Newzealand' element={<Newzealand />} />
        <Route path='/Australia' element={<Australia />} />
        <Route path='/Who' element={<Who />}/>
        <Route path='/image' element={<Image/>} />
        <Route path='/data' element={state.userTOken == "" ? <Login /> : <Data />} />
      </Routes>

    </div>
  );
}
export default App;





