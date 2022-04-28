import getConfig from 'next/config'
import { useMemo } from 'react'

/**
 * Use Index page hook
 * @returns {{
 *  publicRuntimeConfig: any;
 *  age: number;
 * }} Returns
 */
export default function useIndex() {
    const { publicRuntimeConfig } = getConfig()
    const age = useMemo(() => Math.abs((new Date(Date.now() - new Date(1997, 1, 21).getTime())).getUTCFullYear() - 1970), [])

    return {
        publicRuntimeConfig,
        age,
    }
}
