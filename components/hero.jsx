import React from 'react'
import Image from 'next/image'
import heroImage from '/assets/Hero image.png'

const hero = () => {
  return (
    <>
      <section className='flex flex-col gap-6 pt-10 max-w-screen p-4 my-20 items-center flex-wrap' id='hero'>
        <h1 className='text-5xl lg:text-H1 bg-gradient-to-bl from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent text-center'>A CRM dashboard for engineering teams</h1>
        <p className='text-center text-p px-16'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dignissimos nesciunt repellat temporibus ducimus lorum animi exercitationem corporis voluptate architecto deleniti?</p>
        <div className='flex gap-6'>
          <button className='purple-button lg:w-[200px] lg:p-4'>
            Got a demo
          </button>
          <button className='trans-button lg:w-[200px] lg:p-4'>
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

{/* <section className='lg:flex md:pt-34 flex-col gap-8 pt-10 my-20 items-center flex-wrap' id='hero'>
<h1 className='lg:text-H1  md:text-H2 text-center sm:text-H3'>A CRM dashboard for engineering teams</h1>
<p className='text-center text-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dignissimos nesciunt repellat temporibus ducimus soluta ea consequatur a quas illum sed, ullam natus laborum animi exercitationem corporis voluptate architecto deleniti?</p>
<div className='flex gap-6 sm:flex-col lg:flex-row '>
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
</section> */}