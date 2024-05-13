import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { PiGithubLogoFill } from 'react-icons/pi';
import { FaFacebookF } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const RightLinks = () => {
  return (
    <div className='fixed h-screen justify-end items-center flex flex-col bottom-0 right-20 z-20'>
      <a href={links.linkedin} target='blank'>
        <div className='p-4 bg-black shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
          <FaLinkedinIn size={22} color='white' />
        </div>
      </a>
      <a href={links.github} target='blank'>
        <div className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
          <PiGithubLogoFill size={26} />
        </div>
      </a>
      <a href={links.leetcode} target='blank'>
        <div className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
          <SiLeetcode size={22} />
        </div>
      </a>
      <a href={links.instagram} target='blank'>
        <div className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
          <FaInstagram size={22} />
        </div>
      </a>
      <a href={links.facebook} target='blank'>
        <div className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
          <FaFacebookF size={22} />
        </div>
      </a>

      <div className='w-[2px] bg-gray-300 rounded-lg h-1/3 mt-4' />
    </div>
  );
};

const links = {
  linkedin: 'https://www.linkedin.com/in/ghritak-jyoti-kalita-a1915415a/',
  github: 'https://github.com/ghritak',
  leetcode: 'https://leetcode.com/ghritak',
  instagram: 'https://instagram.com/ghritak_',
  facebook: 'https://www.facebook.com/ghritak?mibextid=LQQJ4d',
};

export default RightLinks;
