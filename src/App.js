import { useEffect } from 'react';
import AboutComponent from './components/about/AboutComponent';
import IntroComponent from './components/home/IntroComponent';
import NavbarComponent from './components/nav/NavbarComponent';
import ProjectComponent from './components/project/ProjectComponent';

import LeftIndices from './components/side/LeftIndices';
import RightLinks from './components/side/RightLinks';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='bg-zinc-800'>
      <LeftIndices />
      <RightLinks />
      <NavbarComponent />
      <IntroComponent />
      <AboutComponent />
      <ProjectComponent />
    </div>
  );
};

export default App;
