import { FC } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../../../animations';

import { IoMdRocket } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { CardContentProps } from './CardContent';

export type CardModalProps = {
    id: number;
    description: CardContentProps['description'];
    title: CardContentProps['title'];
    thumbnail: CardContentProps['thumbnail'];
    technologies: CardContentProps['technologies'];
    icons: CardContentProps['icons'];
    deployedLink: string;
    githubLink: string;
    showDetail: number | null;
    setShowDetail: (showDetail: number | null) => void;
};

const CardModal: FC<CardModalProps> = ({
    id,
    description,
    title,
    icons,
    thumbnail,
    deployedLink,
    githubLink,
    technologies,
    showDetail,
    setShowDetail,
}) => {
    
    return (
        <>
            {showDetail === id && (
                <motion.div
                    className="fixed z-30 grid grid-cols-1 p-2 mt-1 bottom-1/3 right-4 left-6 lg:h-[350px] lg:right-auto lg:left-auto lg:w-1/2 bg-opacity-80 bg-blue-primary dark:bg-dark-primary dark:bg-opacity-75 gap-x-12 lg:bottom-auto"
                    variants={stagger}
                    initial="initial"
                    animate="animate">
                    <div className="flex flex-col w-full md:w-2/3 md:content-end md:m-auto lg:flex-row lg:flex-wrap lg:w-full lg:h-full lg:content-start">
                        <motion.div
                            className="lg:w-1/2 lg:h-2/3 lg:overflow-hidden"
                            variants={fadeInUp}>
                            <Image
                                src={thumbnail}
                                layout="responsive"
                                width={300}
                                height={200}
                                alt="Project Image"
                                className="border-none rounded shadow-lg"
                            />
                        </motion.div>
                        <div className="lg:w-1/2 lg:h-2/3 lg:py-4">
                            <motion.div
                                className="pt-2 lg:pl-6 lg:pt-2"
                                variants={fadeInUp}>
                                <h1 className="font-bold">{title}</h1>
                                <h3>{description}</h3>
                            </motion.div>
                            <motion.div
                                className="flex flex-wrap justify-around gap-2 px-4 mt-4 capitalize"
                                variants={stagger}
                                initial="initial"
                                animate="animate">
                                {technologies.map((technology, index) => {
                                    const Icon = icons[index];
                                    return (
                                        <motion.div
                                            key={index}
                                            className="flex items-center px-2 mb-2 rounded-full bg-opacity-70 dark:bg-opacity-20 bg-blue-secondary dark:bg-dark-primary md:mb-1 lg:text-xs xl:text-base"
                                            variants={fadeInUp}>
                                            <Icon className="mr-1" size={20} />
                                            <h3>{technology as string}</h3>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>

                        <motion.div
                            className="flex self-center gap-3 justify-evenly lg:self-end lg:z-40 lg:mt-16 xl:mt-4 lg:mx-auto"
                            variants={stagger}
                            initial="initial"
                            animate="animate">
                            <motion.a
                                href={githubLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center px-2 duration-200 ease-in rounded-full bg-opacity-40 dark:bg-opacity-90 bg-blue-strong dark:bg-dark-primary md:my-1 hover:scale-110 hover:animate-pulse lg:text-xs xl:text-base"
                                variants={fadeInUp}
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.1, ease: 'easeIn' },
                                }}>
                                <SiGithub size={24} className="mr-1" /> Github
                            </motion.a>

                            <motion.a
                                href={deployedLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center px-2 duration-200 ease-in rounded-full lg:text-xs xl:text-base bg-opacity-40 bg-blue-strong dark:bg-dark-primary md:my-1 hover:scale-110 hover:animate-pulse"
                                variants={fadeInUp}
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.1, ease: 'easeIn' },
                                    
                                }}>
                                <IoMdRocket
                                    size={24}
                                    className="mr-1 rotate-45"
                                />{' '}
                                Project
                            </motion.a>
                        </motion.div>
                    </div>

                    <motion.button
                        className="absolute p-1 rounded-full bg-opacity-70 bg-blue-secondary top-1 right-2 focus:outline-none dark:bg-dark-secondary dark:bg-opacity-50 hover:bg-red-400 dark:hover:bg-red-400"
                        onClick={() => setShowDetail(null)}
                        variants={fadeInUp}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.3 },
                        }}>
                        <MdClose size={24} />
                    </motion.button>
                </motion.div>
            )}
        </>
    );
};

export default CardModal;
