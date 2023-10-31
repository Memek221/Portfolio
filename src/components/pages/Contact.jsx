import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
   const ref = useRef();
   const [success, setSuccess] = useState(null);

   function handleSubmit(e) {
      e.preventDefault();

      console.log('Działa');

      emailjs
         .sendForm(
            'service_4e454h5',
            'template_ymgu6h5',
            ref.current,
            'tapMAY7zRS_V6P44s'
         )
         .then(
            result => {
               console.log(result.text);
               setSuccess(true);
            },
            error => {
               console.log(error.text);
               setSuccess(false);
            }
         );
   }

   return (
      <section
         className='h-screen snap-center flex flex-col items-center justify-center'
         id='contact'
      >
         <form
            onSubmit={handleSubmit}
            ref={ref}
            className='flex flex-col gap-11 w-2/5'
         >
            <h2 className='text-4xl mb-6 text-pink-600 self-start'>
               Contact Me
            </h2>
            <input
               type='text'
               placeholder='Name'
               name='name'
               className='p-5 text-black bg-slate-100 border-none rounded'
            />
            <input
               type='text'
               placeholder='Email'
               name='email'
               className='p-5 text-black bg-slate-100 border-none rounded'
            />
            <textarea
               placeholder='Write your mesagge'
               rows='10'
               name='message'
               className='p-5 text-black bg-slate-100 border-none rounded'
            />
            <button
               type='submit'
               className='p-5 bg-pink-500 border-none rounded'
            >
               Send
            </button>
            {success && "You're message has been sent :)"}
         </form>
      </section>
   );
}
