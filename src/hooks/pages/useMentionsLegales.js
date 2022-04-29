import getConfig from 'next/config'

/**
 * Use MentionsLegales page hook
 * @returns {{
 *  publicRuntimeConfig: any;
 * }} Returns
 */
export default function useMentionsLegales() {
    const { publicRuntimeConfig } = getConfig()

    return {
        publicRuntimeConfig,
    }
}
