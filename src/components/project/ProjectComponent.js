import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './constant';

const ProjectComponent = () => {
  return (
    <section className='mx-56 flex relative px-20 py-28' id='projects'>
      <div className='flex flex-row min-h-screen space-x-20'>
        <div className=' flex justify-center items-center'>
          <div className='space-y-20'>
            <h1 className='text-6xl font-serif font-bold text-white'>
              Projects
            </h1>
            <div className='flex flex-row space-x-5'>
              <div className=' text-white space-y-4'>
                {projects.map((item, index) => (
                  <ProjectCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
