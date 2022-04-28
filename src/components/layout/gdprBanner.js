import React, { useEffect, useState, useCallback } from 'react'
import styles from 'styles/components/layout/gdpr-banner.module.scss'
import Cookie from 'js-cookie'
import Link from 'next/link'
import Button from 'components/inputs/button'
import ReactGA from 'react-ga4'
import getConfig from 'next/config'

const ACCEPT_COOKIE_NAME = 'accept_cookies'

/**
 * GdprBanner
 * @returns {JSX.Element} Content
 */
export default function GdprBanner() {
    const { publicRuntimeConfig } = getConfig()

    /** Is modal visible */
    const [isVisible, setIsVisible] = useState(false)

    const onAccept = useCallback(() => {
        ReactGA.initialize(publicRuntimeConfig.gtmId, { gaOptions: { cookieFlags: 'SameSite=None;Secure' } })
        ReactGA.send('pageview')
        Cookie.set(ACCEPT_COOKIE_NAME, 'true', {
            expires: 1,
            path: '/',
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'lax',
        })
        setIsVisible(false)
    }, [publicRuntimeConfig.gtmId])

    const onRefuse = useCallback(() => {
        setIsVisible(false)
        Cookie.set(ACCEPT_COOKIE_NAME, 'false')
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

    if (!isVisible)
        return null

    return (
        <div className={styles['gdpr-banner']}>
            <p className={styles['gdpr-banner-content']}>
                Ce site utilise des
                {' '}
                <Link href="/general-conditions">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>cookies</a>
                </Link>
                {' '}
                pour analyser vos préférences de manière anonyme. Vous pouvez les accepter pour nous permettre d'améliorer votre expérience ou les refuser.
            </p>
            <div className={styles['gdpr-banner-buttons']}>
                <Button
                    onClick={() => onAccept()}
                >
                    Accepter les cookies
                </Button>
                <Button
                    onClick={() => onRefuse()}
                >
                    Refuser les cookies
                </Button>
            </div>
        </div>
    )
}
