import { useEffect, useState, useCallback } from 'react'
import Cookie from 'js-cookie'
import ReactGA from 'react-ga4'
import getConfig from 'next/config'
import type { PublicRuntimeConfigType } from 'types'

const ACCEPT_COOKIE_NAME = 'accept_cookies'

export type UseGdprBannerHookReturns = {
    /** isVisible */
    isVisible: boolean
    /** onAccept */
    onAccept: () => void
    /** onRefuse */
    onRefuse: () => void
}

/**
 * GdprBanner
 */
export default function useGdprBanner(): UseGdprBannerHookReturns {
    const { publicRuntimeConfig } = getConfig() as {
        /** PublicRuntimeConfig */
        publicRuntimeConfig: PublicRuntimeConfigType
    }

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
    }, [publicRuntimeConfig.gtmId])

    const onRefuse = useCallback(() => {
        setIsVisible(false)
        Cookie.set(ACCEPT_COOKIE_NAME, 'false', { expires: 99999 })
        Cookie.remove('_ga')
        Cookie.remove('_gat')
        Cookie.remove('_gid')
    }, [])

    useEffect(() => {
        const cookie = Cookie.get(ACCEPT_COOKIE_NAME)

        if (!cookie)
            setIsVisible(true)

        if (cookie === 'true')
            onAccept()
    }, [onAccept])

    return {
        isVisible,
        onAccept,
        onRefuse,
    }
}
