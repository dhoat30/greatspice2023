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
    async redirects() {
        return [
            {
                source: '/contact.html',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/faq.html',
                destination: '/faq',
                permanent: true,
            },
            {
                source: '/services.html',
                destination: '/',
                permanent: true,
            },
            {
                source: '/reservation.html',
                destination: '/reservation',
                permanent: true,
            },
            {
                source: '/takeaway-menu.html',
                destination: '/menu/takeaway-menu',
                permanent: true,
            },
            {
                source: '/dine-in-menu.html',
                destination: '/menu/dine-in-menu',
                permanent: true,
            },
            {
                source: '/news.html',
                destination: '/blogs',
                permanent: true,
            },
            {
                source: '/gallery.html',
                destination: '/gallery',
                permanent: true,
            },
            {
                source: '/menu/lunch-menu.pdf',
                destination: '/menu/lunch-menu',
                permanent: true,
            },
            {
                source: '/dine.html',
                destination: '/dine',
                permanent: true,
            },

            {
                source: '/news/:slug',
                destination: '/blogs/:slug',
                permanent: true,
            },

        ];
    },

}

module.exports = nextConfig
