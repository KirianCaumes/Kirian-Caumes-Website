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
        formats: ['image/avif', 'image/webp'], // Serve AVIF (smallest) with WebP fallback
        minimumCacheTTL: 2678400, // 31 days
        maximumDiskCacheSize: 2147483648, // Limits the .next/cache/images folder to exactly 2 GB
        contentDispositionType: 'inline',
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
