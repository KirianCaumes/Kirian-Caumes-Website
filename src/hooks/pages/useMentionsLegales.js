import getConfig from 'next/config'

/**
 * Use MentionsLegales page hook
 * @returns {{
 *  router: NextRouter;
 * }} Returns
 */
export default function useMentionsLegales() {
    const { publicRuntimeConfig } = getConfig()

    return {
        publicRuntimeConfig,
    }
}
