import 'styles/index.scss'
import { Montserrat } from 'next/font/google'
import { publicRuntimeConfig } from 'config'
import Layout from 'components/layout/layout/layout.component'
import GdprBanner from 'components/layout/gdpr-banner/gdpr-banner.component'
import { DISABLE_ANIMATION_NO_JS } from 'components/containers/fade/fade.component'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
})

export const metadata: Metadata = {
    metadataBase: new URL(publicRuntimeConfig.appUrl),
    title: publicRuntimeConfig.appTitle,
    description: publicRuntimeConfig.appDescription,
    applicationName: publicRuntimeConfig.appName,
    manifest: '/manifest.webmanifest',
    icons: {
        icon: [{ url: '/favicon.ico' }, { url: '/icon.svg', type: 'image/svg+xml' }],
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        type: 'website',
        locale: publicRuntimeConfig.appLang,
        url: publicRuntimeConfig.appUrl,
        siteName: publicRuntimeConfig.appName,
        title: publicRuntimeConfig.appTitle,
        description: publicRuntimeConfig.appDescription,
        images: ['/images/kirian_caumes.jpg'],
    },
    twitter: {
        card: 'summary',
        title: publicRuntimeConfig.appTitle,
        description: publicRuntimeConfig.appDescription,
        images: ['/images/kirian_caumes.jpg'],
    },
}

export const viewport: Viewport = {
    themeColor: publicRuntimeConfig.appColor,
    width: 'device-width',
    initialScale: 1,
}

/**
 * Root layout - the App Router replacement for `_app` + `_document`.
 * @returns The HTML shell wrapping every route
 */
export default function RootLayout({ children }: { /** Page content */ readonly children: ReactNode }) {
    return (
        <html
            data-scroll-behavior="smooth"
            lang={publicRuntimeConfig.appLang}
        >
            <body className={montserrat.className}>
                <Layout>
                    <GdprBanner />
                    {children}
                </Layout>

                {/* Without JS, react-awesome-reveal would leave faded elements at opacity:0 - keep them visible */}
                <noscript>
                    <style>{`div.${DISABLE_ANIMATION_NO_JS} { animation: none !important; opacity: 1 !important; }`}</style>
                </noscript>
            </body>
        </html>
    )
}
