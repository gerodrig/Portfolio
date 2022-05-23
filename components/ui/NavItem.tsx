import { FC, SetStateAction, useEffect, useState } from 'react';
import Link from 'next/link';

import { useTheme } from 'next-themes';
import styles from './NavItem.module.css';

interface NavItemsProps {
    path: string;
    pageName?: string;
    setActiveItem: (value: SetStateAction<string>) => void;
}

export const NavItem: FC<NavItemsProps> = (props) => {

    const { theme } = useTheme();
    const [ themeColor, setThemeColor] = useState('#60a5fa')

    useEffect(() => {
        if (theme === 'dark') {
            setThemeColor('#9ba3b0');
        } else {
            setThemeColor('#60a5fa');
        }
    }, [theme])
   

    return (
        <li className="flex px-2 pt-3 space-x-3 duration-300 dark:text-dark-primary text-blue-primary">
            <Link href={props.path}>
                <a
                    className="duration-300 ease-in hover:scale-125"
                    onClick={() => props.setActiveItem}>
                    <span
                        className={`${styles['link-underline']}`}
                        style={{
                            backgroundImage:
                                `linear-gradient(transparent, transparent), linear-gradient(${themeColor}, ${themeColor} )`,
                        }}>
                        {props.pageName ? props.pageName : props.path}
                    </span>
                </a>
            </Link>
        </li>
    );
};

//div chnged to li
