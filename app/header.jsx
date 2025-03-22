"use client";
import React from 'react'
import Image from 'next/image'
import logo from "/assets/logo.png"


const Header = () => {
  const [isopen, setIsopen] = React.useState();
 
  const toggleNav = () => {
    setIsopen(!isopen);
  };

  return (
    <>
      <nav className='flex justify-between container px-4 max-w-screen py-6 blur-24 -mt-20 mb-10 bg-transparent items-center fixed backdrop-filter backdrop-blur-md'>
          <Image
            src={logo}
            alt='Logo'
            // width={150}
            // height={30}
          />
          <div>
            <div className='menu-icon' onClick={toggleNav}>
              <i className={isopen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            { isopen ? 
              <div>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#blog">Blog</a> 
                <button className='purple-button'>Got a demo</button> 
              </div> 
              : "" }
          </div>
          <div className='hidden md:flex md:gap-4 md:text-slate-400 text-xl'>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#blog">Blog</a>
          </div>
          <button className='purple-button hidden md:flex'>Got a demo</button>   
      </nav>
    </>
  )
}

export default Header

{/* <>
<nav className='flex blur-24 justify-between  container -mt-20 mb-10 bg-transparent py-8 items-center fixed backdrop-filter backdrop-blur-md md:flex sm:flex'>
        <Image
      src={logo}
      alt='Logo'
    />
    <div className='flex gap-4 text-slate-400 text-xl'>
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#features">Features</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#blog">Blog</a>
    </div>
    <button className='purple-button'>Got a demo</button>   
</nav>
</> */}