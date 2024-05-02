import React from 'react';
import wanderway from '../../assets/project/wanderway.png';

const ProjectCard = () => {
  return (
    <div className='flex flex-row-reverse space-x-8 max-w-6xl'>
      <div className='w-60'>
        <img src={wanderway} alt='wander way' />
      </div>
      <div className='space-y-3'>
        <h1 className='font-bold text-3xl'>
          Wander Way - A Travel management System
        </h1>
        <p className='text-lg'>
          Tech Stack : Next Js, Tailwind CSS, Python, Django, SQLite
        </p>
        <p>
          It is a travel booking management system to manage accommodation
          bookings, vehicle bookings etc. It's built using Next.js and Tailwind
          CSS for the frontend, and Python Django for the backend.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
