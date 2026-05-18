import Image from "next/image";
import ContactWithEmail from "./ContactWithEmail";

export default function Contact() {
    return (
        <section>
            <div className="mt-10 pt-5 border-t w-full border-white/10">
                <ContactWithEmail />
                <div className="grid grid-cols-2 lg:grid-cols-4 w-full justify-items-center gap-y-10 md:gap-15 mt-12">
                    <a href={"https://mail.google.com/"} target="_blanc" rel="noopener noreferrer" className="flex flex-col items-center gap-2 w-[170] group">
                        <Image src="/gmail1.svg" width={25} height={25} alt="img" className="w-25 h-25 bg-gray-300 border-2 rounded-md group-hover:scale-105 transition" />
                        <span className="text-[18px]">jovanjj99@gmail.com</span>
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01e9755d9bf9b9d4b9" target="_blanc" rel="noopener noreferrer" className="flex flex-col items-center gap-2 w-[170] group">
                        <Image src="upwork.svg" width={25} height={25} alt="img" className="w-25 h-25 px-1 bg-gray-300 rounded-md group-hover:scale-105 transition" />
                        <span className="text-[18px]">Upwork</span>
                    </a>
                    <a href={"https://github.com/JovanJJ"} target="_blanc" rel="noopener noreferrer" className="flex flex-col items-center gap-2 w-[170] group">
                        <Image src="/github.svg" width={25} height={25} alt="img" className="w-25 h-25 bg-gray-300 rounded-md group-hover:scale-105 transition" />
                        <span className="text-[18px]">Github</span>
                    </a>

                    <a href="https://www.linkedin.com/in/jovan-jovanovi%C4%87-456b2439a/" target="_blanc" rel="noopener noreferrer" className="flex flex-col items-center gap-2 w-[170] group">
                        <Image src="/linkedin.svg" width={25} height={25} alt="img" className="w-25 h-25 bg-gray-300 rounded-md group-hover:scale-105 transition" />
                        <span className="text-[18px]">Linkedin</span>
                    </a>
                </div>
            </div>
        </section>
    );
}