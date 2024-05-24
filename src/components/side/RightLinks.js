import React from 'react';
import { links } from './constants';

const RightLinks = () => {
  return (
    <div className='fixed h-screen justify-end items-center flex flex-col bottom-0 right-20 z-20'>
      {links.map((item) => {
        return (
          <a href={item.url} target='blank'>
            <div
              className={`p-4 bg-${item.background} shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300`}
            >
              {item.icon}
            </div>
          </a>
        );
      })}
      <div className='w-[2px] bg-gray-300 rounded-lg h-1/3 mt-4' />
    </div>
  );
};

export default RightLinks;
