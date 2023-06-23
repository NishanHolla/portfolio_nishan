import data from './data.json';
import { useState, useEffect } from "react";
import AOS from 'aos'


export default function Project(props) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(data.projects);
    }, []);

    useEffect(() => {
        AOS.init({
        });
    }, []);
    return (
        <div className=" grid lg:grid-cols-3 gap-5 md:grid-cols-2  text-center">
            {projects.map((project) => (
                <div key={project.id}>

                    <div data-aos="slide-up" className="textWithBlurredBg">
                        <img className="pro w-[100%] h-auto" src={project.image} alt={project.title} /><br />
                        <p className="text-lg text-teal-600 mb-[20px]">{project.description}</p>
                    </div>
                    <a href={project.github}><h2 className="text-xl text-center underline text-teal-600 mb-10px ">{project.title}</h2></a><br />

                </div>
            ))}
        </div>
    );



}