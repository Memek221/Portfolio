import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import  Home  from './Home'
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import Contact from './Contact';

import './App.css';

function App() {
  const [visibleSection, setVisibleSection] = useState(null);  

  return (
    <div>
      <Header visibleSection = {visibleSection}></Header>
      <Home setVisibleSection = {setVisibleSection}/>
      <AboutMe setVisibleSection = {setVisibleSection}/>
      <Gallery setVisibleSection = {setVisibleSection}/>
      <Contact setVisibleSection = {setVisibleSection}/>
    </div>
  )
}

export default App
