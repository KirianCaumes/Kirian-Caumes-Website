import getConfig from 'next/config'
import { useMemo } from 'react'
import type { PublicRuntimeConfigType } from 'types'

export type UseMnetionsLegalesIndexReturns = {
    /** title */
    title: string
    /** appName */
    appName: string
}

/**
 * Use MentionsLegales page hook
 */
export default function useMentionsLegalesIndex() {
    const { publicRuntimeConfig } = getConfig() as {
        /** PublicRuntimeConfig */
        publicRuntimeConfig: PublicRuntimeConfigType
    }

    const title = useMemo(() => `Mentions legales - ${publicRuntimeConfig.appName}`, [publicRuntimeConfig.appName])

    return {
        title,
        appName: publicRuntimeConfig.appName,
    }
}
