import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import { IEducation, IEmployment } from '../../interfaces';
import { ResumeItem } from './ResumeItem';

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
    const [ themeColor, setThemeColor ] = useState('');

    useEffect(() => {
        if( theme !== 'dark' ) {
            setThemeColor(color);
        } else {
            setThemeColor('black');
        }
    }, [color,theme])
    
    return (
        <>
            <h3
                className={`p-2 text-2xl font-bold text-white`} style={{backgroundColor: themeColor}}>
                {title}

                <span
                    role="button"
                    className={`dropdown hover:ease-in hover:rotate-45 ${
                        isActive ? '' : 'rotate-45'
                    }`}
                    onClick={() => toggler(title.toLowerCase())}></span>
            </h3>
            <div>
                <ul
                    className={`py-5 border-l-4 transition-transform ease-in delay-500 ${isActive ? '' : ' hidden'}`} style={{borderColor: themeColor}}>
                    {data.map((item: IEducation | IEmployment) => (
                        <ResumeItem key={item.title + item.name} data={item} color={themeColor} /> 
                    ))}
                    
                </ul>
            </div>
        </>
    );
};
