import React from 'react';
import { IoCheckbox } from 'react-icons/io5';

const LeftIndicator = ({ size }) => {
  return (
    <div className='flex flex-col items-center mr-8'>
      <div className='bg-zinc-700 p-3 rounded-full'>
        <div className=''>
          <div className='p-0'>
            <IoCheckbox size={24} className='text-gray-400' />
          </div>
        </div>
      </div>
      <div className={`w-1 bg-zinc-500`} style={{ height: `${size}px` }} />
    </div>
  );
};

export default LeftIndicator;
