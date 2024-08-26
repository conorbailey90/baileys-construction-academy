import styles from './Navbar.module.css';
import Link from "next/link"

const links = [
    {
        name: 'Home',
        href: '/#hero'
    },
    {
        name: 'About',
        href: '/#about'
    },
    {
        name: 'Courses',
        href: '/#courses'
    },
    {
        name: 'Contact',
        href: '/#footer'
    },
]

const Navbar = () => {
  return (
    <div className="fixed top-[0] l-0 z-10 flex justify-center w-[100%] h-[60px] bg-[#161616c4] backdrop-blur md:top-[40px] md:h-[80px]">
        <div className="grid grid-cols-12 w-[95%] max-w-[1880px]">
            <h6 style={{fontFamily: 'montserrat', fontWeight: 'bold', letterSpacing: '-.05em'}} className="flex col-span-12 items-center uppercase md:col-span-6">Bailey&#39;s Bricklaying & Plastering</h6>
            <ul className=" hidden md:flex col-span-6 items-center">
                {links.map(link => (
                    <li key={link.name} className="mr-4">
                        <Link className='font-semibold hover:text-[rgb(252,186,3)]' href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>

     
    </div>
  )
}

export default Navbar