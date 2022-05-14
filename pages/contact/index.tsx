import Head from 'next/head';
import { useCallback, useRef } from 'react';
import { Layout } from '../../components/layouts/Layout';

const Contact = () => {
    const nameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const informationInput = useRef<HTMLTextAreaElement>(null);

    const formHandler = useCallback(
        () => (e: React.SyntheticEvent) => {
            e.preventDefault();

            const data = {
                name: nameInput.current?.value,
                email: emailInput.current?.value,
                information: informationInput.current?.value,
            };
            console.log(data);
        },
        []
    );

    return (
        <>
            <Head>
                <title>Gerardo Rodriguez</title>
                <meta name="Contact" content="Gerardo Rodriguez Contact" />
                <link rel="icon" href="/GR-logo.ico" />
            </Head>

            <Layout title="Resume" pageDescription="Gerardo Rodriguez resume">
                <div className="py-1 mx-2 my-1 dark:bg-dark-veryLight dark:rounded-xl">
                    <form className="grid grid-cols-12 mx-4 my-6 gap-x-2 gap-y-4" onSubmit={formHandler()}>
                        <input
                            ref={nameInput}
                            type="text"
                            className="col-span-6 p-1 border-2 border-solid border-blue-primary dark:border-white focus:border-blue-secondary focus:outline-none focus:ring-1 focus:ring-blue-secondary dark:focus:border-blue-secondary dark:focus:animate-pulse"
                            placeholder="Gerardo Rodriguez"></input>
                        <input
                        ref={emailInput}
                        type="email"
                            className="col-span-6 p-1 border-2 border-solid border-blue-primary dark:border-white focus:border-blue-secondary focus:outline-none focus:ring-1 focus:ring-blue-secondary dark:focus:animate-pulse dark:focus:border-blue-secondary "
                            placeholder="garc@outlook.com"></input>
                        <textarea
                            ref={informationInput}
                            className="h-48 col-span-12 p-2 border-2 border-solid border-blue-primary dark:border-white focus:border-blue-secondary focus:outline-none focus:ring-1 focus:ring-blue-secondary dark:focus:ring-2 dark:focus:animate-pulse dark:focus:border-blue-secondary "
                            placeholder="Hey Gerardo,"
                        />
                        <button className="col-span-12 py-1 text-white duration-150 ease-in bg-blue-400 dark:bg-dark-secondary hover:animate-pulse hover:font-bold">
                            Send
                        </button>
                    </form>
                </div>
            </Layout>
        </>
    );
};

export default Contact;
