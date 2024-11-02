import React from 'react';
import { GoDotFill } from 'react-icons/go';

const OrgLine = ({ name, year }) => {
  return (
    <div className='md:flex items-center font-medium space-y-1 md:space-x-2'>
      <h2 className='text-sm md:text-xl'>{name}</h2>
      <div className='hidden md:block'>
        <GoDotFill color='white' />
      </div>
      <h2 className='text-sm md:text-xl'>{year}</h2>
    </div>
  );
};

export default OrgLine;
