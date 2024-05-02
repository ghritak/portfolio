import React from 'react';

const NavbarButton = ({ children }) => {
  return (
    <div className='cursor-pointer font-semibold text-lg px-5 py-1 rounded-full transition-all duration-300 text-white hover:bg-white hover:text-black'>
      {children}
    </div>
  );
};

export default NavbarButton;
