import 'styles/index.scss'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Montserrat } from 'next/font/google'
import { useMount, useUnmount } from 'react-use'
import { publicRuntimeConfig } from 'config'
import Layout from 'components/layout/layout/layout.component'
import GdprBanner from 'components/layout/gdpr-banner/gdpr-banner.component'
import type { AppProps } from 'next/app'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
})

/**
 * Use App hook
 */
function useApp() {
    const router = useRouter()

    const timer = useRef<NodeJS.Timeout>(null)

    useMount(() => {
        // Add comment on the top of the page
        document
            .querySelector('html')
            ?.parentNode?.insertBefore(document.createComment(publicRuntimeConfig.appComment), document.querySelector('html'))

        // See: https://github.com/vercel/next.js/issues/40196
        document.querySelector('#__next')?.setAttribute('role', 'presentation')

        // Workaround to disabled smooth scroll, see https://github.com/vercel/next.js/issues/20125
        router.events.on('routeChangeStart', () => {
            document.documentElement.setAttribute('data-scroll-behavior', 'auto')
        })
        router.events.on('routeChangeComplete', () => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            clearTimeout(timer.current!)
            timer.current = setTimeout(() => {
                document.documentElement.removeAttribute('data-scroll-behavior')
            }, 100)
        })
    })

    useUnmount(() => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        clearTimeout(timer.current!)
    })
}

/**
 * App
 * {@link https://nextjs.org/docs/advanced-features/custom-app}
 * @returns JSX.Element
 */
export default function App({ Component, pageProps }: AppProps) {
    useApp()

    return (
        <Layout className={montserrat.className}>
            <GdprBanner />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </Layout>
    )
}
