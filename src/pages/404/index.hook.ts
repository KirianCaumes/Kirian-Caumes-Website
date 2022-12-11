import getConfig from 'next/config'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export type UseNotFoundHookReturns = {
    /** title */
    title: string
    /** router */
    router: import('next/router').NextRouter
}

/**
 * Use 404 page hook
 */
export default function useNotFound(): UseNotFoundHookReturns {
    const { publicRuntimeConfig } = getConfig()
    const router = useRouter()

    const title = useMemo(() => `404 - ${publicRuntimeConfig.appName}`, [publicRuntimeConfig.appName])

    return {
        title,
        router,
    }
}
