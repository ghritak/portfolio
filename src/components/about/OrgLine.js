import React from 'react';
import { GoDotFill } from 'react-icons/go';

const OrgLine = ({ name, year }) => {
  return (
    <div className='flex items-center font-medium space-x-2'>
      <h2 className='text-xl'>{name}</h2>
      <GoDotFill color='white' />
      <h2 className='text-xl'>{year}</h2>
    </div>
  );
};

export default OrgLine;
