import React from 'react';

const LeftIndices = () => {
  return (
    <div className='fixed h-screen text-white justify-center items-center flex flex-col bottom-0 left-20'>
      <div className='-rotate-90 pl-2'>3</div>
      <div className='h-40 w-[2px] bg-zinc-600 rounded-lg items-end flex'>
        <div className='h-10 w-[2px] bg-white' />
      </div>
      <div className='-rotate-90 pr-2'>0</div>
    </div>
  );
};

export default LeftIndices;
