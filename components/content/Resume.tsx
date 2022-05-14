import { useState } from 'react';
import { resumeData } from '../../data/resume';
import { ResumeSection } from './ResumeSection';

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
        <section className="px-2 bg-blue-secondary dark:bg-dark-secondary">
            <ResumeSection data={employment} title={'Employment'} color={'#60a5fa'} isActive={isEmploymentActive} toggler={activeTogglerHandler} />
            <ResumeSection data={education} title={'Education'} color={'#ff666c'}  isActive={isEducationActive} toggler={activeTogglerHandler} />

        </section>
    );
};
