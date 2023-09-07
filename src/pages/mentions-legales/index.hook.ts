import getConfig from 'next/config'
import { useMemo } from 'react'
import type { PublicRuntimeConfigType } from 'types'

export type UseMentionsLegalesIndexReturns = {
    /** title */
    title: string
    /** publicRuntimeConfig */
    publicRuntimeConfig: PublicRuntimeConfigType
}

/**
 * Use MentionsLegales page hook
 */
export default function useMentionsLegalesIndex(): UseMentionsLegalesIndexReturns {
    const { publicRuntimeConfig } = getConfig() as {
        /** PublicRuntimeConfig */
        publicRuntimeConfig: PublicRuntimeConfigType
    }

    const title = useMemo(() => `Mentions légales - ${publicRuntimeConfig.appName}`, [publicRuntimeConfig.appName])

    return {
        title,
        publicRuntimeConfig,
    }
}
