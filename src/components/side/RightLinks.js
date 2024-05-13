import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { PiGithubLogoFill } from 'react-icons/pi';
import { FaFacebookF } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const RightLinks = () => {
  const handleGoToExternalSite = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className='fixed h-screen justify-end items-center flex flex-col bottom-0 right-20 z-20'>
      <div
        onClick={() =>
          handleGoToExternalSite(
            'https://www.linkedin.com/in/ghritak-jyoti-kalita-a1915415a/'
          )
        }
        className='p-4 bg-black shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'
      >
        <FaLinkedinIn size={22} color='white' />
      </div>
      <div
        onClick={() => handleGoToExternalSite('https://github.com/ghritak')}
        className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'
      >
        <PiGithubLogoFill size={26} />
      </div>
      <div
        onClick={() => handleGoToExternalSite('https://leetcode.com/ghritak')}
        className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'
      >
        <SiLeetcode size={22} />
      </div>
      <div
        onClick={() => handleGoToExternalSite('https://instagram.com/ghritak_')}
        className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'
      >
        <FaInstagram size={22} />
      </div>
      <div
        onClick={() => handleGoToExternalSite('https://m.facebook.com/ghritak')}
        className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'
      >
        <FaFacebookF size={22} />
      </div>
      <div className='w-[2px] bg-gray-300 rounded-lg h-1/3 mt-4' />
    </div>
  );
};

export default RightLinks;
