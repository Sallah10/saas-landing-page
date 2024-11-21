import React from 'react'
import Image from 'next/image'
import logo2 from "/assets/logo.png"
import facebook from "/assets/facebook.png"
import instagram from "/assets/instagram.png"
import linkedin from "/assets/linkecin.png"
import twitter from "/assets/twitter.png"

const footer = () => {
  return (
    <footer  className='max-w-screen flex flex-col items-center py-10 bg-gradient-to-bl from-[#0b0716] to-[#060B27] rounded-tr-3xl  rounded-tl-3xl h-full mt-14'>
      <div className='flex justify-between max-w-[100%]  border-b-4 border-gray-400 pb-6 items-center'>
        <div className='flex flex-col gap-10'>
          <Image src={logo2} alt='logo'/>
          <div className="card rounded-xl justify-between max-w-[300px]">
            <h3 className='text-H3 text-white text-center'> Subscribe to our newsletter</h3>
            <input type="text" placeholder='Enter your email' className='bg-transparent px-4 py-4 text-white rounded-full border-slate-300 blur-[.5px] border-2 text-p' />
            <button className='purple-button  text-2xl text-gray-300'> Subscribe </button>
          </div>
        </div>
        <div className='hidden md:flex gap-8 flex-col text-p'>
          <h3 className='text-H3 mb-2'> Pages </h3>
          <h3> Home </h3>
          <h3> About </h3>
          <h3> Contact </h3>
          <h3> Blog </h3>
          <h3> Blog post</h3>
          <h3> Pricing</h3>
          <h3> Pricing single</h3>
        </div>
        <div className='hidden md:flex gap-8 flex-col text-p'>
          <h3> Features</h3>
          <h3> Careers</h3>
          <h3> Careers single</h3>
          <h3> Request a demo</h3>
          <h3> Login</h3>
          <h3> Sign Up</h3>
        </div>
        <div className='hidden md:flex gap-8 flex-col text-p h-[100%]'>
          <h3 className='text-H3 mb-2'> Utility Pages </h3>
          <h3> Style guide</h3>
          <h3> Password Protected </h3>
          <h3> 404 Not found</h3>
          <h3> License </h3>
          <h3> Changelog</h3>
        </div>
      </div>
      <div className='flex flex-col gap-8 justify-between text-p pt-4'>
        <h3 className='px-6'> Copyright &copy; Product | Designed by <span className='text-white'> Sallah </span> - Powered by <span className='text-white'>Sallah</span></h3>
        <div className='flex gap-4 text-p justify-center'>
          <Image src={facebook} alt='socials'/>
          <Image src={twitter} alt='socials'/>
          <Image src={linkedin} alt='socials'/>
          <Image src={instagram} alt='socials'/>
        </div>
      </div>
    </footer>
  )
}

export default footer

{/* <footer  className='mt-12 px-20 pt-24 pb-10 bg-gradient-to-bl from-[#0b0716] to-[#060B27] rounded-tr-3xl  rounded-tl-3xl'>
      <div className='flex justify-between w-[100%] mb-10 border-b-4 border-gray-400 pb-20 items-center'>
        <div className='flex flex-col gap-20'>
          <Image src={logo2} alt='logo'/>
          <div className="card rounded-xl w-[650px] h-[390px] justify-between">
            <h3 className='text-H2 text-white'> Subscribe to our newsletter</h3>
            <input type="text" placeholder='Enter your email' className='bg-transparent px-6 py-4 text-white rounded-full border-slate-300 blur-[.5px] border-2 w-[100%] text-p' />
            <button className='purple-button w-[100%] text-2xl text-gray-300'> Subscribe </button>
          </div>
        </div>
        <div className='flex gap-8 flex-col text-p'>
          <h3 className='text-H3 mb-2'> Pages </h3>
          <h3> Home </h3>
          <h3> About </h3>
          <h3> Contact </h3>
          <h3> Blog </h3>
          <h3> Blog post</h3>
          <h3> Pricing</h3>
          <h3> Pricing single</h3>
        </div>
        <div className='flex gap-8 flex-col text-p'>
          <h3> Features</h3>
          <h3> Careers</h3>
          <h3> Careers single</h3>
          <h3> Request a demo</h3>
          <h3> Login</h3>
          <h3> Sign Up</h3>
        </div>
        <div className='flex gap-8 flex-col text-p h-[100%]'>
          <h3 className='text-H3 mb-2'> Utility Pages </h3>
          <h3> Style guide</h3>
          <h3> Password Protected </h3>
          <h3> 404 Not found</h3>
          <h3> License </h3>
          <h3> Changelog</h3>
        </div>
      </div>
      <div className='flex gap-8 justify-between text-p'>
        <h3> Copyright &copy; Product | Designed by <span className='text-white'> Sallah </span> - Powered by <span className='text-white'>Sallah</span></h3>
        <div className='flex gap-4 text-p'>
          <Image src={facebook} alt='socials'/>
          <Image src={twitter} alt='socials'/>
          <Image src={linkedin} alt='socials'/>
          <Image src={instagram} alt='socials'/>
        </div>
      </div>
    </footer> */}