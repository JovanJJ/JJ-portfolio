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
            { rootMargin: "-10px" }
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
                <section className="page-break mt-20  border-t border-white/10 flex justify-center flex-col">
                    <div className="mx-auto w-fit text-center text-4xl font-bold mt-20">Technologies & Technical Skills</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-2xl mx-auto gap-8 justify-items-center items-center p-4 mt-10">                  
                        <div className="w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                            <Image src={js} alt="JavaScript" className="w-16 h-16" />
                            <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">JavaScript</span>
                        </div>
                        <div className="w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                            <Image src="/html.svg" alt="html" width={16} height={16} className="w-16 h-16" />
                            <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">HTML</span>
                        </div>
                        <div className="w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                            <Image src="/css.svg" alt="css" width={16} height={16} className="w-16 h-16" />
                            <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">CSS</span>
                        </div>



                        <div className="w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                            <Image src={react} alt="React.js" className="w-16 h-16 rounded-lg" />
                            <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">React.js</span>
                        </div>
                        <div className="w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                            <Image src={next} alt="Next.js" className="w-16 h-16 rounded-lg" />
                            <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">Next.js</span>
                        </div>
                        <div className="w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                            <Image src={tailwind} alt="Tailwind CSS" className="w-16 h-16 rounded-lg" />
                            <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">Tailwind CSS</span>
                        </div>



                        <div className="w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                            <Image src="/postgresql.svg" width={16} height={16} alt="postgresql.svg" className="w-16 h-16 rounded-lg bg-white" />
                            <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">Postgresql</span>
                        </div>
                        <div className="w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                            <Image src={mongodb} alt="Tailwind CSS" className="w-16 h-16 rounded-lg" />
                            <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">MongoDB</span>
                        </div>
                        <div className="w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                            <Image src={git} alt="Next.js" className="w-16 h-16 rounded-lg bg-white" />
                            <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">Git</span>
                        </div>
                        <div className="w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                            <Image src={npm} alt="React.js" className="w-16 h-16 rounded-lg" />
                            <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">npm/pnpm</span>
                        </div>
                        <div className="w-28 group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                            <Image src={vercel} alt="Tailwind CSS" className="w-16 h-16 rounded-lg" />
                            <span className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">Vercel</span>
                        </div>

                    </div>
                </section>
            </div>

        </div>

    );
}