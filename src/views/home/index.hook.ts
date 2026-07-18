import { useMemo } from 'react'
import { publicRuntimeConfig } from 'config'
import type { IndexProps } from 'views/home/index.component'

export type UseIndexHookParams = Pick<IndexProps, 'now'>

/**
 * Use Index page hook
 * @returns UseIndexHookReturns
 */
export default function useIndex({ now }: UseIndexHookParams) {
    const age = useMemo(() => Math.abs(new Date(now.getTime() - new Date(1997, 1, 21).getTime()).getUTCFullYear() - 1970), [now])
    const workingYears = useMemo(() => {
        const monthDiff = now.getMonth() - new Date(2016, 8).getMonth()
        const yearDiff = now.getFullYear() - new Date(2016, 8).getFullYear()
        const diff = monthDiff + yearDiff * 12
        return Math.ceil(diff / 12)
    }, [now])

    return {
        publicRuntimeConfig,
        age,
        workingYears,
    }
}
