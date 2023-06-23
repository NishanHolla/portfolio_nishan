import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import logo from "../public/mylogo.png"
import Image from "next/image";

const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Skills', link: '#skills' },
  { name: 'Experience', link: '#exp' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

const Navbar = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="py-10 ease-in-out 0.3s  mb-12 lg:flex justify-between dark:text-gray-900 lg:py-4 lg:px-12">
      <a href='#'><div className="hover:animate-spin lg:flex-grow h-20 w-20 block mt-2 lg:inline-block lg:mt-0  py-2 rounded  mr-2 text-left fixed"><button><Image src={logo} className="scale-100" /></button></div></a>
      <div className='text-md text-center font-bold text-white lg:flex-grow lg:mr-20 lg:mt-5'>
        <ul className="  text-right ml-20 justify-center items-center h-16">
          {navItems.map((item) => (
            <li key={item.link} className="block  lg:inline-block hover:text-white px-4 py-2 rounded hover:bg-blue-900 lg:mr-2">
              <Link href={`/${item.link}`}>
                <a
                  className={`${activeSection === item.link ? 'text-yellow-500' : ''
                    }`}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex items-center">

        <li>
          <a
            className="bg-gradient-to-r from-blue-900 text- to-teal-500 text-white  px-4 py-2 border-none rounded-md ml-20"
            href="NishanHolla_Resume.pdf" download="NishanHolla_Resume.pdf"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
