import {
    FaServer,
    FaDatabase,
    FaAngular,
    FaReact,
    FaMobile,
    FaCss3,
    FaHtml5,
    FaGithubSquare,
} from 'react-icons/fa';
import { MdOutlineMonitor } from 'react-icons/md';
import { SiJavascript } from 'react-icons/si';
import { BsGearFill } from 'react-icons/bs';
import { IskillList, Iskills } from '../interfaces';

import { GrGraphQl, GrNode } from 'react-icons/gr';

import {
    SiTailwindcss,
    SiDocker,
    SiMicrosoftoffice,
    SiFlutter,
    SiReact,
    SiIonic,
    SiXamarin,
    SiJava,
    SiPython,
    SiBootstrap,
    SiNextdotjs,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiFirebase,
    SiCplusplus,
    SiCsharp,
} from 'react-icons/si';

const skillList: IskillList = {
    Backend: [
        {
            name: 'Node.js/Express',
            level: '80%',
            Icon: GrNode,
        },
        {
            name: 'GraphQL',
            level: '60%',
            Icon: GrGraphQl,
        },
        {
            name: 'NextJs',
            level: '80%',
            Icon: SiNextdotjs,
        },
    ],
    Frontend: [
        {
            name: 'React',
            level: '90%',
            Icon: FaReact,
        },
        {
            name: 'Angular',
            level: '70%',
            Icon: FaAngular,
        },
        {
            name: 'CSS',
            level: '80%',
            Icon: FaCss3,
        },
        {
            name: 'Tailwind',
            level: '70%',
            Icon: SiTailwindcss,
        },
        {
            name: 'Bootstrap',
            level: '80%',
            Icon: SiBootstrap,
        },
        {
            name: 'HTML',
            level: '100%',
            Icon: FaHtml5,
        },
    ],
    Database: [
        {
            name: 'MySQL',
            level: '60%',
            Icon: SiMysql,
        },
        {
            name: 'PostGreSQL',
            level: '70%',
            Icon: SiPostgresql,
        },
        {
            name: 'MongoDb',
            level: '80%',
            Icon: SiMongodb,
        },
        {
            name: 'Firebase',
            level: '80%',
            Icon: SiFirebase,
        },
    ],
    'Programming Languages': [
        {
            name: 'C++',
            level: '70%',
            Icon: SiCplusplus,
        },
        {
            name: 'C#',
            level: '70%',
            Icon: SiCsharp,
        },
        {
            name: 'Python',
            level: '60%',
            Icon: SiPython,
        },
        {
            name: 'Javascript',
            level: '90%',
            Icon: SiJavascript,
        },
        {
            name: 'Java',
            level: '60%',
            Icon: SiJava,
        },
    ],
    Mobile: [
        {
            name: 'Ionic',
            level: '80%',
            Icon: SiIonic,
        },
        {
            name: 'Xamarin',
            level: '70%',
            Icon: SiXamarin,
        },
        {
            name: 'React Native',
            level: '80%',
            Icon: SiReact,
        },
        {
            name: 'Flutter',
            level: '40%',
            Icon: SiFlutter,
        },
    ],
    Tools: [
        {
            name: 'Github',
            level: '80%',
            Icon: FaGithubSquare,
        },
        {
            name: 'Docker',
            level: '60%',
            Icon: SiDocker,
        },
        // {
        //     name: 'Kubernetes',
        //     level: '40%',
        //     Icon: SiKubernetes,
        // },
        {
            name: 'MS Office',
            level: '90%',
            Icon: SiMicrosoftoffice,
        },
    ],
};

export const skills: Iskills[] = [
    {
        name: 'Backend',
        Icon: FaServer,
        description:
            'Node.js/ Express, GraphQL, MongoDB, MySQL, PostgreSQL, Firebase, AWS, Heroku, Netlify, etc.',
        skills: skillList['Backend'] as unknown as IskillList,
    },
    {
        name: 'Frontend',
        Icon: MdOutlineMonitor,
        description:
            'React, Next.js, Redux, Apollo, Styled Components, Tailwind, etc.',
        skills: skillList['Frontend'] as unknown as IskillList,
    },
    {
        name: 'Database',
        Icon: FaDatabase,
        description:
            'MongoDB, MySQL, PostgreSQL, Firebase, AWS, Heroku, Netlify, etc.',
        skills: skillList['Database'] as unknown as IskillList,
    },
    {
        name: 'Programming Languages',
        Icon: SiJavascript,
        description: 'JavaScript, TypeScript, Python, C#, C++, Java, etc.',
        skills: skillList['Programming Languages'] as unknown as IskillList,
    },
    {
        name: 'Mobile',
        Icon: FaMobile,
        description:
            'Git, GitHub, Docker, Docker Compose, Docker Swarm, Kubernetes, Kubernetes Compose, etc.',
        skills: skillList['Mobile'] as unknown as IskillList,
    },
    {
        name: 'Tools',
        Icon: BsGearFill,
        description:
            'Git, GitHub, Docker, Docker Compose, Docker Swarm, Kubernetes, Kubernetes Compose, etc.',
        skills: skillList['Tools'] as unknown as IskillList,
    },
];
