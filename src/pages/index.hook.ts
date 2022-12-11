import getConfig from 'next/config'
import { useMemo } from 'react'

export type UseIndexHookReturns = {
    /** publicRuntimeConfig */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    publicRuntimeConfig: any
    /** age */
    age: number
}

/**
 * Use Index page hook
 */
export default function useIndex() {
    const { publicRuntimeConfig } = getConfig()
    const age = useMemo(() => Math.abs((new Date(Date.now() - new Date(1997, 1, 21).getTime())).getUTCFullYear() - 1970), [])

    return {
        publicRuntimeConfig,
        age,
    }
}
