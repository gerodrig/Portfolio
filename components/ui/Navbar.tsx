import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NavItem } from './NavItem';
import { sections } from '../../data/sections';
import { ActiveNavbarItem } from './ActiveNavbarItem';

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
