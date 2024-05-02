import AboutComponent from './components/about/AboutComponent';
import IntroComponent from './components/home/IntroComponent';
import NavbarComponent from './components/nav/NavbarComponent';

import LeftIndices from './components/side/LeftIndices';
import RightLinks from './components/side/RightLinks';

const App = () => {
  return (
    <div className='bg-zinc-800'>
      <LeftIndices />
      <RightLinks />
      <NavbarComponent />
      <IntroComponent />
      <AboutComponent />
    </div>
  );
};

export default App;
