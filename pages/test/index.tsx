import { PortfolioCard } from '../../components/ui';
import { NextPage } from 'next';
import { SiNextdotjs, SiReact, SiTypescript, SiPaypal } from 'react-icons/si';

const projects = [
    {
        title: 'TesClone Shop',
        link: 'https://tesclone-shop.herokuapp.com/',
        thumbnail: '/assets/TesloClone.JPG',
        description:
            'This app is a functional online shop that includes NextAuth and Paypal integration',
        technologies: ['NextJs', 'React', 'TypeScript', 'Paypal'],
        technologiesIcons: [SiNextdotjs, SiReact, SiTypescript, SiPaypal],
    },
];

const TestPage: NextPage = () => {
    return (
        <div className="w-1/2 h-1/2">
            <PortfolioCard
                deployedLink={projects[0].link}
                thumbnail={projects[0].thumbnail}
                title={projects[0].title}
                description={projects[0].description}
                tags={projects[0].technologies}
                icons={projects[0].technologiesIcons}
            />
        </div>
    );
};

export default TestPage;
