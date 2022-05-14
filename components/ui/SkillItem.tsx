import { FC } from 'react';
import { Iskill } from '../../interfaces';

import style from './SkillCard.module.css';

export const SkillItem: FC<{ skill: Iskill }> = ({ skill: {Icon, level, name } }) => {
    return (
        <div className={`bg-white rounded-full ${style['flip-card-back-content']}`}>
             <div
                className="flex items-center h-full mt-1 rounded-full bg-gradient-to-r from-blue-strong to-blue-light dark:from-dark-primary dark:to-dark-secondary"
                style={{ width: `${level}` }}>
                <Icon className="mx-1" />
                {name}
            </div> 
          
        </div>
    );
};
