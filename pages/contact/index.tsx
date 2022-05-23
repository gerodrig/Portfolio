
import Head from 'next/head';

import { Layout } from '../../components/layouts/Layout';
import { ContactForm } from '../../components/ui';




const Contact = () => {

    return (
        <>
            <Head>
                <title>Gerardo Rodriguez</title>
                <meta name="Contact" content="Gerardo Rodriguez Contact" />
                <link rel="icon" href="/GR-logo.ico" />
            </Head>

            <Layout title="Resume" pageDescription="Gerardo Rodriguez resume">
                <ContactForm />
            </Layout>
        </>
    );
};

export default Contact;
