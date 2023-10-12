import React from 'react'

export default function TechnologyLogo({logo, name}) {
  return (
    <div className='group flex flex-col gap-6 items-center bg-pink-600 h-28 w-28 rounded transition-all hover:bg-pink-500 hover:h-32 hover:w-32 hover:shadow-2xl'>
        <img src={logo} alt={name}/>
               <p className='hidden text-pink-500 transition-all group-hover:block'>{name}</p>
            </div>
        
  )
}
