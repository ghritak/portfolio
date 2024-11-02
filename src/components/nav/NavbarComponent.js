import React from 'react';
import NavbarButton from './NavbarButton';
import { scrollToSection } from '../../utils/scroll';

const NavbarComponent = () => {
  return (
    <div className='fixed hidden md:block -top-4 sm:pt-10 rounded-bl-custom rounded-br-custom z-50 backdrop-blur-sm '>
      <header className='flex justify-center items-center w-screen'>
        <div className='flex flex-row justify-around w-full max-w-2xl bg-zinc-800 rounded-full py-4'>
          <NavbarButton onClick={() => scrollToSection('home')}>
            Home
          </NavbarButton>
          <NavbarButton onClick={() => scrollToSection('about')}>
            About
          </NavbarButton>
          <NavbarButton onClick={() => scrollToSection('projects')}>
            Projects
          </NavbarButton>
          <NavbarButton onClick={() => scrollToSection('contact')}>
            Contact
          </NavbarButton>
        </div>
      </header>
    </div>
  );
};

export default NavbarComponent;
