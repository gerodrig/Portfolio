import { FC } from 'react';

import { motion } from 'framer-motion';
import classNames from 'classnames';

import { Category } from '../../../interfaces';
import { springRight, stagger } from '../../../animations';

type NavItemProps = {
    value: Category | 'all';
    handlerFilterCategory: Function;
    active: string;
};

const NavItem: FC<NavItemProps> = ({
    value,
    handlerFilterCategory,
    active,
}) => {
    return (
        <motion.li
            className={classNames(
                'cursor-pointer hover:text-blue-strong dark:hover:text-dark-secondary',
                active === value
                    ? 'text-blue-strong dark:text-dark-secondary'
                    : ''
            )}
            onClick={() => handlerFilterCategory(value)}
            variants={springRight}
            whileHover={{ scale: 1.1 }}
            >
            {value}
        </motion.li>
    );
};

const ProjectsNavbar: FC<{
    handlerFilterCategory: Function;
    active: string;
}> = (props) => {
    return (
        <nav className="mx-2 my-1 overflow-x-auto">
            <motion.ul className="flex px-3 py-1 space-x-3 capitalize dark:text-black"
            variants={stagger}
            initial="initial"
            animate="animate"
            >
                <NavItem value="all" {...props} />
                <NavItem value="react" {...props} />
                <NavItem value="angular" {...props} />
                <NavItem value="nextjs" {...props} />
                <NavItem value="node" {...props} />
                <NavItem value="mobile" {...props} />
            </motion.ul>
        </nav>
    );
};

export default ProjectsNavbar;
