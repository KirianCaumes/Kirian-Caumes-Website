import React, { useEffect, useMemo, useState } from 'react'
import styles from 'styles/components/layout/gdpr-banner.module.scss'
import cookie from 'js-cookie'
import Link from 'next/link'
import Button from 'components/inputs/button'

/**
 * GdprBanner
 * @returns {JSX.Element} Content
 */
export default function GdprBanner() {
    /** Modal */
    const [isVisible, setIsVisible] = useState(false)

    const cookieName = useMemo(() => 'gtb_accept_cookies', [])

    useEffect(() => {
        setIsVisible(!cookie.get(cookieName))
    }, [cookieName])

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
                id="gtb-accept-cookies"
                onSubmit={ev => {
                    ev.preventDefault()
                    setIsVisible(false)
                    cookie.set(
                        cookieName,
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
