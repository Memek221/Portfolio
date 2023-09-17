import React from 'react';

import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import './App.css';

function App() {
   return (
      <div className="app-container">
         <Home />
         <About />
         <Projects />
         <Contact />
      </div>
   );
}

export default App;
