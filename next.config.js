/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['data.greatspicetauranga.co.nz'],
    },
    env: {
        url: "https://data.greatspicetauranga.co.nz"
    },
    // headers: () => {
    //     if (process.env.NODE_ENV === 'development') {
    //         return [
    //             {
    //                 source: '/_next/static/css/_app-client_src_app_globals_css.css',
    //                 headers: [{ key: 'Vary', value: '*' }],
    //             },
    //         ];
    //     } else {
    //         return [];
    //     }
    // },

}

module.exports = nextConfig
