import getConfig from 'next/config'

export type UseLayoutHookReturns = {
    /** publicRuntimeConfig */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    publicRuntimeConfig: any
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
