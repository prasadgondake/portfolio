import React from 'react'
import Layout from '../components/Layout'
import { FaCss3, FaGit, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa'
import AOS from 'aos';
AOS.init({
  duration:1000
});
function Home() {
  
  return (
    <Layout>
      <div>

        {/* Intro Section */}
        <div className='h-screen bg-theme'>
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0
          mx-12 z-10 bg-theme
          border-white transform rotate-12 md:rotate-0">
            <div className='h-1/2'>
              <lottie-player
                src="https://lottie.host/4a5cf358-36d7-473e-a871-d13b9609e2b7/CyOA22kJUN.json"
                background="##FFFFFF"
                speed="1"
                loop
                autoplay
                direction="1"
                mode="normal"
              ></lottie-player>
            </div>

            <div className='font-bold text-white md:px-5'>
              <h1 className='text-6xl md:text-4xl'>Hii , I am <b className='text-yellow-500'>PRASAD</b></h1>
              <h1 className='text-4xl md:text-xl'>FrontEnd <b className='text-red-500'>Developer</b> , Gamer</h1>
            </div>

          </div>
        </div>

        {/* Technologies */}
        <div className='mt-20'>
          <h1 className='text-4xl text-blue-800 font-bold text-center my-8' data-aos='slide-up'>Technologies I USE</h1>
          <div className='grid md:grid-cols-1 grid-cols-4'>
            <FaReact size={180} color='cyan' className='w-full text-center mt-20' />
            <FaHtml5 size={180} color='orange' className='w-full text-center mt-20 animate-bounce' />
            <FaCss3 size={180} color='blue' className='w-full text-center mt-20 animate-bounce' />
            <FaJsSquare size={180} color='green' className='w-full text-center mt-20 ' />
            <FaNodeJs size={180} color='green' className='w-full text-center mt-20 animate-bounce' />
            <FaGit size={180} color='brown' className='w-full text-center mt-20' />
            <FaGithub size={180} color='black' className='w-full text-center mt-20' />
            <FaPhp size={180} color='blue' className='w-full text-center mt-20 animate-bounce' />

          </div>

        </div>

        {/* {Javascript Buff} */}
        <div className='my-20'>
          <div className='text-center h-52 bg-primary'>
            <h1 className='text-white font-bold text-4xl py-10'>Yes You Are Right...I am Frontend Buff</h1>
          </div>

          <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-600 hover:text-white'>
            <div className='h-96'data-aos='zoom-in'>
              <lottie-player
                src="https://lottie.host/da910459-f26f-4f83-9b90-d6ea8968eecd/OwZ2zfgxmL.json"
                background="##FFFFFF"
                speed="1"
                loop
                autoplay
                direction="1"
                mode="normal"
              ></lottie-player>
            </div>
            <p className='text-xl font-semibold text-center my-5 md:px-5 px-14 py-10'>"Frontend development is the bridge between the world of design and the world of technology."</p>
          </div>
        </div>

        {/* {Dev Stack Section} */}
        <div className='my-20'>
          <div className='text-center h-52 bg-red-500'>
            <h1 className='text-white font-bold text-4xl py-10'>My DEV Stack</h1>
          </div>

          <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-600 hover:text-white'>
            <div className='h-96'data-aos='zoom-in'>
              <lottie-player
                src="https://lottie.host/bb46a968-4ebe-4f96-9fc7-173ee43623a0/4IJ1ry4Eoo.json"
                background="##FFFFFF"
                speed="1"
                loop
                autoplay
                direction="1"
                mode="normal"
              ></lottie-player>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-3 p-5 ">

              <div>
                <h1 className='text-xl font-bold'>Front End</h1>
                <hr />
                <p className='font-semibold mt-2'>HTML/CSS</p>
                <p className='font-semibold mt-2'>React</p>
                <p className='font-semibold mt-2'>Javascript</p>
                <p className='font-semibold mt-2'>Redux</p>
              </div>

              <div className='text-center'>
                <h1 className='text-xl font-bold'>UI / UX</h1>
                <hr />
                <p className='font-semibold mt-2'>Bootstrap</p>
                <p className='font-semibold mt-2'>Tailwind-CSS</p>
              </div>

              <div className='text-right'>
                <h1 className='text-xl font-bold'>Back End & DB</h1>
                <hr />
                <p className='font-semibold mt-2'>Node Js</p>
                <p className='font-semibold mt-2'>Mongo DB</p>
                <p className='font-semibold mt-2'>My SQL</p>
                <p className='font-semibold mt-2'>Firebase</p>

              </div>
            </div>
          </div>
        </div>

        {/* Dev Info */}
        <div>
          <h1 className='text-4xl text-gray-500 text-center font-bold'>Who is Prasad ?</h1>

          <div className='h-screen relative'>
            <div className='h-full'>
              <lottie-player src="https://lottie.host/a4cfaa81-b699-4528-a8e3-7c858795d9ff/GV1ZqRP5Tz.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                direction="1"
                mode="normal"
              ></lottie-player>
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
              <h1 className='text-2xl font-bold'>Hi , Hello , Namaste...
                <hr />
                <pre className='text-xl md:text-sm my-5 font-mont font-semibold'>
                  {JSON.stringify({
                    Name: 'Prasad Gondake',
                    Age: 21,
                    Gender: 'Male',
                    City: 'Pune',
                    State: 'Maharashtra',
                    Country: 'India'
                  }, null, 2)}
                </pre>
              </h1>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Home