import getConfig from 'next/config'
// eslint-disable-next-line no-unused-vars
import { useRouter, NextRouter } from 'next/router'
import { useMemo } from 'react'

/**
 * Use Index page hook
 * @returns {{
 *  publicRuntimeConfig: any;
 *  router: NextRouter;
 *  age: number;
 * }} Returns
 */
export default function useIndex() {
    const { publicRuntimeConfig } = getConfig()
    const router = useRouter()
    const age = useMemo(() => Math.abs((new Date(Date.now() - new Date(1997, 1, 21).getTime())).getUTCFullYear() - 1970), [])

    return {
        publicRuntimeConfig,
        router,
        age,
    }
}
