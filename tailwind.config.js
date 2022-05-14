module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            Marck: ['Marck Script', 'cursive'],
        },
        extend: {
            colors: {
                blue: {
                    primary: '#60a5fa',
                    secondary: '#fab560',
                    light: '#5cc9f5',
                    veryLight: '#cceffc',
                    strong: '#1349e0'
                },
                dark: {
                    primary: '#0d0d0f',
                    secondary: '#9ba3b0',
                    light: '#c1c5cd',
                    veryLight: '#e4e7eb',
                },
            },
            animation: {
                fillColorIn:
                    'bg-gradient-to-r from-gray-400 to-white bg-[length:200%_100%] bg-right fillIn 2s forwards',
            },
            keyframes: {
                fillIn: {
                    '100%': { backgroundPosition: 'left' },
                },
            },
        },
    },
    // corePlugins: {
    //   preflight: false,
    // },
    plugins: [],
};
