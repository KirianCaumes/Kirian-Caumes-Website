import getConfig from 'next/config'
import { useMemo } from 'react'
import type { PublicRuntimeConfigType } from 'types'

export type UseIndexHookReturns = {
    /** PublicRuntimeConfig */
    publicRuntimeConfig: PublicRuntimeConfigType
    /** Age */
    age: number
}

/**
 * Use Index page hook
 */
export default function useIndex(): UseIndexHookReturns {
    const { publicRuntimeConfig } = getConfig()

    const age = useMemo(() => Math.abs((new Date(Date.now() - new Date(1997, 1, 21).getTime())).getUTCFullYear() - 1970), [])

    return {
        publicRuntimeConfig,
        age,
    }
}