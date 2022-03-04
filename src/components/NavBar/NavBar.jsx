import React from 'react';

const NavBar = () => {
  return (
    <nav className='bg-gray-500 '>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg: px-8'>
        <div class='relative flex items-center justify-between h-16'>
          <div class='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            Navbar
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
