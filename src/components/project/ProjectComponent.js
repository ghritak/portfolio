import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './constant';

const ProjectComponent = () => {
  return (
    <div className='mx-56 flex relative px-20'>
      <div className='flex flex-row h-screen space-x-20'>
        <div className=' flex justify-center items-center'>
          <div className='space-y-20'>
            <h1 className='text-6xl font-serif font-bold text-white'>
              Projects
            </h1>
            <div className='flex flex-row space-x-5'>
              <div className=' text-white space-y-4'>
                {projects.map((item, index) => (
                  <ProjectCard item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
