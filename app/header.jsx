import React from 'react'
import Image from 'next/image'
import logo from "/assets/logo.png"

const header = () => {
  return (
    <>
      <nav className='lg:flex blur-24 justify-between  container -mt-20 mb-10 bg-transparent py-8 items-center fixed backdrop-filter backdrop-blur-md md:flex sm:flex'>
              <Image
            src={logo}
            alt='Logo'
          />
          <div className='lg:flex gap-4 text-slate-400 text-xl md:hidden sm:hidden'>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#blog">Blog</a>
          </div>
          <button className='purple-button'>Got a demo</button>   
      </nav>
    </>
  )
}

export default header