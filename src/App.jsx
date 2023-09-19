import React from 'react';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
   return (
      <div className="bg-[url(assets/images/bg.jpeg)] h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto text-white">
         <Home />
         <About />
         <Projects />
         <Contact />
      </div>
   );
}

export default App;
