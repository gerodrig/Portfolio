import { FC } from 'react';
import { motion } from 'framer-motion';

import { IEducation, IEmployment } from '../../interfaces';
import { date } from '../../utilities';
import { fadeInUp } from '../../animations';

import styles from './ResumeItem.module.css';

export const ResumeItem: FC<{
    data: IEducation | IEmployment;
    color: string;
}> = ({ data, color }) => {

    return (
        <motion.li className="px-4" variants={fadeInUp}>
            <span
                className={styles.bulletPoint}
                style={{ backgroundColor: color }}
            />
            <h4>
                <span className="font-bold"> {data.title} </span>
                <span className="italic"> – {data.name}</span>
            </h4>
            <p style={{ color }}>
                <time dateTime={data.startDate}>
                    {date.getMonthYear(data.startDate)}
                </time>{' '}
                -{' '}
                <time dateTime={data.endDate}>
                    {date.getMonthYear(data.endDate)}
                </time>
            </p>
            {(data as IEmployment).description && (
                <p>{(data as IEmployment).description}</p>
            )}
        </motion.li>
    );
};
