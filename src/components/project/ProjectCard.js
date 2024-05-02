import React from 'react';
import wanderway from '../../assets/project/wanderway.png';

const ProjectCard = ({ item, index }) => {
  return (
    <div
      className={`flex ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      } cursor-pointer hover:scale-110 transition-all duration-300 hover:bg-zinc-700 p-6 rounded-lg`}
    >
      <div className={` ${index % 2 === 0 ? 'mr-10' : 'ml-10'}`}>
        <img src={wanderway} alt='wander way' className='w-60 h-44' />
      </div>
      <div className='space-y-3'>
        <h1 className='font-bold text-3xl'>{item?.name}</h1>
        <div className='flex flex-row items-center'>
          {item?.stack.map((stack) => (
            <div className='bg-zinc-600 px-2 py-1 mr-2 rounded-md'>
              <p>{stack}</p>
            </div>
          ))}
        </div>
        <p className='line-clamp-2 max-w-4xl'>{item?.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
