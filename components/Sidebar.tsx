import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    FaGithubAlt,
    FaLinkedin,
    FaUserTie,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';

import ToggleThemeButton from './ui/ToggleThemeButton/ToggleThemeButton';
import Typewriter from './animations/Typewriter';


export const Sidebar = () => {

    return (
        <div className="flex flex-col col-span-12 p-4 text-center bg-white shadow-2xl lg:col-span-4 md:col-span-12 rounded-2xl">
            <aside className='flex-1'>
                <div className="dark:text-white">
                    <Image
                        src="/assets/profilePhoto.png"
                        width={200}
                        height={200}
                        className="w-32 h-32 mx-auto rounded-full"
                        alt="Gerardo Rodriguez profile picture"
                    />
                    <h3 className="my-4 text-4xl font-medium tracking-wider duration-300 ease-in font-Marck text-blue-strong dark:text-dark-primary">
                        <span className="text-blue-light dark:text-dark-light">
                            Gerardo
                        </span>{' '}
                        Rodriguez
                    </h3>
                    <p className="w-1/2 px-2 py-1 mx-auto my-3 rounded-full lg:w-4/5 bg-blue-veryLight dark:bg-dark-primary xl:w-3/4">
                        Full Stack Developer
                    </p>
                    <a
                        href="/assets/Resume_Gerardo_Rodriguez_2022.pdf"
                        download="Gerardo Rodriguez Resume.pdf"
                        className="flex items-center justify-center w-1/2 px-2 py-1 mx-auto my-3 rounded-full xl:w-3/4 bg-blue-veryLight hover:bg-blue-strong hover:text-white hover:animate-pulse dark:bg-dark-primary lg:w-4/5">
                        <FaUserTie className="w-6 h-6 pr-2" /> Download Resume
                    </a>
                    {/* social icons */}
                </div>
                <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-secondary dark:text-dark-light md:w-full">
                    <a href="https://github.com/gerodrig" target="_blank" rel="noreferrer">
                        <FaGithubAlt className="w-8 h-8 duration-300 ease-in cursor-pointer hover:text-gray-700 hover:scale-125" />
                    </a>
                    <a href="https://www.linkedin.com/in/gerodrig/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="w-8 h-8 duration-300 ease-in cursor-pointer hover:text-blue-700 hover:scale-125" />
                    </a>
                    <a onClick={() => window.open('mailto: garc@outlook.com')}>
                        <MdEmail className="w-8 h-8 duration-300 ease-in cursor-pointer hover:text-blue-400 hover:scale-125" />
                    </a>
                </div>
                {/* address */}
                <div className="py-4 mx-1 my-5 text-black bg-blue-veryLight dark:bg-dark-veryLight">
                    <div className="flex items-center justify-center space-x-2">
                        <GoLocation />
                        <span>Ontario, Canada</span>
                    </div>
                    <p className="flex items-center justify-center my-2">
                        <AiOutlineMail className="m-2" /> garc@outlook.com
                    </p>

                </div>
                <div className='hidden lg:inline' >
                <Typewriter />
                </div>
            </aside>
                <ToggleThemeButton />
        </div>
    );
};
