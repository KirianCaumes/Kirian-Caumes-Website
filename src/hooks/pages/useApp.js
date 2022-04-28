import { useEffect, useRef, MutableRefObject } from 'react'
import getConfig from 'next/config'
import { useRouter } from 'next/router'

/**
 * Use App hook
 * @returns {{}} Returns
 */
export default function useApp() {
    const { publicRuntimeConfig } = getConfig()
    const router = useRouter()

    /** @type {MutableRefObject<NodeJS.Timeout>} */
    const timer = useRef(null)

    // Add component on the top of the page
    useEffect(() => {
        document.querySelector('html').parentNode.insertBefore(
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
