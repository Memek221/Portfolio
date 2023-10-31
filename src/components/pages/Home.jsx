import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faSquareFacebook,
   faSquareInstagram,
   faSquareGithub,
} from '@fortawesome/free-brands-svg-icons';

import Header from '../Header';
import ImageBackground from '../ImageBackground';
import logo from '../../assets/images/logo.png';
import Button from '../Button';
import IconLink from '../IconLink';

export default function Home() {
   return (
      <section className='h-screen snap-center' id='home'>
         <Header />
         <div className='flex justify-around'>
            <div className='flex flex-col justify-center'>
               <h1 className='text-6xl mb-3'>
                  Hello, I'm <span className='text-pink-500'>Memek</span>
               </h1>
               <h2 className='text-4xl mb-7'>
                  And I'm a{' '}
                  <span className='text-pink-600'>Fronted Developer</span>
               </h2>
               <p>I encourage you to visit </p>
               <div className='flex gap-4 mt-3.5'>
                  <IconLink
                     href='https://www.facebook.com/przemek.batelt'
                     target='blank'
                     icon={faSquareFacebook}
                  />
                  <IconLink
                     href='https://www.instagram.com/przemek.batelt/'
                     target='blank'
                     icon={faSquareInstagram}
                  />
                  <IconLink
                     href='https://github.com/Memek221'
                     target='blank'
                     icon={faSquareGithub}
                  />
               </div>
               <Button
                  label='Download my CV'
                  href='#'
                  className='w-40 p-4 mt-10'
               />
            </div>
            <div className='relative w-2/5 flex justify-center items-center'>
               <img
                  className='animate-fly absolute z-10 '
                  src={logo}
                  alt='astronaut'
               />
               <ImageBackground
                  size={[1, 100, 200]}
                  scale={2.2}
                  className='h-screen'
               />
            </div>
         </div>
      </section>
   );
}
