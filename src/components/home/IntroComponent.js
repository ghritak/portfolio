import React from 'react';
import Profile from '../../assets/my_image.jpeg';
import User from '../../assets/user.jpg';

const IntroComponent = () => {
  return (
    <div className='justify-center flex relative '>
      <div className='flex flex-row h-screen -mt-20 space-x-20'>
        <div className='text-white flex justify-center items-center'>
          <div className='max-w-xl space-y-5'>
            <p className='text-2xl'>Hi There, I am</p>
            <div>
              <h1 className='text-7xl font-bold font-serif'>GHRITAK</h1>
            </div>
            <p>
              A software developer with a passion for creating exceptional
              digital experiences. Specializing in React Native, ReactJs and
              varoius tech stacks.
            </p>
            <div className='flex space-x-3'>
              <div className='rounded-full px-8 py-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 border-black border-[1px]'>
                Hire Me
              </div>
              <div className='rounded-full px-8 py-2 cursor-pointer bg-zinc-800  hover:bg-white hover:text-black  transition-all duration-300 border-[1.5px] border-white'>
                Download CV
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='rounded-full overflow-hidden '>
            <img
              src={User}
              alt='Profile'
              className='rounded-full w-[400px] h-[400px] '
            />
          </div>
        </div>
      </div>
      {/* <div>
        <svg
          id='blobs'
          width='100%'
          height='100%'
          viewBox='0 0 150 150'
          class='hidden md:flex'
          fill='#29283D'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M 139.991992242767 70.00963166049999C 139.981902012631 108.66659056762 108.64780927187002 140.00139601588 69.993494640293 139.99520468899C 31.339279991027 139.98901343285598 -0.0035380830240008265 108.65411253475199 0.0017536874599990426 69.992689720037C 0.0070454579440024645 31.331366887633003 31.360315855961005 -0.0005996960157998998 70.01234090774 0.007387987739996049C 108.66446594183 0.015375685647001092 140.00208252597 31.352772912581003 139.991992242767 70.00963166049999Z'
            stroke='#29283D'
          ></path>
        </svg>
      </div> */}
    </div>
  );
};

export default IntroComponent;
