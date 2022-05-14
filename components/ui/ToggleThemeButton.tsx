import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

import style from './ToggleThemeButton.module.css';

const ToggleThemeButton = () => {
    const { theme, setTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(style.animationLight);


    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        if (theme !== 'dark') {
            setCurrentTheme(style.animationLight);
        } else {
            setCurrentTheme(style.animationDark);
        }
    }, [theme]);

    return (
        <div className="flex justify-center" >
            <label
                htmlFor="checkbox"
                className="block h-8 border-2 border-solid w-14 toggler dark:border-dark-primary border-blue-primary rounded-[30px] relative cursor-pointer" >
                <input type="checkbox" id="checkbox" className="hidden" onClick={ toggleTheme }/>
                <span
                    className={`absolute inline-block w-6 h-6 top-1/2 dark:bg-dark-secondary bg-blue-primary rounded-[50%] left-px z-10 transform ease-in duration-500 ${currentTheme}`}
                />
                <IoMdSunny className="absolute top-1/2 -translate-y-2/4 left-[5px] text-blue-secondary" />
                <IoMdMoon className="absolute top-1/2 -translate-y-2/4 right-[5px] text-blue-secondary" />
            </label>
        </div>
    );
};

export default ToggleThemeButton;
