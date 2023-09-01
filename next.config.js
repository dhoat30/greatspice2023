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
    }

}

module.exports = nextConfig
