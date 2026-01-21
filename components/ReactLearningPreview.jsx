"use client";

import { useState, useEffect, useRef } from "react";
import masterhub from "../public/masterhub.png";
import Image from "next/image";
import reactLearning from "../public/react-learning.png";

export default function MasterHubPreview() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { rootMargin: "-180px" }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);
    return (
        <div className="overflow-hidden">
            <div
                ref={containerRef}
                className={`
        transition-all duration-1000 ease-out
        ${isVisible
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-20 opacity-0 lg:-translate-x-full'
                    }
      `}
            >
                <div className="mt-10  border-t w-full border-white/10">



                    <div id="projects" className="mt-10 w-full">
                        <h3 className="text-2xl font-bold mb-6 pl-4">Learning React</h3>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">


                            <div className="group w-full h-full flex p-4">
                                <a href={"https://react-learning-eight-sandy.vercel.app/"} target="_blank" rel="noopener noreferrer" className="relative w-full aspect-video rounded-lg overflow-hidden group-hover:scale-105 transition ">
                                    <Image src={reactLearning} alt="img" fill className="border-2 border-green-600 rounded-lg transition" />
                                </a>
                            </div>


                            <div className="flex flex-col gap-4">
                                <p className="text-gray-300 leading-relaxed pt-4 pl-4">
                                   Learning React – A hands-on, interactive website where users can learn both basic and advanced React features through live examples.
                                   </p>

                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}