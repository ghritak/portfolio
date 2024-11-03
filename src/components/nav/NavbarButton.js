const NavbarButton = ({ children, onClick }) => {
  return (
    <div
      className='cursor-pointer font-semibold text-sm md:text-lg px-3 md:px-5 py-1 rounded-full transition-all duration-300 text-white hover:bg-white hover:text-black'
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default NavbarButton;
