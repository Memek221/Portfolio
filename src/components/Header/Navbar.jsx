import React from 'react';

export default function Navbar() {
   return (
      <nav className="flex gap-x-10 items-center">
         <a href="#home">Home</a>
         <a href="#about">About</a>
         <a href="#projects">Projects</a>
         <a href="#contact">Contact</a>
      </nav>
   );
}
