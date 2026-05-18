import { useState, useCallback } from 'react'
import Cookie from 'js-cookie'
import ReactGA from 'react-ga4'
import { useMount } from 'react-use'
import { publicRuntimeConfig } from 'config'

const ACCEPT_COOKIE_NAME = 'accept_cookies'

/**
 * GdprBanner
 * @returns UseGdprBannerHookReturns
 */
export default function useGdprBanner() {
    /** Is modal visible */
    const [isVisible, setIsVisible] = useState(false)

    const onAccept = useCallback(() => {
        ReactGA.initialize(publicRuntimeConfig.gtmId, { gaOptions: { cookieFlags: 'SameSite=None;Secure' } })
        ReactGA.send('pageview')
        Cookie.set(ACCEPT_COOKIE_NAME, 'true', {
            expires: 99999,
            path: '/',
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'lax',
        })
        setIsVisible(false)
    }, [])

    const onRefuse = useCallback(() => {
        setIsVisible(false)
        Cookie.set(ACCEPT_COOKIE_NAME, 'false', { expires: 99999 })
        Cookie.remove('_ga')
        Cookie.remove('_gat')
        Cookie.remove('_gid')
    }, [])

    useMount(() => {
        const cookie = Cookie.get(ACCEPT_COOKIE_NAME)

        if (!cookie) {
            setIsVisible(true)
        }

        if (cookie === 'true') {
            onAccept()
        }
    })

    return {
        isVisible,
        onAccept,
        onRefuse,
    }
}
