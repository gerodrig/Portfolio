import { FC } from 'react';
//import { useMediaQuery, Context as ResponsiveContext } from 'react-responsive';

import { Iskill, Iskills } from '../../interfaces/index';
import { SkillItem } from './SkillItem';

import style from './SkillCard.module.css';

export const SkillCard: FC<{skill: Iskills}> = ({skill: {name, Icon, description, skills}}) => {

   const skillsArray  = Object.values(skills!) as unknown as Iskill[];


    //const isMobile = useMediaQuery({ maxWidth: 767 });
    //TODO: Implement isMobileview in context
    //console.log(isMobile);

    //const icon = { ...skill.icon, props: { className: 'w-10 h-10' } };

    return (
        <>
        {
            // !isMobile && (
                (
            <div
                className={`w-3/4 col-span-6 mx-auto duration-300 ease-in border-1 ${style['flip-card']} `} >
                <div className={`flex flex-col items-center justify-around py-12 ${style['flip-card-inner']}`} >
                    <div className={`flex flex-col justify-center text-blue-strong dark:text-dark-primary items-center ${style['flip-card-front']} bg-yellow-400`}>
                        <Icon className="w-10 h-10"/>
                        <p className="pt-2">{name}</p>
                    </div>
                    <div className={`${style['flip-card-back']} bg-yellow-400`}>
                                {skillsArray.map(skill => (
                                    <SkillItem key={skill.name} skill={skill}/>
                                ))}
                    </div>
       
                </div>
            </div>
            )}
        </>
    )
};


//bscriclefill