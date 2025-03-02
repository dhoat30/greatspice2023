/** @type {import('next').NextConfig} */

// bundle analyzer 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['data.greatspicetauranga.co.nz'],
        remotePatterns: [{
            protocol: "https",
            hostname: "data.greatspicetauranga.co.nz",
            port: '',
            pathname: '/**'
        }, 
        { 
            protocol: "https", 
            hostname: "lh3.googleusercontent.com", 
            port: '', 
            pathname: '/**'
        }
    ],
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
            {
                source: '/news/historic-location.html',
                destination: '/blogs/great-spice-showcase-their-historic-location',
                permanent: true,
            },
            {
                source: '/news/khem-family.html',
                destination: '/blogs/get-to-know-the-owner-of-great-spice',
                permanent: true,
            },
            {
                source: '/news/entree.html',
                destination: '/blogs/great-spice-features-a-delicious-house-entree-menu',
                permanent: true,
            },
            {
                source: '/news/favourite-for-reviewers.html',
                destination: '/blogs/great-spice-is-a-favourite-for-reviewers',
                permanent: true,
            },
            {
                source: '/news/warm-winter.html',
                destination: '/blogs/warm-up-this-winter-with-online-ordering',
                permanent: true,
            },
            {
                source: '/news/wedding-show.html',
                destination: '/blogs/wedding-show-as-a-must-attend-event-in-tauranga',
                permanent: true,
            },
            {
                source: '/news/five-things-to-do-with-family.html',
                destination: '/blogs/5-things-to-do-with-the-family-in-tauranga',
                permanent: true,
            },

            {
                source: '/news/order-online.html',
                destination: '/blogs/order-online-now-at-great-spice-tauranga',
                permanent: true,
            },
            {
                source: '/news/giveaway.html',
                destination: '/blogs/amazing-holiday-facebook-giveaway',
                permanent: true,
            },
            {
                source: '/news/add-little-spice.html',
                destination: '/blogs/add-a-little-spice-to-your-life-with-great-spice',
                permanent: true,
            },
            {
                source: '/news/secret-ingredient.html',
                destination: '/blogs/taurangas-secret-ingredient',
                permanent: true,
            },
            {
                source: '/news/sweet-sugar.html',
                destination: '/blogs/sugar-spice-and-everything-nice',
                permanent: true,
            },
            {
                source: '/news/ethnic-restaurant.html',
                destination: '/blogs/three-core-values-create-a-recipe-for-success',
                permanent: true,
            },
            {
                source: '/news/papamoa-east-branch-opening.html',
                destination: '/blogs/bay-bites-great-spice-tandoori-indian-restaurant',
                permanent: true,
            },
        ];
    },
}

module.exports = withBundleAnalyzer(nextConfig)
