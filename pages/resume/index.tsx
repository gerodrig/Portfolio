import Head from 'next/head';
import { NextPage } from 'next';

import { Resume } from '../../components/content';
import { Layout } from '../../components/layouts/';

const ResumePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Gerardo Rodriguez</title>
                <meta name="Resume" content="Gerardo Rodriguez Resume" />
                <link rel="icon" href="/GR-logo.ico" />
            </Head>

            <Layout title="Resume" pageDescription="Gerardo Rodriguez resume">
                <Resume />
            </Layout>
        </>
    );
};

export default ResumePage;
