/** @type {import('knip').KnipConfig} */
const config = {
    ignore: ['next-sitemap.config.js'],
    ignoreDependencies: ['sharp', 'eslint-config-next', 'postcss-scss'],
    ignoreExportsUsedInFile: {
        interface: true,
        type: true,
        member: true,
    },
}

export default config
