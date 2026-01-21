"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import js from "@/public/java-script.svg";
import next from "@/public/next.png";
import react from "@/public/react.svg";
import tailwind from "@/public/tailwind.png";
import git from "../public/git.svg";
import npm from "../public/npm.svg";
import vercel from "../public/vercel.svg";
import mongodb from "../public/mongodb.png";

export default function Stacks() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('Intersection Ratio:', entry.intersectionRatio); // Debug

                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { rootMargin: "-100px" }
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
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0'
                    }
      `}
            >
                <div className="space-y-8 p-4">

                    <div className="flex flex-col md:flex-row items-start md:items-start gap-6">
                        <h3 className="text-xl font-semibold text-gray-400 md:w-32">Language:</h3>
                        <div className="flex gap-6">
                            <div className="min-w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                                <Image src={js} alt="JavaScript" className="w-16 h-16" />
                                <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">JavaScript</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-start gap-6">
                        <h3 className="text-xl font-semibold text-gray-400 md:w-32">Frameworks:</h3>
                        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                            <div className="min-w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                                <Image src={next} alt="Next.js" className="w-16 h-16 rounded-lg" />
                                <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">Next.js</span>
                            </div>
                            <div className="min-w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                                <Image src={react} alt="React.js" className="w-16 h-16 rounded-lg" />
                                <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">React.js</span>
                            </div>
                            <div className="min-w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                                <Image src={tailwind} alt="Tailwind CSS" className="w-16 h-16 rounded-lg" />
                                <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">Tailwind CSS</span>
                            </div>
                        </div>
                    </div>

                     <div className="flex flex-col md:flex-row items-start md:items-start gap-6">
                        <h3 className="text-xl font-semibold text-gray-400 md:w-32">Development Tools:</h3>
                        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                            <div className="min-w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                                <Image src={git} alt="Next.js" className="w-16 h-16 rounded-lg bg-white" />
                                <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">Git</span>
                            </div>
                            <div className="min-w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                                <Image src={npm} alt="React.js" className="w-16 h-16 rounded-lg" />
                                <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">npm/pnpm</span>
                            </div>
                            <div className="min-w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                                <Image src={vercel} alt="Tailwind CSS" className="w-16 h-16 rounded-lg" />
                                <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">Vercel</span>
                            </div>
                            <div className="min-w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                                <Image src={mongodb} alt="Tailwind CSS" className="w-16 h-16 rounded-lg" />
                                <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}