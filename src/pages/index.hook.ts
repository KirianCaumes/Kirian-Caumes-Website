import getConfig from 'next/config'
import { useMemo } from 'react'
import type { PublicRuntimeConfigType } from 'types'

export interface UseIndexHookReturns {
    /** PublicRuntimeConfig */
    publicRuntimeConfig: PublicRuntimeConfigType
    /** Age */
    age: number
    /** WorkingYears */
    workingYears: number
}

/**
 * Use Index page hook
 */
export default function useIndex(): UseIndexHookReturns {
    const { publicRuntimeConfig } = getConfig()

    const age = useMemo(() => Math.abs(new Date(Date.now() - new Date(1997, 1, 21).getTime()).getUTCFullYear() - 1970), [])
    const workingYears = useMemo(() => {
        const monthDiff = (new Date()?.getMonth() ?? 0) - (new Date(2016, 8)?.getMonth() ?? 0)
        const yearDiff = (new Date()?.getFullYear() ?? 0) - (new Date(2016, 8)?.getFullYear() ?? 0)
        const diff = monthDiff + yearDiff * 12
        return Math.ceil(diff / 12)
    }, [])

    return {
        publicRuntimeConfig,
        age,
        workingYears,
    }
}
