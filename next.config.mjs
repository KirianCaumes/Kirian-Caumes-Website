/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
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

export default nextConfig
