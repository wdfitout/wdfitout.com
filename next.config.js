/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    }
}

module.exports = {
    async rewrites() {
        return [
            {
                source: '/robots.txt',
                destination: '/api/robots',
            },
        ];
    },
};

module.exports = {
    async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap',
            },
        ];
    },
};


