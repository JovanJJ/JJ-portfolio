"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function LocalRestaurant() {
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


                    <div className="mt-10 w-full">
                        <h3 className="text-2xl font-bold mb-6 pl-4">Local Restaurant — Modern Multi-language Restaurant Website</h3>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">


                            <div className="group w-full h-full flex p-4">
                                <a href={"#"} target="_blank" rel="noopener noreferrer" className="relative w-full aspect-video rounded-lg overflow-hidden group-hover:scale-105 transition ">
                                    <Image src="/restaurant.png" alt="Local Restaurant preview" fill className="border-2 border-green-600 rounded-lg transition" />
                                </a>
                            </div>


                            <div className="flex flex-col gap-4">
                                <p className="text-gray-300 leading-relaxed pt-4 pl-4">
                                    A modern restaurant website built to present menu items and business information in a clean, visually appealing way. The site supports two languages and provides a smooth user experience with fast navigation and responsive design across all devices.
                                </p>

                                <div className="mt-4 pl-4">
                                    <h4 className="text-lg font-semibold mb-3 text-green-400">Implementations:</h4>
                                    <ul className="grid grid-cols-1  gap-x-6 gap-y-2 text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-400">•</span>
                                            <span>Next js</span>
                                        </li>

                                        <li className="flex items-start gap-2">
                                            <span className="text-green-400">•</span>
                                            <span>Framer Motion</span>
                                        </li>

                                        <li className="flex items-start gap-2">
                                            <span className="text-green-400">•</span>
                                            <span>PostgreSQL</span>
                                        </li>

                                        <li className="flex items-start gap-2">
                                            <span className="text-green-400">•</span>
                                            <span>Tailwind CSS</span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
