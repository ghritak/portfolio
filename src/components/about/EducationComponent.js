import React from 'react';
import { education } from '../constants/education';
import EducationCard from './EducationCard';

const EducationComponent = () => {
  return (
    <div className='mx-56 flex relative px-20'>
      <div className='flex flex-row min-h-screen space-x-20'>
        <div className=' flex justify-center items-center'>
          <div className='space-y-20'>
            <h1 className='text-6xl font-serif font-bold text-white'>
              Education
            </h1>
            <div className='text-white'>
              {education.map((item, index) => (
                <EducationCard item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
