import getConfig from 'next/config'
import type { PublicRuntimeConfigType } from 'types'

export type UseLayoutHookReturns = {
    /** publicRuntimeConfig */
    publicRuntimeConfig: PublicRuntimeConfigType
}

/**
 * Use Layout hook
 */
export default function useLayout(): UseLayoutHookReturns {
    const { publicRuntimeConfig } = getConfig()

    return {
        publicRuntimeConfig,
    }
}
