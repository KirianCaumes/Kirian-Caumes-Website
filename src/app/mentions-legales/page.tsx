import { publicRuntimeConfig } from 'config'
import MentionsLegales from 'views/mentions-legales/index.component'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Mentions légales - ${publicRuntimeConfig.appName}`,
    description: `Mentions légales du site ${publicRuntimeConfig.appName}`,
    robots: { index: false, follow: true },
}

/**
 * Legal notice route (`/mentions-legales`).
 * @returns The legal notice page
 */
export default function Page() {
    return <MentionsLegales />
}
