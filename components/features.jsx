import React from 'react'
import email from "/assets/email.png"
import events from "/assets/events.png"
import documents from "/assets/documents.png"
import files from "/assets/files.png"
import featurePhone from "/assets/featurePhone.png"
import featuresimagex from "/assets/featuresImage1.png"
import featuresimagey from "/assets/featuresImage2.png"
import featuresimagez from "/assets/featuresImage3.png"
import featuresimagea from "/assets/featuresImage4.png"
import Image from 'next/image'


const features = () => {
  return (
    <section className='flex flex-col gap-12 my-16 mt-8 border-red-800 border-8 max-w-screen' id='features'>
      <h2 className='text-H3 flex justify-center text-center'> Essential apps that protect your </h2>
      <div className='hidden text-H3 gap-8 items-center justify-center'>
        <Image src={email} alt="Email" /> <span>Email</span> ,<Image src={events} alt="events" /> <span>Events</span>,<Image src={files} alt="files" /> <span>Files</span>,  <Image src={documents} alt="documents" /> <span>Documents</span>
      </div>
      <div className='flex flex-col justify-between gap-10 p-10 border-slate-500 border-2 bg-gradient-to-bl from-[#201320] to-[#060B27] '>
        <div className='flex flex-col gap-6'>
          <h2 className='text-H3 text-center'> End-to-end encrypted inbox and messages</h2>
          <p className='text-p text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam laboriosam amet porro minima iste sed quam.</p>
          <button className='trans-button mx-auto w-[200px]'> Learn More</button>
        </div>
        <Image src={featuresimagex} alt="featuresimage1" />
      </div>
      <div>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-10 max-w-[700px] p-16 bg-gradient-to-bl from-[#3a1e64] to-[#060B27]'>
            <Image src={featurePhone} alt="featuresphone" className=' flex self-center' />
            <h2 className='text-H2'>Mobile applications</h2>
            <p className='text-p  text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lvoluptas, debitis aliquam beatae impedit. Porro!</p>
          </div>
          <div className='flex flex-col gap-10 max-w-[800px] p-8 text-center bg-gradient-to-bl from-[#746191] to-[#060B27]'>
            <h2 className='text-H3'>Update share, and preview any file</h2>
            <p className='text-p text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lvoluptas, debitis aliquam beatae impedit. Porro!</p>
            <Image src={featuresimagey} alt="featuresimage2" />
          </div>
        </div>
      </div>
      <div className='flex gap-2 mx-[auto]'>
        <button className='purple-button  w-[180px]'> Get Started </button>
        <button className='trans-button'> Browse all features </button>
      </div>
      <div className='mt-8 p-6 bg-gradient-to-bl from-[#201320] to-[#060B27]'>
        <div className='flex flex-col justify-between mb-14'>
          <div className='max-w-[700px] flex flex-col gap-10 my-16 '>
            <h2 className='text-H3 text-center'> Transparent, audited, &open source</h2>
            <p className='text-p text-justify'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis facere porro obcaecati. Delectus ducimus cumque, omnis exercitationem minus quo illo nemo corrupti aspernatur tempora corporis? Iure unde quibusdam nostrum commodi?</p>
            <button className='trans-button mx-auto'> Browse all feature</button>
          </div>
          <Image src={featuresimagez} alt='features-alts'/>
        </div>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-6 p-10 bg-gradient-to-bl from-[#3a1e64] to-[#060B27] max-w-[900px] rounded-2xl'>
            <h3 className='text-H3'> Product Mail</h3>
            <p className='text-p text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda non sequi, deleniti tempore eos enim voluptatibus rerum est animi, quibusdam amet mollitia veritatis perspiciatis fugit porro facilis accusantium delectus ipsa.</p>
            <div>
              <h3 className='text-2xl text-gray-700'> New Message</h3>
              <h3 className='text-xl flex gap-4 my-6 items-center'> To <span className='rounded-full px-6 py-4 bg-gray-500'>Sajid H. X</span> <span className='ml-auto'>CC</span> <span>BCC</span></h3> <hr />
              <h3 className='text-xl flex gap-8 my-6 items-center'> To <span className=''> Decilis tellus tinc</span></h3> <hr />
              <h3 className='text-xl flex gap-8 my-6 items-center'> From <span className=''>Muhammed@gmail.com</span></h3> <hr />
              <h3 className='text-xl mt-6 -mb-10'> Gilisis </h3>
            </div>
          </div>
          <div className='flex flex-col gap-6 p-10 bg-gradient-to-bl from-[#3a1e64] to-[#060B27] max-w-[900px] rounded-2xl'>
            <h3 className='text-H3'>Product UI</h3>
            <p className='text-p text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsa consectetur, i Hic sit vitae delectus ab dolorem. leniti tempore eos enim voluptatibus rerum est animi.</p>
            <Image src={featuresimagea} weight={100} height={500} alt='features-alts'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default features

// <section className='flex flex-col gap-12 my-16 mt-8' id='features'>
//       <h2 className='text-H2 flex justify-center'> Essential apps that protect your </h2>
//       <div className='flex text-H3 gap-8 items-center justify-center'>
//         <Image src={email} alt="Email" /> <span>Email</span> ,<Image src={events} alt="events" /> <span>Events</span>,<Image src={files} alt="files" /> <span>Files</span>,  <Image src={documents} alt="documents" /> <span>Documents</span>
//       </div>
//       <div className='flex justify-between gap-40 p-20 border-slate-500 border-2 bg-gradient-to-bl from-[#201320] to-[#060B27] '>
//         <div className='flex flex-col gap-10'>
//           <h2 className='text-H2'> End-to-end encrypted inbox and messages</h2>
//           <p className='text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam laboriosam amet porro minima iste sed quam.</p>
//           <button className='trans-button'> Learn More</button>
//         </div>
//         <Image src={featuresimagex} alt="featuresimage1" />
//       </div>
//       <div>
//         <div className='flex justify-between'>
//           <div className='flex flex-col gap-10 w-[700px] p-16 bg-gradient-to-bl from-[#3a1e64] to-[#060B27]'>
//             <Image src={featurePhone} alt="featuresphone" className=' flex self-center' />
//             <h2 className='text-H2'>Mobile applications</h2>
//             <p className='text-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lvoluptas, debitis aliquam beatae impedit. Porro!</p>
//           </div>
//           <div className='flex flex-col gap-10 w-[800px] p-16 bg-gradient-to-bl from-[#746191] to-[#060B27]'>
//             <h2 className='text-H2'>Update share, and preview any file</h2>
//             <p className='text-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lvoluptas, debitis aliquam beatae impedit. Porro!</p>
//             <Image src={featuresimagey} alt="featuresimage2" />
//           </div>
//         </div>
//       </div>
//       <div className='flex gap-12 mx-[auto]'>
//         <button className='purple-button'> Get Started </button>
//         <button className='trans-button'> Browse all features </button>
//       </div>
//       <div className='mt-8 p-14 bg-gradient-to-bl from-[#201320] to-[#060B27]'>
//         <div className='flex justify-between mb-14'>
//           <div className='w-[700px] flex flex-col gap-10 my-16 '>
//             <h2 className='text-H2'> Transparent, audited, &open source</h2>
//             <p className='text-p'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis facere porro obcaecati. Delectus ducimus cumque, omnis exercitationem minus quo illo nemo corrupti aspernatur tempora corporis? Iure unde quibusdam nostrum commodi?</p>
//             <button className='trans-button'> Browse all feature</button>
//           </div>
//           <Image src={featuresimagez} alt='features-alts'/>
//         </div>
//         <div className='flex gap-16'>
//           <div className='flex flex-col gap-6 p-10 bg-gradient-to-bl from-[#3a1e64] to-[#060B27] w-[900px] rounded-2xl'>
//             <h3 className='text-H3'> Product Mail</h3>
//             <p className='text-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda non sequi, deleniti tempore eos enim voluptatibus rerum est animi, quibusdam amet mollitia veritatis perspiciatis fugit porro facilis accusantium delectus ipsa.</p>
//             <div>
//               <h3 className='text-2xl text-gray-700'> New Message</h3>
//               <h3 className='text-xl flex gap-8 my-6 items-center'> To <span className='rounded-full px-6 py-4 bg-gray-500'>Sajid H. X</span> <span className='ml-auto'>CC</span> <span>BCC</span></h3> <hr />
//               <h3 className='text-xl flex gap-8 my-6 items-center'> To <span className=''> Decilis tellus tinc</span></h3> <hr />
//               <h3 className='text-xl flex gap-8 my-6 items-center'> From <span className=''>Muhammed@gmail.com</span></h3> <hr />
//               <h3 className='text-xl mt-6 -mb-10'> Gilisis </h3>
//             </div>
//           </div>
//           <div className='flex flex-col gap-6 p-10 bg-gradient-to-bl from-[#3a1e64] to-[#060B27] w-[900px] rounded-2xl'>
//             <h3 className='text-H3'>Product UI</h3>
//             <p className='text-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsa consectetur, ipsum labore accusamus tenetur nostrum explicabo illo. Hic sit vitae delectus ab dolorem. leniti tempore eos enim voluptatibus rerum est animi, quibusdam amet mollitia veritatis perspiciatis fugit porro facilis accusantium delectus ipsa.</p>
//             <Image src={featuresimagea} weight={100} height={500} alt='features-alts'/>
//           </div>
//         </div>
//       </div>
//     </section>