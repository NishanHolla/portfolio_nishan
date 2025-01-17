import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/mylogo.png';

const navItems = [
  { name: 'Home', link: `${process.env.NEXT_PUBLIC_BASE_URL}/#home` },
  { name: 'About', link: `${process.env.NEXT_PUBLIC_BASE_URL}/#about` },
  { name: 'Skills', link: `${process.env.NEXT_PUBLIC_BASE_URL}/#skills` },
  { name: 'Experience', link: `${process.env.NEXT_PUBLIC_BASE_URL}/#exp` },
  { name: 'Projects', link: `${process.env.NEXT_PUBLIC_BASE_URL}/#projects` },
  { name: 'Contact', link: `${process.env.NEXT_PUBLIC_BASE_URL}/#contact` },
  { name: "Let's Collaborate", link: `${process.env.NEXT_PUBLIC_BASE_URL}/collaborate` }, // Updated new item
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 2 &&
            window.pageYOffset < sectionTop + sectionHeight) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on initial render
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="py-10 ease-in-out 0.3s mb-12 lg:flex justify-between dark:text-gray-900 lg:py-4 lg:px-12">
      <a href="#home">
        <div className="hover:animate-spin lg:flex-grow h-20 w-20 block mt-2 lg:inline-block lg:mt-0 py-2 rounded mr-2 text-left fixed">
          <button>
            <Image src={logo} className="scale-100" alt="Logo" />
          </button>
        </div>
      </a>
      <div className='text-md text-center font-bold text-white lg:flex-grow lg:mr-20 lg:mt-5'>
        <ul className="text-right ml-20 flex justify-center items-center h-16">
          {navItems.map((item) => (
            <li key={item.link} className="block lg:inline-block hover:text-white px-4 py-2 rounded hover:bg-blue-900 lg:mr-2">
              <a
                href={item.link}
                className={`${activeSection === item.link ? 'text-yellow-500' : ''}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex items-center">
        <li>
          <a
            className="bg-gradient-to-r from-blue-900 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-20"
            href="NishanHolla2025.pdf"
            download="NishanHolla_Resume.pdf"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
