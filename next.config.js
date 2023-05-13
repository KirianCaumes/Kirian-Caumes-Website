/* eslint-disable max-len */
// const optimizedImages = require('next-optimized-images')
// const responsiveLoaderSharp = require('responsive-loader/sharp')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ['component.tsx'],
    // Will only be available on the server side
    serverRuntimeConfig: {},
    // Will be available on both server and client
    publicRuntimeConfig: {
        appLang: 'FR-fr',
        appColor: '#263547',
        appUrl: 'https://kiriancaumes.fr',
        appName: 'Kirian Caumes',
        appTitle: 'Kirian Caumes - Développeur Web Full Stack Nantes',
        appDescription:
            'Kirian Caumes, développeur full stack passionné de développement informatique. Féru de Javascript, Typescript, Node, Nest, PWA, Next.js et autre !',
        appComment:
            '👉 If you are able to see this, feel free to check out the source code of my website: https://github.com/KirianCaumes/Kirian-Caumes-Website 👈',
        gtmId: 'G-C3SCVG7W7N',
    },
}

module.exports = () => {
    const plugins = [
        withPWA({
            disable: process.env.NODE_ENV === 'development',
            dest: 'public',
        }),
    ]

    return plugins.reduce((config, plugin) => plugin(config), nextConfig)
}
