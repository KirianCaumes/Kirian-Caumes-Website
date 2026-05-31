import withPWA from 'next-pwa'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['component.tsx', 'route.ts'],
    poweredByHeader: false,
    turbopack: {},
    images: {
        minimumCacheTTL: 2678400, // 31 days
    },
    experimental: {
        preloadEntriesOnStart: false,
        webpackMemoryOptimizations: true,
    },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const plugins = [
        withPWA({
            disable: process.env.NODE_ENV === 'development',
            dest: 'public',
        }),
    ]

    return plugins.reduce((config, plugin) => plugin(config), nextConfig)
}
