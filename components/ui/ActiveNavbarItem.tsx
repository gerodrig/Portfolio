import { FC, useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { FaRegAddressCard, FaFolder } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";

import animation from "./ActiveNavbarItem.module.css";


interface ActiveNavbarItemProps {
    activeItem: string;
}

export const ActiveNavbarItem: FC<ActiveNavbarItemProps> = ({activeItem}) => {

    const { theme } = useTheme();
    const [toggleTheme, setToggleTheme] = useState('');

    useEffect(() => {
        if (theme === 'dark') {
            setToggleTheme(animation.fillColorInDark );
        } else {
            setToggleTheme(animation.fillColorIn);
        }
    }, [theme])

    return (

            <div className={`flex px-2 py-2 space-x-2 font-bold text-white ${ toggleTheme } w-2/5` } >
                <div className="pt-1 text-3xl">
                {activeItem === 'About' && <FaRegAddressCard />}
                {activeItem === 'Projects' && <FaFolder />}
                {activeItem === 'Resume' && <BsFileText />}
                {activeItem === 'Contact' && <MdContactPhone />}
                </div>
                <span className="mt-1 text-xl md:mt-0 md:text-3xl">{activeItem } </span>
            </div>

    );
};
