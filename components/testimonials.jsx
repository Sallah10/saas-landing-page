import React from 'react'
import Image from 'next/image'
import avatar from "/assets/Avatar.png"
import avatar2 from "/assets/Avata3r.png"
import avatar3 from "/assets/Avatar(1).png"
import leftarrow from "/assets/Left arrow.png"
import rightarrow from "/assets/arrow-right(1).png"
import discord from "/assets/discord.png"
// import BG from "/assets/Bg shape.png" <Image src={BG}/>

const testimonials = () => {
  return (
    <section id='testimonials' className=' border-red-300 border-8'>
      <div className='flex flex-col items-center gap-8 mb-10 border-red-950'>
        <h2 className='text-H2 text-center'>What our clients say</h2>
        <p className='text-p text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique possimus qui dicta voluptatum distinctio ratione.</p>
      </div>
      <div className="grid grid-cols-1 gap-10">
        <div className='card rounded-xl bg-gradient-to-bl from-[#746191] to-[#060B27]'>
          <div className='flex gap-6'>
            <Image src={avatar2} width={70} height={40} alt='avatar1'/>
            <div className='flex flex-col gap-2'>
              <h3 className='text-p text-white'> Cameron Williamson</h3>
              <small className='text-p'>Web developer</small>
            </div>
          </div>
          <p className='text-p text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, impedit, ratione nihil nemo esse minus itaque perferendis culpa debitis commodi saepe tempora numquam vero vitae quidem nam assumenda. Voluptate, libero.</p>
        </div>
        <div className='card rounded-xl bg-gradient-to-bl from-[#746191] to-[#060B27]'>
          <div className='flex gap-6'>
            <Image src={avatar3} width={70} height={40} alt='avatar2'/>
            <div className='flex flex-col gap-2'>
              <h3 className='text-p text-white'> Esther Howard</h3>
              <small className='text-p'>Web developer</small>
            </div>
          </div>
          <p className='text-p text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, impedit, ratione nihil nemo esse minus itaque perferendis culpa debitis commodi saepe tempora numquam vero vitae quidem nam assumenda. Voluptate, libero.</p>
        </div>
        <div className='card rounded-xl bg-gradient-to-bl from-[#746191] to-[#060B27]'>
          <div className='flex gap-6'>
            <Image src={avatar} width={70} height={40} alt='avatar3'/>
            <div className='flex flex-col gap-2'>
              <h3 className='text-p text-white'> Jerry Wilson</h3>
              <small className='text-p'> UI/UX developer</small>
            </div>
          </div>
          <p className='text-p text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, impedit, ratione nihil nemo esse minus itaque perferendis culpa debitis commodi saepe tempora numquam vero vitae quidem nam assumenda. Voluptate, libero.</p>
        </div>
      </div>
      <div className="flex gap-8 items-center justify-center mt-12">
        <Image src={leftarrow} alt='left-arrow'/>
        <Image src={rightarrow} alt='right-arrow'/>
      </div>
      <div className="card items-center max-w-[100%] max-h-[500px] justify-center gap-8 bg-gradient-to-bl from-[#3a1e64] to-[#060B27] my-16 rounded-xl bg-[url('/assets/Bg shape.png')] ">
        <Image src={discord} alt='discord'/>
        <h2 className='text-H2 text-white text-center'> Join the community</h2>
        <p className='text-p max-w-[700px] text-center'> Join our 400,000+ person community and contribute to a more private and decentralized internet. Start for free.</p>
        <button className='purple-button'> Join Discord</button>
      </div>
    </section>
  )
}

export default testimonials