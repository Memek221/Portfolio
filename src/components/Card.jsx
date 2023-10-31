import React from 'react'

export default function Card({title, src}) {
  return (
    <div className='group relative rounded-3xl overflow-hidden before:content=[""] before:bg-gradient-to-br before:from-pink-700 before:to-fuchsia-700 before:opacity-80 before:absolute before:w-full before:h-0 before:ease-out before:duration-500 before:hover:h-full' key={title}>
      <img src={src}/>
      <h3 className='absolute top-1/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white text-5xl opacity-0 group-hover:top-2/4 group-hover:opacity-100 ease-in-out duration-500 '>{title}</h3>
    </div>
  )
}
