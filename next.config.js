const withPlugins = require('next-compose-plugins')
// // @ts-ignore
const optimizedImages = require('next-optimized-images')
const responsiveLoaderSharp = require('responsive-loader/sharp')

module.exports = withPlugins(
    [
        [optimizedImages, {
            responsive: {
                adapter: responsiveLoaderSharp,
                sizes: [300, 320, 640, 960, 1200, 1800, 2400],
                placeholder: true,
                placeholderSize: 40,
            },
        }]
    ],
    {
        // Will only be available on the server side
        serverRuntimeConfig: {

        },
        // Will be available on both server and client
        publicRuntimeConfig: {
            appName: 'Kirian Caumes',
        },
    }
)