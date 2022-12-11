import type { AppProps } from 'next/app'
import 'styles/index.scss'
import { GdprBanner, Layout } from 'components/layout'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal', 'italic'],
})

/**
 * Use App hook
 */
function useApp() {
    const { publicRuntimeConfig } = getConfig()
    const router = useRouter()

    const timer = useRef<NodeJS.Timeout>()

    // Add comment on the top of the page
    useEffect(() => {
        document.querySelector('html')?.parentNode?.insertBefore(
            document.createComment(publicRuntimeConfig.appComment),
            document.querySelector('html'),
        )
    }, [publicRuntimeConfig])

    /**
     * Workaround to disabled smooth scroll
     * {@link https://github.com/vercel/next.js/issues/20125}
     */
    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            document.documentElement.setAttribute('data-scroll-behavior', 'auto')
        })
        router.events.on('routeChangeComplete', () => {
            clearTimeout(timer.current)
            timer.current = setTimeout(() => document.documentElement.removeAttribute('data-scroll-behavior'), 100)
        })
        return () => {
            clearTimeout(timer.current)
        }
    }, [router.events])

    return {}
}

/**
 * App
 * {@link https://nextjs.org/docs/advanced-features/custom-app}
 */
export default function App({ Component, pageProps }: AppProps) {
    useApp()

    return (
        <>
            <style
                // eslint-disable-next-line react/no-unknown-property
                jsx
                // eslint-disable-next-line react/no-unknown-property
                global
            >
                {`
                  html {
                    font-family: ${montserrat.style.fontFamily}, sans-serif;
                  }
                `}
            </style>
            <Layout>
                <GdprBanner />
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
