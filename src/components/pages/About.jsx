import React from 'react';

import TechnologyLogo from '../TechnologyLogo';
import TextHighlighter from '../TextHighlighter';

import HTML_Logo from '../../assets/images/Html_Logo.png';
import CSS_Logo from '../../assets/images/CSS_Logo.png';
import JS_Logo from '../../assets/images/JS_Logo.png';
import React_Logo from '../../assets/images/React_Logo.png';

export default function About() {
   return (
      <section
         className='h-screen snap-center flex flex-col justify-center items-center'
         id='about'
      >
         <div className='text-xl w-3/5 mb-7'>
            <h2 className='text-4xl mb-6 text-pink-600 '>About Me</h2>
            <p className='mb-10'>
               Hi! My name is <TextHighlighter>Przemek</TextHighlighter>. I'm 18
               years old and I live in Bielsko-Biała which is located in Poland.
               I'm high school student in the field of programming. My journey
               with programming started something around 2018. I was learning
               Python but I did't like it. In 2020 I started high school and my
               teacher showed me <TextHighlighter>HTML</TextHighlighter> and{' '}
               <TextHighlighter>CSS</TextHighlighter>. Thats how I stared being
               intrested in frontend.
            </p>
            <h3 className='text-3xl text-pink-600'>I'm working in: </h3>
         </div>
         <div className='flex justify-around w-3/5'>
            <TechnologyLogo src={HTML_Logo} name='HTML' />
            <TechnologyLogo src={CSS_Logo} name='CSS' />
            <TechnologyLogo src={JS_Logo} name='JS' />
            <TechnologyLogo src={React_Logo} name='React' />
         </div>
      </section>
   );
}
