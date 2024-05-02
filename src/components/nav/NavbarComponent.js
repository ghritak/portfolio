import React from 'react';
import NavbarButton from './NavbarButton';

const NavbarComponent = () => {
  return (
    <div className='flex flex-row justify-center items-center py-6'>
      <div className='flex z-20 flex-row justify-around w-full max-w-3xl'>
        <NavbarButton>Home</NavbarButton>
        <NavbarButton>About</NavbarButton>
        <NavbarButton>Projects</NavbarButton>
        <NavbarButton>Contact</NavbarButton>
      </div>
    </div>
  );
};

export default NavbarComponent;
