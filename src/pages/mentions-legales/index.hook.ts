import getConfig from 'next/config'
import { useMemo } from 'react'

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
    const { publicRuntimeConfig } = getConfig()

    const title = useMemo(() => `Mentions legales - ${publicRuntimeConfig.appName}`, [publicRuntimeConfig.appName])

    return {
        title,
        appName: publicRuntimeConfig.appName,
    }
}
