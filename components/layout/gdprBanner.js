import React, { useEffect, useState } from 'react'
import styles from 'styles/components/layout/gdpr-banner.module.scss'
import cookie from 'js-cookie'
import Link from 'next/link'
import Button from 'components/inputs/button'

const COOKIE_NAME = 'kc_accept_cookies'

/**
 * GdprBanner
 * @returns {JSX.Element} Content
 */
export default function GdprBanner() {
    /** Modal */
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(!cookie.get(COOKIE_NAME))
    }, [])

    if (!isVisible || process.env.NODE_ENV === 'development')
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
            <form
                className={styles['gdpr-banner-form']}
                id="kc-accept-cookies"
                onSubmit={ev => {
                    ev.preventDefault()
                    setIsVisible(false)
                    cookie.set(
                        COOKIE_NAME,
                        'true',
                        {
                            expires: 1,
                            path: '/',
                            secure: process.env.NODE_ENV !== 'development',
                            sameSite: 'lax',
                        },
                    )
                }}
            >
                <Button
                    type="submit"
                >
                    Accepter les cookies
                </Button>
                <Button
                    onClick={() => {
                        setIsVisible(false)
                    }}
                >
                    Refuser les cookies
                </Button>
            </form>
        </div>
    )
}
