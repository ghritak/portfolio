import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { IoCheckbox } from 'react-icons/io5';

const AboutComponent = () => {
  return (
    <div className='mx-56 flex relative'>
      <div className='flex flex-row h-screen space-x-20'>
        <div className=' flex justify-center items-center'>
          <div className='space-y-20'>
            <h1 className='text-6xl font-serif font-bold'>Education</h1>
            <div className='flex flex-row space-x-5'>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-700 p-3 rounded-full'>
                  <div className='bg-black'>
                    <div className='bg-red-300 p-0'>
                      <IoCheckbox size={24} className='text-gray-600' />
                    </div>
                  </div>
                </div>
                <div className='h-[500px] w-1 bg-gray-500' />
              </div>
              <div className='space-y-20'>
                <div className='space-y-3'>
                  <h1 className='text-4xl font-bold font-serif text-gray-800'>
                    Bachelor of Technology
                  </h1>
                  <h1 className='text-2xl font-semibold text-gray-700'>
                    Electronics and Communication Engineering
                  </h1>
                  <div className='flex items-center font-medium space-x-2'>
                    <h2 className='text-xl'>Tezpur University</h2>
                    <GoDotFill color='#333' />
                    <h2 className='text-xl'>2023</h2>
                  </div>
                </div>
                <div className='space-y-3'>
                  <h1 className='text-3xl font-bold font-serif text-gray-800'>
                    Higher Secondary, AHSEC
                  </h1>
                  <div className='flex items-center font-medium space-x-2'>
                    <h2 className='text-xl'>Cotton University</h2>
                    <GoDotFill color='#333' />
                    <h2 className='text-xl'>2018</h2>
                  </div>
                </div>
                <div className='space-y-3'>
                  <h1 className='text-3xl font-bold font-serif text-gray-800'>
                    High School, SEBA
                  </h1>
                  <div className='flex items-center font-medium space-x-2'>
                    <h2 className='text-xl'>Navarun Jatiya Vidyalaya</h2>
                    <GoDotFill color='#333' />
                    <h2 className='text-xl'>2023</h2>
                  </div>
                </div>
              </div>
            </div>
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

export default AboutComponent;
