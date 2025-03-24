"use client";
import React from 'react'
import Image from 'next/image'
import logo from "/assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark, faBars } from '@fortawesome/free-solid-svg-icons'


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
            // width={50}
            // height={10}
          />
          <div className='flex flex-col gap-4 md:hidden'>
            <div onClick={toggleNav}>
                <FontAwesomeIcon icon={isopen ? faSquareXmark : faBars} />
                {/* <FontAwesomeIcon icon="fa-solid fa-square-xmark" /> */}
                {/* <FontAwesomeIcon icon={isopen ? "fa-solid fa-square-xmark": 'fa-solid fa-bars'} /> */}
              </div>
              { isopen &&
                (<div className='flex flex-col gap-4 text-slate-400 text-xl'>
                  <a href="#">Home</a>
                  <a href="#about">About</a>
                  <a href="#features">Features</a>
                  <a href="#testimonials">Testimonials</a>
                  <a href="#blog">Blog</a> 
                  {/* <button className='purple-button'>Got a demo</button>  */}
                </div> )
                }
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