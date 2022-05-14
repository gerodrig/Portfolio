import Image from 'next/image';
import { FC } from 'react';
import { IoMdRocket } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { CardContentProps } from './CardContent';

export type CardModalProps = {
    description: CardContentProps['description'];
    title: CardContentProps['title'];
    thumbnail: CardContentProps['thumbnail'];
    technologies: CardContentProps['technologies'];
    showDetail: boolean;
    icons: CardContentProps['icons'];
    deployedLink: string;
    githubLink: string;
    setShowDetail: (showDetail: boolean) => void;
};

const CardModal: FC<CardModalProps> = ({
    description,
    title,
    icons,
    thumbnail,
    deployedLink,
    githubLink,
    technologies,
    showDetail = false,
    setShowDetail,
}) => {
    return (
        <>
            {showDetail && (
                <div className="fixed z-30 grid grid-cols-1 p-2 mt-1 bottom-1/3 right-4 left-6 lg:right-0 lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-1/4 bg-opacity-80 bg-blue-primary dark:bg-dark-primary dark:bg-opacity-75 gap-x-12 lg:bottom-auto xl:h-1/3 ">
                    <div className="flex flex-col w-full md:w-2/3 md:content-end md:m-auto lg:flex-row lg:flex-wrap lg:w-full lg:h-full lg:content-start">
                        <div className="lg:w-1/2 lg:h-2/3 lg:overflow-hidden">
                            <Image
                                src={thumbnail}
                                layout="responsive"
                                width={300}
                                height={200}
                                alt="Project Image"
                                className="border-none rounded shadow-lg"
                            />
                        </div>
                        <div className="lg:w-1/2 lg:h-2/3 lg:py-4">
                            <div className="pt-2 lg:pl-6 lg:pt-2">
                                <h1 className="font-bold">{title}</h1>
                                <h3>{description}</h3>
                            </div>
                            <div className="flex flex-wrap justify-around gap-2 mt-4 capitalize">
                                {technologies.map((technology, index) => {
                                    const Icon = icons[index];
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center px-2 mb-2 rounded-full bg-opacity-70 dark:bg-opacity-20 bg-blue-secondary dark:bg-dark-primary md:mb-1">
                                            <Icon className="mr-1" size={20} />
                                            <h3>{technology as string}</h3>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex self-center gap-3 justify-evenly lg:self-end lg:z-40 lg:bottom-0 lg:mt-8 lg:mx-auto">
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center px-2 duration-200 ease-in rounded-full bg-opacity-40 dark:bg-opacity-90 bg-blue-strong dark:bg-dark-primary md:my-1 hover:scale-110 hover:animate-pulse">
                                <SiGithub size={24} className="mr-1" /> Github
                            </a>

                            <a
                                href={deployedLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center px-2 duration-200 ease-in rounded-full bg-opacity-40 bg-blue-strong dark:bg-dark-primary md:my-1 hover:scale-110 hover:animate-pulse">
                                <IoMdRocket
                                    size={24}
                                    className="mr-1 rotate-45"
                                />{' '}
                                Project
                            </a>
                        </div>
                    </div>

                    <button
                        className="absolute p-1 rounded-full bg-opacity-70 bg-blue-secondary top-1 right-2 focus:outline-none dark:bg-dark-secondary dark:bg-opacity-50 hover:scale-125 hover:ease-in hover:duration-300 hover:bg-red-400 dark:hover:bg-red-400"
                        onClick={() => setShowDetail(false)}>
                        <MdClose size={24} />
                    </button>
                </div>
            )}
        </>
    );
};

export default CardModal;
