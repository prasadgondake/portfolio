import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaMailBulk } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2a2a2a" fill-opacity="1" d="M0,192L0,160L160,160L160,32L320,32L320,64L480,64L480,256L640,256L640,192L800,192L800,160L960,160L960,192L1120,192L1120,128L1280,128L1280,32L1440,32L1440,320L1280,320L1280,320L1120,320L1120,320L960,320L960,320L800,320L800,320L640,320L640,320L480,320L480,320L320,320L320,320L160,320L160,320L0,320L0,320Z"></path></svg>
      </div>
      <div className='bg-theme w-screen flex justify-center'>
        <div className='md:w-full w-1/2'>
          <div className='p-10 font-mont text-center'>
            <p className='text-gray-50 pb-5'>Designed and Developed By</p>
            <div className='h-1 border-2 border-white border-dotted'>
            </div>
            <div className='flex text-white w-full justify-between py-3'>
              <a href="https://www.linkedin.com/in/prasad-gondake-6bb132247/"><FaLinkedin /></a>
              <a href="mailto:prasadgondake0910@email.com"><FaMailBulk /></a>
              <a href="https://github.com/prasadgondake/"><FaGithub /></a>
              <a href="https://www.instagram.com/reels/Ct0l2JmIXVx//"><FaInstagram /></a>
              <a href="https://www.youtube.com/@peaceboy_gaming/about"><FaYoutube /></a>
            </div>

            <div className='h-1 border-2 border-gray-50 border-dotted'>
            </div>
            <p className='text-gray-50 my-2'>Prasad Shilaram Gondake</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer