import classNames from 'classnames';
import { FC } from 'react';
import { Category } from '../../interfaces';

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
        <li
            className={classNames(
                'cursor-pointer hover:text-blue-strong dark:hover:text-dark-secondary',
                active === value
                    ? 'text-blue-strong dark:text-dark-secondary'
                    : ''
            )}
            onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
    );
};

const ProjectsNavbar: FC<{
    handlerFilterCategory: Function;
    active: string;
}> = (props) => {
    return (
        <nav className="mx-2 my-1 overflow-x-auto">
            <ul className="flex px-3 py-1 space-x-3 capitalize dark:text-black">
                <NavItem value="all" {...props} />
                <NavItem value="react" {...props} />
                <NavItem value="angular" {...props} />
                <NavItem value="nextjs" {...props} />
                <NavItem value="node" {...props} />
                <NavItem value="mobile" {...props} />
            </ul>
        </nav>
    );
};

export default ProjectsNavbar;
