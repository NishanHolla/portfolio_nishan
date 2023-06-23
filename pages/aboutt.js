import Image from "next/image";
import About from "../public/about.jpg"
import { useEffect } from 'react';
import AOS from 'aos';



export default function Aboutt() {

  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div data-aos="slide-up" className="sm:text-lg md:text-2xl">
      <h3 className="fontt  animate-pulse text-7xl py-1 dark:text-teal-900 text-center">ABOUT ME</h3><br /><br /><br /><br /><br />
      <div data-aos="slide-up" className="grid lg:grid-cols-3 gap-5">
      <div data-aos="slide-up" className="from-teal-500 lg:mx-10">
          <Image src={About}/>
        </div >
        <p className=" text-md pt-100 md:text-2xl leading-8 text-gray-800 dark:text-gray-200 ml-10">
          I&apos;m currently pursuing B.Tech in CSE from PES University, Bangalore.<br /><br />
          Highly motivated and dedicated student with strong problem-solving and analytical skills<br /><br />
          A quick learner with
          excellent teamwork skills
        </p>
        
      </div>
    </div>
  );
}