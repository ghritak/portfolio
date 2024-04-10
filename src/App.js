import IntroComponent from './components/intro/IntroComponent';
import NavbarComponent from './components/nav/NavbarComponent';

import LeftIndices from './components/side/LeftIndices';
import RightLinks from './components/side/RightLinks';

const App = () => {
  return (
    <div className=''>
      <LeftIndices />
      <RightLinks />
      <NavbarComponent />
      <IntroComponent />
    </div>
  );
};

export default App;
