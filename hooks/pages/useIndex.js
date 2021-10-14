import getConfig from 'next/config'
// eslint-disable-next-line no-unused-vars
import { useRouter, NextRouter } from 'next/router'

/**
 * Use Index page hook
 * @returns {{
 *  publicRuntimeConfig: any;
 *  router: NextRouter;
 * }} Returns
 */
export default function useIndex() {
    const { publicRuntimeConfig } = getConfig()
    const router = useRouter()

    return {
        publicRuntimeConfig,
        router,
    }
}
