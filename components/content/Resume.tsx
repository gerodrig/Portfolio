import { useState } from 'react';
import { motion } from 'framer-motion';

import { resumeData } from '../../data/resume';
import { ResumeSection } from './ResumeSection';
import { routeAnimation } from '../../animations/index';

export const Resume = () => {

    const [isEmploymentActive, setIsEmploymentActive] = useState(true);
    const [isEducationActive, setIsEducationActive] = useState(false);
   
    const activeTogglerHandler = (section: string) => {

        if( isEmploymentActive ) {
            setIsEmploymentActive(false);
            setIsEducationActive(true);
        }

        if( isEducationActive ) {
            setIsEmploymentActive(true);
            setIsEducationActive(false);
        }
    }

    const { education, employment } = resumeData;

    return (
        <motion.section className="mx-2 bg-blue-secondary dark:bg-dark-secondary" variants={routeAnimation} initial="initial" animate="animate" exit='exit'>
            <ResumeSection data={employment} title={'Employment'} color={'#60a5fa'} isActive={isEmploymentActive} toggler={activeTogglerHandler} />
            <ResumeSection data={education} title={'Education'} color={'#ff666c'}  isActive={isEducationActive} toggler={activeTogglerHandler} />

        </motion.section>
    );
};
