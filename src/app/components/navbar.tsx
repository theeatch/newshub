
import React from 'react'
import Image from 'next/image'
type Props = {}

const Navbar = (props: Props) => {
  

  return (
    <div className='w-full h-52 flex justify-center top-0 sticky'>
        <div className='flex flex-col justify-center'>
            <Image src="/logopic.png" alt="logo" height={50} width={50} className='mx-auto'/>
            <h1 className='text-8xl font-bold mx-auto tracking-tighter text-black/80'>NEWSHUB</h1>
            <div className='text-xl mx-auto py-2 italic'>Welcome to <span>NewsHub</span>, find your daily insights here!</div>
        </div>
    </div>
  )
}

export default Navbar