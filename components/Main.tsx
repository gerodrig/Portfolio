import { FC } from 'react';
import { Navbar } from './ui/Navbar/Navbar';

interface MainProps {
    children: JSX.Element | JSX.Element[];
}

export const Main: FC<MainProps> = ({ children }) => {

    return (
        <main className="h-auto col-span-12 duration-300 ease-in bg-white shadow-2xl lg:col-span-8 md:col-span-12 rounded-2xl">
            <Navbar />
            <hr></hr>
            <div className='lg:mb-10'>
                {children}
                <hr></hr>
                
            </div>
        
        </main>
    );
};
