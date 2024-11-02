import React from 'react';
import IntroComponent from './IntroComponent';
import AboutComponent from '../about/AboutComponent';
import ProjectComponent from '../project/ProjectComponent';
import ContactComponent from '../contact/ContactComponent';

const MainComponent = () => {
  return (
    <div className='bg-zinc-800'>
      <div className='scroll-container'>
        <IntroComponent />
        <AboutComponent />
        <ProjectComponent />
        <ContactComponent />
      </div>
    </div>
  );
};

export default MainComponent;
