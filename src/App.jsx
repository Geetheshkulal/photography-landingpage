import { useState } from 'react'

import Header from './Components/Header'
import Navbar  from './Components/Navbar';
// in your main JavaScript file (e.g., index.js or App.js)
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function App() {
  

  return (
    <>
    <Navbar/>
   <Header/>
    </>
  )
}

export default App
