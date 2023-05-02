import getConfig from 'next/config'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import type { PublicRuntimeConfigType } from 'types'

export type UseNotFoundHookReturns = {
    /** title */
    title: string
    /** router */
    router: import('next/router').NextRouter
    /** appUrl */
    appUrl: string
}

/**
 * Use 404 page hook
 */
export default function useNotFound(): UseNotFoundHookReturns {
    const { publicRuntimeConfig } = getConfig() as {
        /** PublicRuntimeConfig */
        publicRuntimeConfig: PublicRuntimeConfigType
    }
    const router = useRouter()

    const title = useMemo(() => `404 - ${publicRuntimeConfig.appName}`, [publicRuntimeConfig.appName])

    return {
        title,
        router,
        appUrl: publicRuntimeConfig.appUrl,
    }
}
