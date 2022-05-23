import { FC, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { motion } from 'framer-motion';

import { IEducation, IEmployment } from '../../interfaces';
import { ResumeItem } from './ResumeItem';
import { stagger } from '../../animations';

type IResumeSectionProps = {
    data: IEducation[] | IEmployment[];
    title: string;
    toggler: (section: string) => void;
    isActive: boolean;
    color?: string;
};

export const ResumeSection: FC<IResumeSectionProps> = ({
    data,
    title,
    toggler,
    color = 'black',
    isActive = true,
}: IResumeSectionProps) => {
    const { theme } = useTheme();
    const [themeColor, setThemeColor] = useState('black');

    useEffect(() => {
        if (theme !== 'dark') {
            setThemeColor(color);
        } else {
            setThemeColor('black');
        }
    }, [color, theme]);

    return (
        <div >
            <h3
                className={`p-2 text-2xl font-bold text-white`}
                style={{ backgroundColor: themeColor }}
                >
                {title}

                <span
                    role="button"
                    className={`dropdown hover:ease-in hover:rotate-45 ${
                        isActive ? '' : 'rotate-45'
                    }`}
                    onClick={() => toggler(title.toLowerCase())}></span>
            </h3>
            <div>
                <motion.ul
                    className={`py-5 border-l-4 ${
                        isActive ? '' : ' hidden'
                    }`}
                    style={{ borderColor: themeColor }} 
                    variants={stagger} animate="animate" initial="initial" exit="exit" 
                    >
                    {data.map((item: IEducation | IEmployment) => (
                        <ResumeItem
                            key={item.title + item.name}
                            data={item}
                            color={themeColor}
                        />
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};
