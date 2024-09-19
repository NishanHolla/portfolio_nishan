import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className="py-10 bg-gradient-to-r from-gray-800 to-black">
            {/* Title */}
            <h3 data-aos="fade-up" className="text-7xl font-extrabold text-teal-400 text-center animate-pulse mb-10">SKILLS</h3>

            {/* Skill Categories */}
            <div className="grid lg:grid-cols-2 gap-10 px-10">

                {/* Frontend Skills */}
                <div>
                    <h4 data-aos="fade-right" className="text-4xl font-bold text-center text-indigo-300 mb-6">Frontend Development</h4>
                    <div className="grid grid-cols-3 gap-4 text-center text-white">
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Next JS</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Three JS</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>React JS</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Redux</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Tailwind CSS</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Flask</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>HTML</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>CSS</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>JavaScript</p></div>
                    </div>
                </div>

                {/* Backend Skills */}
                <div>
                    <h4 data-aos="fade-left" className="text-4xl font-bold text-center text-green-300 mb-6">Backend Development</h4>
                    <div className="grid grid-cols-3 gap-4 text-center text-white">
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>TypeScript</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>MongoDB</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>RESTful APIs</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>MySQL</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Node JS</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Express JS</p></div>
                    </div>
                </div>

                {/* App Development */}
                <div>
                    <h4 data-aos="fade-right" className="text-4xl font-bold text-center text-pink-300 mb-6">App Development</h4>
                    <div className="grid grid-cols-3 gap-4 text-center text-white">
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>React Native</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Flutter</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>TypeScript</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Dart</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Firebase</p></div>
                    </div>
                </div>

                {/* AI & ML Skills */}
                <div>
                    <h4 data-aos="fade-left" className="text-4xl font-bold text-center text-purple-300 mb-6">AI & ML</h4>
                    <div className="grid grid-cols-3 gap-4 text-center text-white">
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>LLMs</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Vector Embeddings</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>LangChain</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Scikit Learn</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>TensorFlow</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Neural Nets</p></div>
                    </div>
                </div>

                {/* Big Data */}
                <div>
                    <h4 data-aos="fade-right" className="text-4xl font-bold text-center text-yellow-300 mb-6">Big Data</h4>
                    <div className="grid grid-cols-3 gap-4 text-center text-white">
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Spark Streaming</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Kafka</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>MapReduce</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Hadoop</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Zookeeper</p></div>
                    </div>
                </div>

                {/* DevOps */}
                <div>
                    <h4 data-aos="fade-left" className="text-4xl font-bold text-center text-red-300 mb-6">DevOps</h4>
                    <div className="grid grid-cols-3 gap-4 text-center text-white">
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Docker</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Kubernetes</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Jenkins</p></div>
                        <div className="transform transition duration-500 hover:scale-110 animate-bounce"><p>Git</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
