/** @type {import('knip').KnipConfig} */
const config = {
    ignoreDependencies: ['sharp', 'eslint-config-next', 'postcss-scss'],
    ignoreExportsUsedInFile: {
        interface: true,
        type: true,
        member: true,
    },
}

export default config
