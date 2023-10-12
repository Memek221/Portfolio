import React from 'react'

//relative group h-72 w-96 rounded-lg flex justify-center items-center overflow-hidden bg-cover bg-center hover:bg-gradient-to-br hover:from-pink-700 hover:to-fuchsia-700

export default function Card({title, src}) {
  return (
    <div className='group relative rounded-3xl overflow-hidden before:content=[""] before:bg-gradient-to-br before:from-pink-700 before:to-fuchsia-700 before:opacity-80 before:absolute before:w-full before:h-0 before:ease-out before:duration-500 before:hover:h-full' key={title}>
      <img src={src}/>
      <h3 className='absolute top-1/2 left-1/2 translate-x-[-2/4] translate-y-[-2/4] text-white text-5xl opacity-0 group-hover:top-2/4 group-hover:opacity-100 ease-in-out duration-500 '>{title}</h3>
    </div>
  )
}
