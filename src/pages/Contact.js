import React from 'react'
import Layout from '../components/Layout'

function Contact() {
  return (
    <Layout>
      <div>
        <div>
          <div className="h-screen mt-10">
            <lottie-player
              src="https://lottie.host/afe067c5-7949-4791-a467-9ed34bdd714e/TVdyJSrU18.json"
              background="##FFFFFF"
              speed="1"
              loop
              autoplay
              direction="1"
              mode="normal"
            ></lottie-player></div>
        </div>
        <div className='w-screen flex justify-center'>
          <div className='md:w-full w-1/2 p-10 shadow-2xl bg-gray-50'>
            <h1 className='text-2xl font-semibold'>Contact me to know more</h1>
            <input type="text" placeholder='Name' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5' />
            <input type="text" placeholder='Email' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5' />
            <textarea type="text" placeholder='Query' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5' />

            <button className='bg-red-500 rounded text-white px-5 py-1 mt-3'>SUBMIT</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact