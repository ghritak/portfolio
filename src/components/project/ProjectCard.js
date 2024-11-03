import React from 'react';

const ProjectCard = ({ item, index }) => {
  const handleClick = () => {
    // window.open(item?.link, '_blank');
  };

  return (
    <div data-aos='fade-up'>
      <div
        onClick={handleClick}
        className={`md:flex ${
          index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
        } cursor-pointer md:hover:scale-105 transition-all duration-300 hover:bg-zinc-700 space-y-2 md:space-y-0 p-3 md:p-6 rounded-lg`}
      >
        <div className={`${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
          <img
            src={item?.img}
            alt='wander way'
            className='md:h-44 w-full object-contain rounded-md'
          />
        </div>
        <div className='space-y-3'>
          <h1 className='font-bold text-xl md:text-3xl'>{item?.name}</h1>
          <div className='flex flex-wrap flex-row gap-2 items-center'>
            {item?.stack.map((stack, index) => (
              <div key={index} className='bg-zinc-600 px-2 py-1 rounded-md'>
                <p className='text-sm'>{stack}</p>
              </div>
            ))}
          </div>
          <p className=' max-w-4xl'>{item?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
