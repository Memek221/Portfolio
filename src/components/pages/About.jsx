import React from 'react';

export default function About() {
   return (
      <section className="h-screen snap-center flex flex-col justify-around items-center" id="about">
         <div className='text-xl w-3/5'>
            <h2 className='text-4xl mb-6 text-pink-600 '>About Me</h2>
            <p className='mb-10'>Hi! My name is <span className='text-pink-500 font-medium'>Przemek</span>. I'm 18 years old and I live in Bielsko-Biała which is located in Poland. I'm high school student in the field of programming. My journey with programming started something around 2018. I was learning Python but I did't like it. In 2020 I started high school and my teacher showed me <span className='text-pink-500 font-medium'>HTML</span> and <span className='text-pink-500 font-medium'>CSS</span>. Thats how I stared being intrested in frontend.</p>
            <h3 className='text-3xl mb-7 text-pink-600'>I' working in: </h3>
         </div>
         <div>

         </div>
      </section>
   );
}
