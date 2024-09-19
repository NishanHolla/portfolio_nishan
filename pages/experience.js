import { useEffect } from "react";
import AOS from 'aos';

export default function Experience() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      <h3 data-aos="slide-up" className="animate-pulse text-5xl ml-20 dark:text-teal-600 md:text-center">
        EXPERIENCE AND QUALIFICATIONS
      </h3><br /><br /><br /><br />

      <div data-aos="slide-up" className="grid lg:grid-cols-2 md:grid-cols-2 gap-11 lg:pr-20 mx-20">
        {/* Education */}
        <div className="from-teal-500 w-50 h-30 hover:bg-gray-900">
          <h4 className="fontt text-teal-500 text-center text-4xl">MY EDUCATION</h4><br />
          {/* 3 */}
          <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
            <h6 className="mr-10">☁️<span className="ml-10 text-center"> B-TECH, CSE</span></h6>
            <p className="ml-10">PES UNIVERSITY,</p>
            <p className="text-center lg:mr-16">Bangalore<br />2021-2025<br />CGPA: 7.65</p>
          </div><br />
          {/* 2 */}
          <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
            <h6 className="mr-10">☁️<span className="ml-10 text-center">12TH GRADE</span></h6>
            <p className="ml-14">Sharada PU College</p>
            <p className="text-center lg:mr-16">Mangalore<br />2019-2021<br />Percentage: 95%</p>
          </div><br />
          {/* 1 */}
          <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
            <h6 className="mr-10">☁️<span className="ml-10 text-center">10TH GRADE</span></h6>
            <p className="ml-14">Sharada Vidyalaya</p>
            <p className="text-center lg:mr-16">Mangalore<br />2007-2019<br />Percentage: 91.4%</p>
          </div>
        </div>

        {/* Experience */}
        <div className="from-teal-500 w-50 h-30 hover:bg-gray-900">
          <h4 className="fontt text-teal-500 text-center text-3xl">MY EXPERIENCE</h4><br />
          {/* CivicCraft Studio */}
          <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
            <h6 className="mr-10">☁️<span className="lg:ml-10 ml-16 text-center">CivicCraft Studio</span></h6>
            <p className="ml-16">Software Development Intern</p>
            <p className="text-center">Jul&apos;24 - Present</p>
          </div><br /><br />
          {/* CoDMAV Research Center */}
          <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
            <h6 className="mr-10">☁️<span className="lg:ml-10 ml-16 text-center">Codmav Research Center</span></h6>
            <p className="ml-16">Research Intern</p>
            <p className="text-center">Jun&apos;24 - Jul&apos;24</p>
          </div><br /><br />
          {/* LetsEndorse Mobile App */}
          <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
            <h6 className="mr-10">☁️<span className="lg:ml-10 ml-16 text-center">LetsEndorse Mobile App</span></h6>
            <p className="ml-16">Mobile App Intern</p>
            <p className="text-center">Feb&apos;24 - Mar&apos;24</p>
          </div>
        </div>
      </div>

      {/* Centered Awards and Achievements */}
      <div className="from-teal-500 w-50 h-30 hover:bg-gray-900 mx-auto mt-10 text-center">
        <h4 className="fontt text-teal-500 text-center text-3xl">AWARDS AND ACHIEVEMENTS</h4><br />
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <p>🥇 1st Place, inGenius 12.0 Hackathon - InGenius Community<br />
            Worked on improving supply chain and information retrieval for medicine tracking (2024)</p><br />
          <p>🥇 1st Place, Kalpana Hack For Humanity - IEEE Society<br />
            Developed a Mental Health Wellbeing App using Embeddings and Langchain (2024)</p><br />
          <p>🏅 Top 10, Kodikon 3.0 National Level Hackathon - Club Embrione<br />
            Researched and built AR tech using Machine Learning (2023)</p><br />
          <p>🏅 Ranked #15 in Open Source Contributions Runner Up - ACM Hacktober Fest IEEE Society<br />
            Closed multiple issues in open source projects (2023)</p>
        </div>
      </div>
    </div>
  );
}
