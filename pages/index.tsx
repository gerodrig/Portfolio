import type { NextPage } from 'next';
import { About } from '../components/content';
import { Layout } from '../components/layouts/Layout';
import { SkillCard } from '../components/ui/';

import { skills } from '../data';


const HomePage: NextPage = () => {

    return (
        <>
            <Layout
                title="About"
                pageDescription="Gerardo Rodriguez Full stack developer">
                <About />
                <div className="my-6">
                    <h1 className="text-3xl font-bold text-center text-blue-primary dark:text-dark-primary">
                        Skills
                    </h1>
                    <ul className="grid grid-cols-12 gap-4 px-2 py-12 mx-2 bg-blue-veryLight dark:bg-dark-veryLight md:gap-x-0 ">
                        {skills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </ul>
                </div>
            </Layout>
        </>
    );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
// import { GetStaticProps } from 'next'

// export const getStaticProps: GetStaticProps = async (ctx) => {
//     const response = await fetch('http://localhost:3000/api/services') // your fetch function here 

//     const data = await response.json();

//     return {
//         props: {
//             data
//         }
//     }
// }

export default HomePage;
