import { useEffect } from "react";
import AOS from 'aos'

export default function Experience() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (<div><h3 data-aos="slide-up" className="animate-pulse text-5xl ml-20  dark:text-teal-600 md:text-center ">EXPERIENCE AND QUALIFICATIONS</h3><br /><br /><br /><br />
    <div data-aos="slide-up" className="grid lg:grid-cols-2 md:grid-cols-2 gap-11 lg:pr-20 mx-20">
      {/* Education */}
      <div className=" from-teal-500 w-50 h-30 hover:bg-gray-900">
        <h4 className="fontt  text-teal-500 text-center text-4xl">MY EDUCATION</h4><br />
        {/* 3 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className="  mr-10">☁️<span className="ml-10 text-center"> B-TECH,CSE</span></h6>
          <p className=" ml-10">PES UNIVERSITY,</p>
          <p className="text-center lg:mr-16">Bangalore<br />2021-2025<br />CGPA: 7.65</p>
        </div> <br />
        {/* 2 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className="  mr-10">☁️<span className="ml-10 text-center">12TH GRADE</span></h6>
          <p className=" ml-14">Sharada PU College</p>
          <p className="text-center lg:mr-16">Mangalore<br />2019-2021<br />Percentage: 95%</p>
        </div> <br />
        {/* 1 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className="  mr-10">☁️<span className="ml-10 text-center">10TH GRADE</span></h6>
          <p className=" ml-14">Sharada Vidyalaya</p>
          <p className="text-center lg:mr-16">Mangalore<br />2007-2019<br />Percentage: 91.4%</p>
        </div>
      </div >
      {/* Experience */}
      
      
      {/* <div className=" from-teal-500 w-50 h-30 hover:bg-gray-900">
        <h4 className="fontt text-teal-500 text-center text-4xl">MY EXPERIENCE</h4><br /> */}
        {/* 3 */}
        {/* <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className="  lg:mr-10">☁️<span className="ml-10 text-center">MANY MORE TO</span></h6>
          <h6 className="text-center">COME</h6>
        </div> <br /><br /> */}
        {/* 2 */}
        {/* <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className="  mr-10">☁️<span className="lg:ml-10 ml-2 text-center">WEB DEVELOPER</span></h6>
          <p className="text-center">HoPes PESURR</p>
          <p className="text-center lg:mr-10">Apr&apos;23-Present</p>
        </div> <br /><br /> */}
        {/* 1 */}
        
      {/* </div > */}


      {/* Responsibilities */}
      <div className=" from-teal-500 w-50 h-30 hover:bg-gray-900">
        <h4 className="fontt  text-teal-500 text-center text-3xl">MY RESPONSIBILITIES</h4><br />
        {/* 3 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className="  mr-10">☁️<span className="lg:ml-10 ml-16 text-center">Content Writer</span></h6>
          <h6 className="text-center">Content,Event Management</h6>
          <p className=" ml-16">SHUNYA PESUECC</p>
          <p className="text-center ">Oct&apos;22-Present</p>
        </div> <br /> <br />
        {/* 2 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className="  mr-10">☁️<span className="lg:ml-10 ml-16 text-center">Debate Team</span></h6>
          <p className=" ml-16">Sharada PU College</p>
          <p className="text-center ">Jan&apos;18-Jan&apos;21</p>
        </div> <br /> <br />
        {/* 1 */}
        <div data-aos="slide-up" className="text-2xl text-white hover:text-teal-500">
          <h6 className="  mr-10">☁️<span className="lg:ml-12 ml-2 text-center">Volleyball Player</span></h6>
          <p className=" lg:ml-24 ml-14">Sharada Vidyalaya</p>
          <p className="text-center ">Jan&apos;17-Jan&apos;18</p>
        </div>
      </div >
    </div></div>);
}