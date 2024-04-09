import React from 'react';

const NavbarButton = ({ children }) => {
  return (
    <div className='cursor-pointer font-semibold text-lg px-5 py-1 rounded-full transition-all duration-300 hover:bg-black hover:text-white'>
      {children}
    </div>
  );
};

export default NavbarButton;
