import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/',
                has: [
                    {
                        type: 'host',
                        value: 'app.calnudge.com',
                    },
                ],
            },
            {
                source: '/:path*',
                destination: '/app/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'app.calnudge.com',
                    },
                ],
            },
        ]
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/app',
                has: [
                    {
                        type: 'host',
                        value: 'app.calnudge.com',
                    },
                ],
                permanent: false,
            },
        ]
    },
}

export default nextConfig
