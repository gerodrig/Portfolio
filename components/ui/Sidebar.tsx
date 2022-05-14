import Image from 'next/image';
import {
    FaGithubAlt,
    FaLinkedin,
    FaTwitter,
    FaUserTie,
    FaMobileAlt,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ToggleThemeButton from './ToggleThemeButton';
import Link from 'next/link';

export const Sidebar = () => {

    return (
        <div className="col-span-12 p-4 text-center bg-white shadow-2xl dark:bg-secondary lg:col-span-4 md:col-span-12 rounded-2xl">
            <aside>
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
                    <p className="px-2 py-1 my-3 rounded-full bg-blue-veryLight dark:bg-dark-primary ">
                        Full Stack Developer
                    </p>
                    <a
                        href="#"
                        download="name"
                        className="flex items-center justify-center px-2 py-1 my-3 rounded-full bg-blue-veryLight hover:bg-blue-strong hover:text-white hover:animate-pulse dark:bg-dark-primary">
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
                    <p className="flex items-center justify-center my-2">
                        <FaMobileAlt className="m-2" />
                        647-72-9377
                    </p>
                </div>
                {/* Email Button */}
                {/* <button
                    className="w-8/12 px-5 py-2 my-2 text-white duration-300 ease-in rounded-full bg-gradient-to-r from-blue-strong via-blue-light to-blue-veryLight dark:from-dark-primary dark:to-dark-veryLight focus:outline-none dark:hover:from-gray-700 dark:hover:to-gray-700 hover:scale-110"
                    onClick={() => window.open('mailto: garc@outlook.com')}>
                    {' '}
                    Email Me{' '}
                </button> */}
                {/* <button
                    className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r dark:from-blue-strong dark:via-blue-light dark:to-blue-veryLight from-dark-primary to-dark-veryLight focus:outline-none hover:from-dark-veryLight hover:to-dark-primary dark:hover:from-blue-primary dark:hover:to-blue-veryLight hover:scale-110"
                    onClick={toggleTheme}>
                    {currentTheme}
                </button> */}
                <ToggleThemeButton />
            </aside>
        </div>
    );
};
