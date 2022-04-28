/* eslint-disable max-len */
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const responsiveLoaderSharp = require('responsive-loader/sharp')
const withPWA = require('next-pwa')

module.exports = withPlugins(
    [
        withPWA({
            pwa: {
                disable: process.env.NODE_ENV === 'development',
                dest: 'public',
            },
        }),
        [optimizedImages, {
            responsive: {
                adapter: responsiveLoaderSharp,
                sizes: [300, 320, 640, 960, 1200, 1800, 2400],
                placeholder: true,
                placeholderSize: 40,
            },
        }],
        {
            images: {
                disableStaticImages: true,
            },
        },
    ],
    {
        // Will only be available on the server side
        serverRuntimeConfig: {},
        // Will be available on both server and client
        publicRuntimeConfig: {
            appLang: 'FR-fr',
            appColor: '#263547',
            appUrl: 'https://kiriancaumes.fr/',
            appName: 'Kirian Caumes',
            appTitle: 'Kirian Caumes - Développeur full stack nantais',
            appDescription: 'Kirian Caumes, développeur full stack passionné de développement informatique. Féru de Javascript, Typescript, Node, Nest, PWA, Next.js et autre !',
            appComment: '👉 If you are able to see this, feel free to check out the source code of my website: https://github.com/KirianCaumes/Kirian-Caumes-Website 👈',
            gtmId: 'G-C3SCVG7W7N',
        },
    },
)
