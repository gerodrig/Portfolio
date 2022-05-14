import { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Layout } from '../../components/layouts/Layout';
import { PortfolioCard } from '../../components/ui';
import ProjectsNavbar from '../../components/ui/ProjectsNavbar';
import { projects as projectsData } from '../../data/projects';
import { Category, IProject } from '../../interfaces';
import style from './index.module.css';

const ProjectsPage: NextPage = () => {
    const { theme } = useTheme();
    const [themeMode, setThemeMode] = useState(style.scroll);

    const [projects, setProjects] = useState(projectsData);
    const [activeItem, setActiveItem] = useState('all');

    const handlerFilterCategory = (category: Category | 'all') => {
        if (category === 'all') {
            setProjects(projectsData);
            setActiveItem('all');
            return;
        }

        //filter Ionic as moblie
        const checkCategory = category === 'mobile' ? 'ionic' : category;

        const filteredProjects = projectsData.filter((project) =>
            project.category.includes(checkCategory)
        );
        setProjects(filteredProjects);
        setActiveItem(checkCategory);
    };

    useEffect(() => {
        if (theme !== 'dark') {
            setThemeMode(style.scroll);
        } else {
            setThemeMode(style.scrollDark);
        }
    }, [theme]);

    return (
        <>
            <Head>
                <title>Gerardo Rodriguez</title>
                <meta name="Projects" content="Gerardo Rodriguez Portfolio" />
                <link rel="icon" href="/GR-logo.ico" />
            </Head>

            <Layout
                title="Projects"
                pageDescription="Gerardo Rodriguez Portfolio">
                <div
                    className={`px-5 py-2 overflow-y-scroll ${themeMode}`}
                    style={{ height: '50vh' }}>
                    <ProjectsNavbar
                        handlerFilterCategory={handlerFilterCategory}
                        active={activeItem}
                    />
                    <hr />
                    <div className="relative grid grid-cols-12 gap-4 p-2 my-3 bg-gray-400">
                        {projects.map((project) => (
                            <PortfolioCard
                                key={project.name}
                                deployedLink={project.deployedLink}
                                githubLink={project.githubLink}
                                thumbnail={project.imagePath}
                                title={project.name}
                                description={project.description}
                                tags={project.category}
                                icons={project.technologyIcon}
                                technologies={project.technology}
                                className="col-span-12 m-auto border-2 border-black border-solid md:m-0 lg:col-span-4 md:col-span-6"
                                isActive={false}
                            />
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ProjectsPage;
