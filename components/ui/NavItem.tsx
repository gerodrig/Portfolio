import Link from "next/link";
import { FC, SetStateAction } from "react";

interface NavItemsProps {
    path: string;
    pageName?: string;
    setActiveItem: (value: SetStateAction<string>) => void
}

export const NavItem: FC<NavItemsProps> = (props) => {
    return (
        <li className="flex px-2 pt-3 space-x-3 duration-300 dark:text-dark-primary text-blue-primary">
            <Link href={props.path}>
                <a className="duration-300 ease-in hover:underline hover:scale-125" onClick={() => props.setActiveItem}>
                    <span>
                        {props.pageName ? props.pageName : props.path}
                    </span>
                </a>
            </Link>
        </li>
    )
}


//div chnged to li