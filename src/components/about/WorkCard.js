import React from 'react';
import LeftIndicator from './LeftIndicator';
import OrgLine from './OrgLine';
import { GoDotFill } from 'react-icons/go';

const WorkCard = ({ item, isLine }) => {
  return (
    <div className='flex flex-row'>
      <LeftIndicator height={item.lineheight} isLine={isLine} />
      <div className='space-y-1 md:space-y-3 mb-4'>
        <h1 className='text-lg md:text-4xl font-bold font-serif text-slate-200'>
          {item.role}
        </h1>
        <OrgLine name={item.company} year={item.period} />
        <div className='space-y-1'>
          {item.description.map((item, index) => (
            <div key={index} className='flex flex-row items-start'>
              <div className='mt-1 mr-1'>
                <GoDotFill color='white' className='md:text-xl' />
              </div>
              <p className='text-sm md:text-base leading-5 md:leading-7'>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
