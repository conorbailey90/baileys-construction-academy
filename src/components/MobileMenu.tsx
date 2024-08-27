// components/MobileMenu.tsx
'use client'

import { useState } from 'react';
import Link from 'next/link';

const links = [
    {
        name: 'Home',
        href: '/#hero'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Courses',
        href: '/#courses'
    },
    {
        name: 'Contact',
        href: '/contact'
    },
]


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu Button */}
      <div onClick={toggleMenu} className='fixed cursor-pointer right-[5vw] top-[22px] w-[30px] h-[16px] z-10 flex flex-col justify-between md:hidden'>
        <span className='w-[100%] h-[2px] bg-[white]'></span>
        <span className='w-[100%] h-[2px] bg-[white]'></span>
        <span className='w-[100%] h-[2px] bg-[white]'></span>
     
      </div>

      {/* Mobile Menu */}
      <nav
        style={{
          display: 'flex',
          position: 'fixed',
          top: '0',
          left: '-100%',
          backgroundColor: '#161616', // Dark background for the menu
          padding: '100px 5vw',
          width: '100%',
          height: '100%',
          zIndex: 100,
          transform: isOpen ? `translateX(100%)` : 'translateX(0)',
          transition: '.5s'
        }}
      >
        <div onClick={toggleMenu}  className='absolute cursor-pointer right-[5vw] top-[22px] w-[30px] h-[16px] flex flex-col items-center justify-center'>
            <span className='absolute w-[100%] h-[2px] bg-[white] rotate-[-45deg]'></span>
            <span className='absolute w-[100%] h-[2px] bg-[white] rotate-[45deg]'></span>
        </div>

        <ul className='w-[100%]'>
            {links.map((link, idx) => (
                  <li onClick={toggleMenu}  style={{borderBottom: '1px solid rgba(255, 255, 255, 0.51)'}} className='w-[100%]' key={idx}>
                    <Link href={link.href}>
                        <span className='inline-block cursor-pointer font-bold text-[1.44rem] py-[1rem] w-[100%]'> 
                            {link.name}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>

      </nav>
    </div>
  );
};

export default MobileMenu;
