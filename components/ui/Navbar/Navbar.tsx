import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


import { NavItem } from './NavItem';
import { ActiveNavbarItem } from './ActiveNavbarItem';

import { sections } from '../../../data/sections';

export const Navbar = () => {
    const { pathname } = useRouter();
    const [activeItem, setActiveItem] = useState<string>('');

    useEffect(() => {
        if (pathname === '/') {
            return setActiveItem('About');
        }

        if (pathname === '/projects') {
            return setActiveItem('Projects');
        }

        if (pathname === '/resume') {
            return setActiveItem('Resume');
        }

        if (pathname === '/contact') {
            return setActiveItem('Contact');
        }
    }, [pathname]);

    return (
        <nav className="flex flex-row justify-between px-3 py-3">
            <ActiveNavbarItem activeItem={activeItem} />
            <ul className='flex flex-row justify-start'>
                {sections.map(
                    (section) =>
                        activeItem !== section.title && (
                            <NavItem
                                key={section.title}
                                path={section.path}
                                pageName={section.title}
                                setActiveItem={setActiveItem}
                            />
                        )
                )}
            </ul>
        </nav>
    );
};
