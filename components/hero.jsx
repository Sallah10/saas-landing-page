import React from 'react'
import Image from 'next/image'
import heroImage from '/assets/Hero image.png'

const hero = () => {
  return (
    <>
      <section className='lg:flex flex-col gap-8 pt-10 my-20 items-center flex-wrap' id='hero'>
        <h1 className='lg:text-H1  md:text-H2 text-center sm:text-H3'>A CRM dashboard for engineering teams</h1>
        <p className='text-center text-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dignissimos nesciunt repellat temporibus ducimus soluta ea consequatur a quas illum sed, ullam natus laborum animi exercitationem corporis voluptate architecto deleniti?</p>
        <div className='flex gap-6 '>
          <button className='purple-button'>
            Got a demo
          </button>
          <button className='trans-button'>
            View Pricing
          </button>
        </div>
        <Image
          src ={heroImage}
          alt='hero-image'
        />
      </section>
    </>
  )
}

export default hero