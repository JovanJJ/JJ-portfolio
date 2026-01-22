import Image from "next/image";
import jj from "@/public/jj.jpg";

export default function Hero() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex justify-center lg:justify-end order-1 lg:order-1">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-2 border-green-500/30 p-2">
                        <Image
                            src={jj}
                            alt="Jovan Jovanovic"
                            className="rounded-full w-full h-full object-cover ring-2 ring-green-500/50"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 order-2 lg:order-2 text-center lg:text-left">
                <h1 className="space-y-4">
                    <div className="text-5xl lg:text-7xl font-bold">
                        Hi, I&apos;m
                    </div>
                    <div className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                        Jovan Jovanovic
                    </div>
                </h1>

                <div className="flex flex-col gap-5 text-gray-300 w-full">
                    <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                        I&apos;m a <span className="text-green-400 font-semibold">Full-Stack Web Developer</span> from Jagodina. In January 2025 I started learning — web development. I use all my free time to learn and improve.
                    </p>
                    <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                        It may seem that the time for learning is short but I started with frontend development, and once I was able to create clean layouts and make them interactive, I began dig deeper into frameworks and backend development. During my learning process, I built my first projects, which I believe can be useful for many people.
                    </p>
                    <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                        I continue to use all my free time to code and improve both my frontend and backend skills. Nice to meet you, and I’m looking forward to building ideas and projects together.
                    </p>
                </div>

                <div className="no-print flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                    <a href="#projects" className="group relative px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105">
                        <span className="relative z-10">View My Projects</span>
                    </a>
                    <a href="/CV.pdf" download className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-green-500/50 transition-all duration-300">
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );


}