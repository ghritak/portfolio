import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../constants/projects';
import Header from '../ui/Header';

const ProjectComponent = () => {
  return (
    <section
      className='md:mx-56 flex relative px-6 md:px-20 md:py-28'
      id='projects'
    >
      <div className='flex flex-row min-h-screen md:space-x-20'>
        <div className=' flex justify-center items-center'>
          <div className='space-y-10 md:space-y-20'>
            <Header title={'Projects'} />
            <div className='flex flex-row space-x-2 md:space-x-5'>
              <div className=' text-white space-y-1 md:space-y-4'>
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
