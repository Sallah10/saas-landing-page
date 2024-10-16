import React from 'react'
import Image from 'next/image'
import BI1 from "/assets/Blog image1.png"
import arrow from "/assets/arrow-right.png"
import BI2 from "/assets/Blog image2.png"
import BI3 from "/assets/Blog image3.png"

const blog = () => {
  return (
    <section id='blog'>
      <div className='flex justify-between items-center mb-16'>
        <h2 className='text-H2'> Product in the news</h2>
        <button className='purple-button'> Browse all news</button>
      </div>
      <div className="flex justify-around">
        <div className='card rounded-2xl'>
          <Image src={BI1} width={500} alt='Blog image 1'/>
          <h3 className='text-H3 text-white'> Product Mail is taking on Gmail by betting on privacy</h3>
          <p className='text-p border-b-4 border-gray-400 pb-6'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nisi officiis deserunt, ipsa aliquid tenetur modi ratione deleniti, nobis animi, doloribus vitae. Beatae pariatur,.</p>
          <div className=" flex justify-between">
            <small className='text-p'>Febraury 8, 2023</small>
            <small className='text-p flex items-center gap-2 text-white'> Read More <span><Image src={arrow} alt='arrow3'/></span></small>
          </div>
        </div>
        <div className='card rounded-2xl'>
          <Image src={BI2} width={500} alt='Blog image 2'/>
          <h3 className='text-H3 text-white'>Wants You To Sign Out Of Google Workspace Forever</h3>
          <p className='text-p border-b-4 border-gray-400 pb-6'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nisi officiis deserunt, ipsa aliquid tenetur modi ratione deleniti, nobis animi, doloribus vitae. Beatae pariatur,.</p>
          <div className=" flex justify-between">
            <small className='text-p'>Febraury 8, 2023</small>
            <small className='text-p flex items-center gap-2 text-white'> Read More <span><Image src={arrow} alt='arrow2'/></span></small>
          </div>
        </div>
        <div className='card rounded-2xl'>
          <Image src={BI3} width={500} alt='Blog image 3'/>
          <h3 className='text-H3 text-white'>The Best Email Encryption Services for 2023</h3>
          <p className='text-p border-b-4 border-gray-400 pb-6'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nisi officiis deserunt, ipsa aliquid tenetur modi ratione deleniti, nobis animi, doloribus vitae. Beatae pariatur,.</p>
          <div className=" flex justify-between">
            <small className='text-p'>Febraury 8, 2023</small>
            <small className='text-p flex items-center gap-2 text-white'> Read More <span><Image src={arrow} alt='arrow1'/></span></small>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default blog