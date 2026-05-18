import { useMemo } from 'react'
import { publicRuntimeConfig } from 'config'

/**
 * Use Index page hook
 * @returns UseIndexHookReturns
 */
export default function useIndex() {
    const age = useMemo(() => Math.abs(new Date(new Date().getTime() - new Date(1997, 1, 21).getTime()).getUTCFullYear() - 1970), [])
    const workingYears = useMemo(() => {
        const monthDiff = new Date().getMonth() - new Date(2016, 8).getMonth()
        const yearDiff = new Date().getFullYear() - new Date(2016, 8).getFullYear()
        const diff = monthDiff + yearDiff * 12
        return Math.ceil(diff / 12)
    }, [])

    return {
        publicRuntimeConfig,
        age,
        workingYears,
    }
}
