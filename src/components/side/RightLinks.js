import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { PiGithubLogoFill } from 'react-icons/pi';
import { FaFacebookF } from 'react-icons/fa';

const RightLinks = () => {
  return (
    <div className='fixed h-screen justify-center items-center flex flex-col bottom-0 right-20'>
      <div className='p-4 bg-black shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
        <FaLinkedinIn size={22} color='white' />
      </div>
      <div className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
        <PiGithubLogoFill size={26} />
      </div>
      <div className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
        <FaInstagram size={22} />
      </div>
      <div className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
        <FaFacebookF size={22} />
      </div>
    </div>
  );
};

export default RightLinks;
