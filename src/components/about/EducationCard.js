import React from 'react';
import LeftIndicator from './LeftIndicator';
import OrgLine from './OrgLine';

const EducationCard = ({ item }) => {
  return (
    <div className='flex flex-row'>
      <LeftIndicator size={item.lineheight} />
      <div className='space-y-3'>
        <h1 className='text-4xl font-bold font-serif text-slate-200'>
          {item.degree}
        </h1>
        <h1 className='text-2xl font-semibold text-slate-300'>
          {item?.subject}
        </h1>
        <OrgLine name={item.institution} year={item.year} />
      </div>
    </div>
  );
};

export default EducationCard;
