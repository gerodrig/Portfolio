import { IProject } from '../interfaces/index';

import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiPaypal,
    SiVercel,
    SiMapbox,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiJavascript,
    SiSocketdotio,
    SiHandlebarsdotjs,
    SiIonic,
    SiAngular,
    SiIos,
    SiAndroid,
} from 'react-icons/si';

export const projects: IProject[] = [
    {
        name: 'TesClone Shop',
        description:
            'This app is a functional online shop that includes NextAuth and Paypal integration.',
        imagePath: '/assets/TesloClone.png',
        deployedLink: 'https://tesclone-shop.herokuapp.com/',
        githubLink: 'https://github.com/gerodrig/next-teslaclone-shop',
        category: ['react', 'mongo', 'nextjs'],
        technology: ['NextJs', 'React', 'TypeScript', 'Paypal'],
        technologyIcon: [SiNextdotjs, SiReact, SiTypescript, SiPaypal],
    },
    {
        name: 'Pokemon Favorites',
        description:
            'Next application that fetches data from the Poke API that implements Static Site Generation, Incrementat Static Regeneration, SEO friendly and Open Graph Meta Tags.',
        imagePath: '/assets/PokeFavs.png',
        deployedLink: 'https://pokemon-app-ochre.vercel.app/',
        githubLink: 'https://github.com/gerodrig/pokemon-app',
        category: ['react', 'mongo', 'nextjs'],
        technology: ['NextJs', 'React', 'TypeScript', 'Vercel'],
        technologyIcon: [SiNextdotjs, SiReact, SiTypescript, SiVercel],
    },
    {
        name: 'React Maps App',
        description:
            'React Application that implements Mapbox API and helps locate the user location and create pins on the map.',
        imagePath: '/assets/ReactMapsApp.png',
        deployedLink: 'https://mymaps-react.netlify.app/',
        githubLink: 'https://github.com/gerodrig/ReactMap-App',
        category: ['react', 'mongo', 'nextjs'],
        technology: ['React', 'TypeScript', 'Vercel', 'Mapbox'],
        technologyIcon: [SiMapbox, SiReact, SiTypescript, SiVercel],
    },
    {
        name: 'MERN Calendar App',
        description:
            'This calendar is a MERN project where the code was split in 2. Backend was done in Node and front end was done in React you can check the code for both in the following links.',
        imagePath: '/assets/CalendarApp.png',
        deployedLink: 'https://mern-calendar-gerry.herokuapp.com',
        githubLink: 'https://github.com/gerodrig/Calendar-App-MERN-',
        category: ['mongo', 'express', 'react', 'node'],
        technology: ['Mongo', 'Express', 'React', 'Node', 'Javascript'],
        technologyIcon: [SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript],
    },
    {
        name: 'Chat App',
        description:
            'This chat application was implemented with SocketIO and Auth implementation. This will show all users connected and will allow communication between all users. All chats are stored in mongoDB.',
        imagePath: '/assets/ChatApp.png',
        deployedLink: 'https://github.com/gerodrig/chatApp-sockets-backend',
        githubLink: 'https://chatapp-socketsio.herokuapp.com',
        category: ['mongo', 'express', 'react', 'node', 'typescript', 'socketio'],
        technology: ['Mongo', 'Express', 'React', 'Node', 'Typescript', 'SocketIO'],
        technologyIcon: [SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTypescript, SiSocketdotio],
    },
    {
        name: 'MiChant Booking App',
        description:
            'Booking App that allows users to book a place. This app was with Node, Express, MongoDB and Handlebars.',
        imagePath: '/assets/MichantApp.png',
        deployedLink: 'https://fast-castle-05357.herokuapp.com/',
        githubLink: 'https://github.com/gerodrig/WEB322_Assignment',
        category: ['mongo', 'express', 'node', 'javascript'],
        technology: ['Mongo', 'Express', 'Node', 'Typescript', 'Handlebars'],
        technologyIcon: [SiMongodb, SiExpress, SiNodedotjs, SiJavascript, SiHandlebarsdotjs],
    },
    {
        name: 'Ionic Pizza App',
        description:
            'Order App in Ionic that allows users to order a pizza. This app was built with Ionic, Angular for Android and iOS.',
        imagePath: '/assets/PizzaApp.png',
        deployedLink: 'https://gerodrig.github.io/ionic-pizza-app/home',
        githubLink: 'https://gerodrig.github.io/ionic-pizza-app/home',
        category: ['ionic', 'angular'],
        technology: ['Ionic', 'Angular', 'iOS', 'Android'],
        technologyIcon: [SiIonic, SiAngular, SiIos, SiAndroid],
    },
    {
        name: 'Ionic Movies App',
        description:
            'Ionic iOS and Android application that display current movies. Application consumes TMDB Api.',
        imagePath: '/assets/MoviesApp.png',
        deployedLink: 'https://gerodrig.github.io/Ionic-movie-app/',
        githubLink: 'https://github.com/gerodrig/Ionic-Movies-app',
        category: ['ionic', 'angular'],
        technology: ['Ionic', 'Angular', 'iOS', 'Android'],
        technologyIcon: [SiIonic, SiAngular, SiIos, SiAndroid],
    },
    {
        name: 'Countries App',
        description:
            'This is a SPA in Angular that consumes https://restcountries.com/ API to check all countries information.',
        imagePath: '/assets/CountriesApp.png',
        deployedLink: 'https://gerodrig.github.io/Countries-app/',
        githubLink: 'https://github.com/gerodrig/Countries-app',
        category: ['angular', 'typescript'],
        technology: ['Angular', 'Typescript'],
        technologyIcon: [SiAngular, SiTypescript],
    },
];
