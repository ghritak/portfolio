import React from 'react';
import LeftIndicator from './LeftIndicator';
import OrgLine from './OrgLine';
import { GoDotFill } from 'react-icons/go';

const WorkCard = ({ item }) => {
  return (
    <div className='flex flex-row'>
      <LeftIndicator size={item.lineheight} />
      <div className='space-y-3'>
        <h1 className='text-4xl font-bold font-serif text-slate-200'>
          {item.role}
        </h1>
        <OrgLine name={item.company} year={item.period} />
        <div className='space-y-1'>
          {item.description.map((item, index) => (
            <div key={index} className='flex flex-row items-start'>
              <div className='mt-1 mr-1'>
                <GoDotFill color='white' size={20} />
              </div>
              <p className='leading-7'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
