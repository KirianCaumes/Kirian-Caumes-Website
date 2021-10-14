import getConfig from 'next/config'

/**
 * Use Layout hook
 * @returns {{
 *  publicRuntimeConfig: any;
 * }} Returns
 */
export default function useLayout() {
    const { publicRuntimeConfig } = getConfig()

    return {
        publicRuntimeConfig,
    }
}
