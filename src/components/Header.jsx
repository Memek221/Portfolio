import React from 'react';

import Logo from './Logo';
import Navbar from './Navbar';
import Button from './Button';

export default function Header() {
   return (
      <header className="flex justify-around items-center h-20">
         <div className="flex gap-x-32">
            <Logo />
            <Navbar />
         </div>
         <div>
            <Button label="Hire me" href="#contact" />
         </div>
      </header>
   );
}
