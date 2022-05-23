import { FC } from 'react';
import Head from 'next/head';

import { Sidebar, Main } from '../ui';

interface LayoutProps {
    title: string;
    pageDescription: string;
    children: JSX.Element | JSX.Element[];
}

export const Layout: FC<LayoutProps> = ({ children, title, pageDescription }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="About" content={pageDescription}/>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={pageDescription} />
                <link rel="icon" href="/GR-logo.ico" />
            </Head>
            <div className="grid grid-cols-12 gap-6 lg:px-24 md:px-32 sm:px-20 my-14">
                <Sidebar />
                <Main>
                    {children}
                </Main>
            </div>
        </>
    );
};
