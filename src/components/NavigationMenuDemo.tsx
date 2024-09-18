'use client'
import Link from 'next/link'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useSession, signOut } from "next-auth/react";
import { CircleUser } from 'lucide-react';
import { redirect } from 'next/navigation';

const links = [
  {
      name: 'Home',
      href: '/#hero'
  },
  {
      name: 'About',
      href: '/about',
      // subMenu: [
  
      //   {
      //     name: 'Overview',
      //     href: '/about'
      //   },
      //   {
      //     name: 'Meet the Team',
      //     href: '/team'
      //   },
       
      // ]
  },
  {
      name: 'Courses',
      href: '/#courses',
      subMenu: [
        {
          name: 'Bricklaying',
          href: '/bricklaying'
        },
        {
          name: 'Plastering',
          href: '/plastering'
        },
      ]
  },
  {
      name: 'Contact',
      href: '/contact'
  },
  {
    name: 'Enroll',
    href: '/enroll'
},
]

const ProfileLink = () => {

  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  }

  const handleMouseLeave = () => {
    setActive(false);
  }

  const handleSignOut = () => {
    signOut(); // Trigger the sign-out function
    redirect('/')
  }
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='absolute flex items-center right-0'>
      <Link href={'/profile'}>
        <div className="group inline-block cursor-pointer">
          <CircleUser 
            className="stroke-[white] m-[1rem] group-hover:stroke-[rgb(252,186,3)] transition-colors duration-200"
            size={30} 
          />
        </div>
      </Link>
      {active &&  <div className='absolute flex justify-center w-[200px] right-[0%] top-[100%] rounded-[5px] bg-[#161616] p-[.5rem] border border-[rgb(252,186,3)]' >
            <ul>
                <li className='m-[.5rem] font-semibold hover:text-[rgb(252,186,3)] text-center'>
                  <Link href={`/profile`}>Profile</Link>
                </li>
                <li onClick={handleSignOut} className='m-[.5rem] font-semibold hover:text-[rgb(252,186,3)] cursor-pointer'>
                  Sign Out
                </li>
            </ul>
        </div>}
        
    </div>
    
  
  )
}


const NavLink = ({name, href, subMenu} : {name: string, href: string, subMenu: {name: string, href: string}[] | []}) => {
  // const logStyle = 'background-color: black; color: white; font-style: bold; border: 2px solid white; font-size: 1em;'
  // console.log("%cDeveloped by Conor Bailey - www.conorbailey.dev", logStyle);

  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  }

  const handleMouseLeave = () => {
    setActive(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={name} className="relative p-[1rem]">
      <div className='flex'>
        <Link className={`transition-[.5s] font-semibold hover:text-[rgb(252,186,3)] ${active ? 'text-[rgb(252,186,3)]' : 'text-[white]'}`} href={href}>{name}</Link>
        {subMenu.length > 0 && <ChevronDown className={`${active ? 'rotate-0' : 'rotate-[-90deg]'} ${active ? 'stroke-[rgb(252,186,3)]' : 'stroke-[white]'} transition-[.5s]`} />}
      </div>
 
      {subMenu.length > 0 && active && 
        <div className='absolute flex justify-center w-[200%] left-[-50%] top-[100%] rounded-[5px] bg-[#161616] p-[.5rem] border border-[rgb(252,186,3)]' >
            <ul>
              {subMenu.map(link => (
                <li key={link.name} className='m-[.5rem]'>
                   <Link className='font-semibold hover:text-[rgb(252,186,3)]' href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
            
        </div>
      }
    </li>
  )
}

const NavigationMenuDemo = () => {
  const { data: session } = useSession();
  return (
    <div style={{borderBottom: '1px solid rgb(252,186,3)'}} className="fixed top-[0] l-0 z-[100] flex justify-center w-[100%] h-[60px] bg-[#161616c4] backdrop-blur md:top-[40px] md:h-[80px]">
      <div className="relative grid grid-cols-12 w-[95%] max-w-[1880px]">
          <h6 style={{fontFamily: 'montserrat', fontWeight: 'bold', letterSpacing: '-.05em'}} className="flex col-span-12 items-center uppercase md:col-span-4 text-sm text-center select-none">BRICKLAYING & PLASTERING <br />COURSES - ESSEX </h6>
          <div className=" hidden md:flex col-start-5 col-span-6 items-center">
            <ul className='flex'>
                {links.map(link => (
                    <NavLink key={link.name} name={link.name} href={link.href} subMenu={link.subMenu || []} />
                ))}
                
            </ul>
            {session?.user && 
             <ProfileLink />
            }

            {!session && 
              <Link className='absolute font-semibold flex items-center right-0 hover:text-[rgb(252,186,3)]' href={'/auth/login'}>
                Sign In
              </Link>
            }   
          </div>
          
      </div>
    </div>
  )
}

export default NavigationMenuDemo