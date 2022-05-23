import type { NextPage } from 'next';

import { About } from '../components/content';
import { Layout } from '../components/layouts/Layout';

import { motion } from 'framer-motion';

import { SkillCard } from '../components/ui/';

import { skills } from '../data';
import { routeAnimation, stagger } from '../animations';

const HomePage: NextPage = () => {
    return (
        <>
            <Layout
                title="About"
                pageDescription="Gerardo Rodriguez Full stack developer">
                <About />
                <motion.div className="my-6" variants={routeAnimation} initial="initial" animate="animate" exit='exit'>
                    <h1 className="text-3xl font-bold text-center text-blue-primary dark:text-dark-primary">
                        Skills
                    </h1>
                    <motion.ul
                        className="grid grid-cols-12 gap-4 px-2 py-12 mx-2 bg-blue-veryLight dark:bg-dark-veryLight md:gap-x-0"
                        variants={stagger}
                        initial="initial"
                        animate="animate">
                        {skills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </motion.ul>
                </motion.div>
            </Layout>
        </>
    );
};

export default HomePage;
