import React from 'react'
import Layout from '../components/Layout'
import certificationsData from '../resources/certifications';
import AOS from 'aos';
AOS.init({
  duration:1000
});

function Certifications() {
  return (
    <Layout>
      <div>
        <div >
          <div className="h-screen relative">
            <div className='h-3/4 bg-theme md:h-4/5'>
              <div>
                <div className='absolute left-0 right-0 -bottom-32 md:bottom-24'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#2a2a2a" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,69.3C384,64,480,96,576,144C672,192,768,256,864,240C960,224,1056,128,1152,90.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                </div>
              </div>
              <lottie-player src="https://lottie.host/e23b8cf3-8bb6-440e-86d6-6bcc0ef66d2f/sYB2ikS4x7.json"
                background="##FFFFFF"
                speed="1"
                loop
                autoplay
                direction="1"
                mode="normal"
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20 md:mt-5'>
        <p className='text-xl font-semibold text-center'>"The more that you read, the more things you will know. The more that you learn, the more places you'll go."</p>
        <h1 className='text-4xl text-center font-bold mt-5'>Beacause</h1>
      </div>
      <div className='font-bold text-center bg-gray-500 m-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5 '>
        <h1 className='text-5xl md:text-2xl'data-aos='slide-down'>Knowledge and learning are keys </h1>
        <h1 className='text-5xl md:text-2xl'data-aos='slide-up'>that unlock new opportunities</h1>
      </div>

      <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5">
        {certificationsData.map((certificate => {
          return <div>
            <div className=' relative border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400'>
              <img src={certificate.image} className='w-full h-60 text-center rounded-tr-3xl rounded-bl-3xl' />
              <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl'>
                <h1 className='text-4xl font-semibold text-white'>{certificate.title}</h1>

                <button className='border-2 rounded border-white p-2 hover:bg-green-500 px-5 mt-5 text-white' onClick={() => {
                  window.location.href = certificate.link;
                }}>Open</button>

              </div>
            </div>
          </div>
        }))}
      </div>
    </Layout>
  )
}

export default Certifications