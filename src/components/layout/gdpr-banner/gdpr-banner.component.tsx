import styles from 'components/layout/gdpr-banner/gdpr-banner.module.scss'
import Link from 'next/link'
import useGdprBanner from 'components/layout/gdpr-banner/gdpr-banner.hook'
import { Button } from 'components/inputs'

/**
 * GdprBanner
 */
export default function GdprBanner(): React.ReactElement {
    const { isVisible, onAccept, onRefuse } = useGdprBanner()

    if (!isVisible)
        return null as never

    return (
        <div className={styles['gdpr-banner']}>
            <p className={styles['gdpr-banner-content']}>
                Ce site utilise des
                {' '}
                <Link href="/general-conditions">
                    cookies
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
