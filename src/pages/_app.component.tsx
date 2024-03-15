import 'styles/index.scss'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Montserrat } from 'next/font/google'
import { useMount, useUnmount } from 'react-use'
import { GdprBanner, Layout } from 'components/layout'
import type { PublicRuntimeConfigType } from 'types'
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
    const { publicRuntimeConfig } = getConfig() as {
        /** PublicRuntimeConfig */
        publicRuntimeConfig: PublicRuntimeConfigType
    }
    const router = useRouter()

    const timer = useRef<NodeJS.Timeout>()

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
            clearTimeout(timer.current)
            timer.current = setTimeout(() => document.documentElement.removeAttribute('data-scroll-behavior'), 100)
        })
    })

    useUnmount(() => {
        clearTimeout(timer.current)
    })

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
