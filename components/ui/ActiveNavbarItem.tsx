import { FC, useEffect, useState } from "react";
import { FaRegAddressCard, FaFolder } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import animation from "./ActiveNavbarItem.module.css";
import { useTheme } from "next-themes";


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
        // flex-1 will take all space possible
        // <div className="flex-1">
            <div className={`flex px-2 py-2 space-x-2 text-3xl font-bold text-white ${ toggleTheme } w-2/5` } >
                <div className="pt-1">
                {activeItem === 'About' && <FaRegAddressCard />}
                {activeItem === 'Projects' && <FaFolder />}
                {activeItem === 'Resume' && <BsFileText />}
                {activeItem === 'Contact' && <MdContactPhone />}
                </div>
                <span>{activeItem } </span>
            </div>
        // </div>
    );
};
