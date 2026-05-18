import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { publicRuntimeConfig } from 'config'

/**
 * Use 404 page hook
 * @returns UseNotFoundHookReturns
 */
export default function useNotFound() {
    const router = useRouter()

    const title = useMemo(() => `404 - ${publicRuntimeConfig.appName}`, [])

    return {
        title,
        router,
        publicRuntimeConfig,
    }
}
