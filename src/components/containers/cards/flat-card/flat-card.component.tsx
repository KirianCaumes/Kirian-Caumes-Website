import styles from 'components/containers/cards/flat-card/flat-card.module.scss'
import classNames from 'classnames'
import Image from 'next/image'

export type SkillRowType = {
    /** title */
    title: string
    /** score */
    score: number
}

export type FlatCardProps = {
    /** imageSrc */
    imageSrc: string
    /** title */
    title: string
    /** content */
    content: React.ReactElement
    /** align */
    align?: 'center' | 'justify'
}

/**
 * A skill card
 */
export default function FlatCard({ imageSrc, title, content, align = 'justify' }: FlatCardProps): React.ReactElement {
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
            <p className={classNames(styles['flatcard-content'], styles[`is-content-${align}`])}>{content}</p>
        </div>
    )
}
