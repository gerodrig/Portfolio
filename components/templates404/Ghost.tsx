import Link from 'next/link';
import { FaGhost } from 'react-icons/fa';

import styles from './Ghost.module.css';

const Ghost404 = () => {
    return (
        <main className="flex flex-col items-center justify-center h-screen text-center">
            <h1
                className={`text-white sm:text-[12.5rem] text-[8rem] tracking-widest font-montserrat my-1 whitespace-nowrap ${styles.textShadow} max-w-lg`}>
                4
                <span
                    className={`inline-block text-gray-100 dark:text-blue-secondary ${styles.animation} hover:animate-spin`}>
                    <FaGhost />
                </span>
                4
            </h1>
            <h2 className="text-lg font-bold text-gray-100">
                Error: 404 page not found
            </h2>
            <p className="mt-0 text-gray-100">
                Sorry, the page youre looking for cannot be accessed
            </p>
            <Link href="/" passHref>
                <button className='px-2 py-1 mt-3 text-white duration-300 ease-in rounded-full hover:scale-110 bg-blue-strong dark:bg-gray-800 hover:animate-pulse'>Go back home</button>
            </Link>
        </main>
    );
};

export default Ghost404;
