import React, { useEffect, useRef } from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import 'styles/index.scss'
import Layout from 'components/layout'
import getConfig from 'next/config'
import GdprBanner from 'components/layout/gdprBanner'
import TagManager from 'react-gtm-module'
import { useRouter } from 'next/router'

/**
 * Base layout
 * @param {AppProps} props 
 * {@link https://nextjs.org/docs/advanced-features/custom-app}
 */
export default function MyApp({ Component, pageProps }) {
    const { publicRuntimeConfig } = getConfig()
    const router = useRouter()
    const timer = useRef(null)

    //Add component on the top of the page
    useEffect(() => {
        document.querySelector('html').parentNode.insertBefore(
            document.createComment(publicRuntimeConfig.appComment),
            document.querySelector('html')
        )
    }, [publicRuntimeConfig])

    // Google Tag Manager
    useEffect(() => {
        if (process.env.NODE_ENV !== 'development' && !!publicRuntimeConfig.gtmId)
            TagManager.initialize({ gtmId: publicRuntimeConfig.gtmId })
    }, [publicRuntimeConfig])

    /**
     * Workaround to disabled smooth scroll 
     * {@link https://github.com/vercel/next.js/issues/20125}
     */
    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            document.documentElement.setAttribute("data-scroll-behavior", "auto")
        })
        router.events.on('routeChangeComplete', () => {
            clearTimeout(timer.current)
            timer.current = setTimeout(() =>
                document.documentElement.removeAttribute("data-scroll-behavior"),
                100
            )
        })
        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    return (
        <Layout>
            <GdprBanner />
            <Component {...pageProps} />
        </Layout>
    )
}