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
                source: '/about-us.html',
                destination: '/about-us',
                permanent: true,
            },
            {
                source: '/news/top-5-dishes.html',
                destination: '/blogs/top-5-dishes-to-order-at-great-spice-6',
                permanent: true,
            },
            {
                source: '/news/best-restaurant-award.html',
                destination: '/blogs/great-spice-won-peoples-choice',
                permanent: true,
            },
            {
                source: '/news/christmas-party.html',
                destination: '/blogs/host-your-christmas-party-at-great-spice-2',
                permanent: true,
            },
            {
                source: '/news/visit-tauranga.html',
                destination: '/blogs/the-top-5-reasons-to-visit-tauranga',
                permanent: true,
            },
            {
                source: '/news/fathers-day-2019.html',
                destination: '/blogs/fathers-day-giveaway-on-instagram',
                permanent: true,
            },
            // {
            //     source: '/news/top.html',
            //     destination: '/blogs/top',
            //     permanent: true,
            // },
            // {
            //     source: '/news/top.html',
            //     destination: '/blogs/top',
            //     permanent: true,
            // },
            // {
            //     source: '/news/top.html',
            //     destination: '/blogs/top',
            //     permanent: true,
            // },
            // {
            //     source: '/news/top.html',
            //     destination: '/blogs/top',
            //     permanent: true,
            // },
            // {
            //     source: '/news/top.html',
            //     destination: '/blogs/top',
            //     permanent: true,
            // },
            // {
            //     source: '/news/top.html',
            //     destination: '/blogs/top',
            //     permanent: true,
            // },
            // {
            //     source: '/news/top.html',
            //     destination: '/blogs/top',
            //     permanent: true,
            // },

            // {
            //     source: '/news/top.html',
            //     destination: '/blogs/top',
            //     permanent: true,
            // },
            // {
            //     source: '/news/top.html',
            //     destination: '/blogs/top',
            //     permanent: true,
            // },
            // {
            //     source: '/news/top.html',
            //     destination: '/blogs/top',
            //     permanent: true,
            // },
            // {
            //     source: '/news/top.html',
            //     destination: '/blogs/top',
            //     permanent: true,
            // },
        ];
    },

}

module.exports = nextConfig
