import IntroComponent from './components/intro/IntroComponent';
import NavbarComponent from './components/nav/NavbarComponent';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { PiGithubLogoFill } from 'react-icons/pi';
import { FaFacebookF } from 'react-icons/fa';

function App() {
  return (
    <div className=''>
      <div className='absolute h-screen justify-center items-center flex flex-col bottom-0 left-20'>
        <div className='-rotate-90 pl-2'>3</div>
        <div className='h-40 w-[1.5px] bg-gray-400 rounded-lg'></div>
        <div className='-rotate-90 pr-2'>0</div>
      </div>
      <div className='absolute h-screen justify-center items-center flex flex-col bottom-0 right-20'>
        <div className='p-4 bg-black shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
          <FaLinkedinIn size={22} color='white' />
        </div>
        <div className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
          <PiGithubLogoFill size={26} />
        </div>
        <div className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
          <FaInstagram size={22} />
        </div>
        <div className='p-4 bg-white shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300'>
          <FaFacebookF size={22} />
        </div>
      </div>
      <NavbarComponent />
      <IntroComponent />
    </div>
  );
}

export default App;
