import React from 'react';
import { work } from '../constants/work';
import WorkCard from './WorkCard';

const WorkComponent = () => {
  return (
    <div className='mx-56 flex relative px-20 py-28'>
      <div className='flex flex-row min-h-screen space-x-20'>
        <div className=' flex justify-center items-center'>
          <div className='space-y-20'>
            <h1 className='text-6xl font-serif font-bold text-white'>
              Work History
            </h1>
            <div className='flex flex-row space-x-5'>
              <div className='text-white'>
                {work.map((item, index) => (
                  <WorkCard key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
