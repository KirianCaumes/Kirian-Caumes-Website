import classNames from 'classnames'
import Image from 'next/image'
import styles from 'components/containers/cards/flat-card/flat-card.module.scss'

export type FlatCardProps = {
    /** imageSrc */
    imageSrc: Parameters<typeof Image>[0]['src']
    /** title */
    title: Parameters<typeof Image>[0]['alt']
    /** align */
    align?: 'center' | 'justify'
} & Pick<React.HTMLAttributes<HTMLParagraphElement>, 'children'>

/**
 * A skill card
 */
export default function FlatCard({ imageSrc, title, children, align = 'justify' }: FlatCardProps): React.ReactElement {
    return (
        <div className={styles.flatcard}>
            <div className={styles['flatcard-image']}>
                <Image
                    src={imageSrc}
                    alt={title}
                    width={320}
                    height={180}
                />
            </div>
            <p className={styles['flatcard-title']}>{title}</p>
            <p className={classNames(styles['flatcard-content'], styles[`is-content-${align}`])}>{children}</p>
        </div>
    )
}
