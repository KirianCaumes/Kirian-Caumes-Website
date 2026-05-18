import { useMemo } from 'react'
import { publicRuntimeConfig } from 'config'

/**
 * Use MentionsLegales page hook
 * @returns UseMentionsLegalesIndexReturns
 */
export default function useMentionsLegalesIndex() {
    const title = useMemo(() => `Mentions légales - ${publicRuntimeConfig.appName}`, [])

    return {
        title,
        publicRuntimeConfig,
    }
}
