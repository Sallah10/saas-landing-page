import React from 'react'
import Image from 'next/image'
import userInfo from '/assets/userInfo.svg'
import dialTrack from '/assets/dialTrack.svg'
import emailTrack from '/assets/emailTrack.svg'
import pipeline from '/assets/pipeline.svg'
import Report from '/assets/Report.png'
import meeting from '/assets/meeting.svg'

const About = () => {
  return (
    <>
      <section className='my-16 gap-10 flex flex-col max-w-screen' id='about'>
        <div className='flex justify-center items-center gap-6 flex-col'>
          <h1 className='text-H3 text-center'> Powerful features to help you manage all your leads</h1>
          <p className='text-p text-center text-wheat'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit tempore iusto, dolorum, sapiente culpa at aliquam corrupti, illum quibusdam soluta voluptatibus voluptates veritatis excepturi sit.</p>
        </div>
        <div className=' grid md:grid-cols-1 lg:grid-cols-2 gap-8 px-4'>
          <div className="card">
            <Image
              src={userInfo}
              alt='userinfo'
            />
            <h2 className='text-H3'>
              User information
            </h2>
            <p className='text-p text-justify'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, pariatur. Ab error, quasi ratione molestiae perspiciatis earum quo itaque explicabo,</p>
          </div>
          <div className="card">
            <Image
              src={pipeline}
              alt='card-images'
            />
            <h2 className='text-H3'>
              Dial tracking
            </h2>
            <p className='text-p' text-justify> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, pariatur. Ab error, quasi ratione molestiae perspiciatis earum quo itaque explicabo,</p>
          </div>
          <div className="card">
            <Image
              src={Report}
              alt='card-images'
            />
            <h2 className='text-H3'>
              Pipeline management
            </h2>
            <p className='text-p text-justify'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, pariatur. Ab error, quasi ratione molestiae perspiciatis earum quo itaque explicabo,</p>
          </div>
          <div className="card">
            <Image
              src={meeting}
              alt='card-images'
            />
            <h2 className='text-H3'>
              Report dashboard
            </h2>
            <p className='text-p text-justify'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, pariatur. Ab error, quasi ratione molestiae perspiciatis earum quo itaque explicabo,</p>
          </div>
          <div className="card">
            <Image
              src={emailTrack}
              alt='card-images'
            />
            <h2 className='text-H3'>
              Meeting scheduling
            </h2>
            <p className='text-p text-justify'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, pariatur. Ab error, quasi ratione molestiae perspiciatis earum quo itaque explicabo,</p>
          </div>
          <div className="card">
            <Image
              src={dialTrack}
              alt='card-images'
            />
            <h2 className='text-H3'>
              Email tracking
            </h2>
            <p className='text-p text-justify'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, pariatur. Ab error, quasi ratione molestiae perspiciatis earum quo itaque explicabo,</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About


{/* <section className='my-16 gap-11 flex flex-col' id='about'>
<div className='flex justify-center items-center gap-16 lg:flex-row md:flex-col'>
  <h1 className='text-H2'> Powerful features to help you manage all your leads</h1>
  <p className='text-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit tempore iusto, dolorum, sapiente culpa at aliquam corrupti, illum quibusdam soluta voluptatibus voluptates veritatis excepturi sit.</p>
</div>
<div className='grid lg:grid-cols-3 gap-8 md:grid-cols-2 md:gap-8'>
  <div className="card">
    <Image
      src={userInfo}
      alt='userinfo'
    />
    <h2 className='text-H3'>
      User information
    </h2>
    <p className='text-p'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, pariatur. Ab error, quasi ratione molestiae perspiciatis earum quo itaque explicabo,</p>
  </div>
  <div className="card">
    <Image
      src={pipeline}
      alt='card-images'
    />
    <h2 className='text-H3'>
      Dial tracking
    </h2>
    <p className='text-p'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, pariatur. Ab error, quasi ratione molestiae perspiciatis earum quo itaque explicabo,</p>
  </div>
  <div className="card">
    <Image
      src={Report}
      alt='card-images'
    />
    <h2 className='text-H3'>
      Pipeline management
    </h2>
    <p className='text-p'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, pariatur. Ab error, quasi ratione molestiae perspiciatis earum quo itaque explicabo,</p>
  </div>
  <div className="card">
    <Image
      src={meeting}
      alt='card-images'
    />
    <h2 className='text-H3'>
      Report dashboard
    </h2>
    <p className='text-p'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, pariatur. Ab error, quasi ratione molestiae perspiciatis earum quo itaque explicabo,</p>
  </div>
  <div className="card">
    <Image
      src={emailTrack}
      alt='card-images'
    />
    <h2 className='text-H3'>
      Meeting scheduling
    </h2>
    <p className='text-p'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, pariatur. Ab error, quasi ratione molestiae perspiciatis earum quo itaque explicabo,</p>
  </div>
  <div className="card">
    <Image
      src={dialTrack}
      alt='card-images'
    />
    <h2 className='text-H3'>
      Email tracking
    </h2>
    <p className='text-p'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, pariatur. Ab error, quasi ratione molestiae perspiciatis earum quo itaque explicabo,</p>
  </div>
</div>
</section> */}