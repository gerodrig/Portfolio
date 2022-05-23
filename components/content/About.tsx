import { motion } from 'framer-motion';
import { fadeInDown, stagger } from '../../animations';

export const About = () => {
    return (
        <motion.article className="px-6 mt-6 text-justify indent-6 dark:text-dark-primary" variants={stagger} initial='initial' animate="animate">
            <motion.p variants={fadeInDown}>
                I am a{' '}
                <span className="font-bold text-blue-600">
                    Software Developer
                </span>{' '}
                graduated at{' '}
                <span className="font-bold text-red-600 animate-pulse">
                    Seneca College
                </span>{' '}
                with Honors for Computer Programming. I have industry experience
                as a Full Stack Developer in creating and maintaining APIs in
                Java Spring Boot and NodeJS, ETL jobs with Spark written on
                Scala, scripting in python, and testing with unit and
                integration testing. I am a globally-minded individual that
                loves to learn new things every day.
            </motion.p>
            <motion.p variants={fadeInDown}>
                {' '}
                <span className="font-bold text-yellow-600">
                    Solving problems
                </span>{' '}
                and finding bugs is what drives me, I have senior experience as
                Incident and Problem management. I am an excellent team player
                and focused on service culture to excel customers expectations.
                I like to define myself as a: hardworking, focused,
                team-oriented, organized, flexible, and multi-task person.
            </motion.p>
            <motion.p variants={fadeInDown}>
                I am looking for a position in software development in any
                region of Canada to grow with your company.
            </motion.p>
        </motion.article>
    );
};
