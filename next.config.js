const withPlugins = require('next-compose-plugins')
// // @ts-ignore
const optimizedImages = require('next-optimized-images')
const responsiveLoaderSharp = require('responsive-loader/sharp')
const withPWA = require("next-pwa")

module.exports = withPlugins(
    [
        withPWA({
            pwa: {
                disable: process.env.NODE_ENV === 'development',
                dest: "public",
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
    ],
    {
        // Will only be available on the server side
        serverRuntimeConfig: {},
        // Will be available on both server and client
        publicRuntimeConfig: {
            appLang: "FR-fr",
            appColor: "#b91d47",
            appUrl: "https://kiriancaumes.fr/",
            appName: "Kirian Caumes",
            appTitle: "Kirian Caumes - Développeur nantais",
            appDescription: "Kirian Caumes, développeur Nantais. Passionné d'informatique et de Handball. Persévérant, sympathique et curieux sont des qualités qui me définissent.",
            appComment: "👉 If you are able to see this, feel free to check out the source code of my website: https://github.com/KirianCaumes/Kirian-Caumes-Website 👈",
            gtmId: "GTM-WSRB7TM"
        },
    }
)