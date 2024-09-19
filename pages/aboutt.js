import Image from "next/image";
import About from "../public/about.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Aboutt() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black py-16">
      <h3
        data-aos="fade-up"
        className="text-7xl font-extrabold text-center text-teal-400 animate-pulse"
      >
        ABOUT ME
      </h3>

      <div
        data-aos="fade-up"
        className="grid lg:grid-cols-3 gap-10 py-16 px-10 items-center"
      >
        {/* Image Section */}
        <div data-aos="zoom-in" className="flex justify-center">
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
            <Image
              src={About}
              height={800}
              width={600}
              className="object-cover"
              alt="About Me Image"
            />
          </div>
        </div>

        {/* Text Section */}
        <div
          data-aos="fade-left"
          className="lg:col-span-2 text-lg md:text-2xl leading-8 text-gray-200"
        >
          <p className="mb-6">
            I&apos;m currently pursuing a B.Tech in Computer Science and
            Engineering from PES University, Bangalore.
          </p>
          <p className="mb-6">
            As a highly motivated and dedicated student with strong
            problem-solving and analytical abilities, I am always eager to learn
            and grow.
          </p>
          <p>
            I thrive in collaborative environments, bringing excellent teamwork
            and communication skills to every project I take on. Let’s connect
            and make something awesome together!
          </p>
        </div>
      </div>
    </div>
  );
}
