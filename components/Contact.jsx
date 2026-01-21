import Image from "next/image";
import gmail from "../public/gmail1.svg";
import github from "../public/github.svg";
import linkedin from "../public/linkedin.svg";

export default function Contact() {
    return (
        <section>
            <div className="relative w-fit mx-auto mt-20 pb-5 font-bold">
                <h3 className="text-2xl lg:text-4xl">Contact me</h3>
            </div>
            <div className="mt-10 pt-5 border-t w-full border-white/10">
                <div className="flex flex-col sm:flex-row w-full items-center md:justify-center gap-15 mt-12">
                    <a href={"https://mail.google.com/"} target="_blanc" rel="noopener noreferrer" className="flex flex-col items-center gap-2 w-[170] group">
                        <Image src={gmail} alt="img" className="w-25 h-25 bg-gray-300 border-2 rounded-md group-hover:scale-105 transition" />
                        <span className="text-[18px]">jovanjj99@gmail.com</span>
                    </a>
                    <a href={"https://github.com/JovanJJ"} target="_blanc" rel="noopener noreferrer" className="flex flex-col items-center gap-2 w-[170] group">
                        <Image src={github} alt="img" className="w-25 h-25 bg-gray-300 rounded-md group-hover:scale-105 transition" />
                        <span className="text-[18px]">Github</span>
                    </a>

                    <a href="https://linkedin.com/in/jovan-jovanovic-456b2439a/" target="_blanc" rel="noopener noreferrer" className="flex flex-col items-center gap-2 w-[170] group">
                        <Image src={linkedin} alt="img" className="w-25 h-25 bg-gray-300 rounded-md group-hover:scale-105 transition" />
                        <span className="text-[18px]">Linkedin</span>
                    </a>
                </div>
            </div>
        </section>
    );
}