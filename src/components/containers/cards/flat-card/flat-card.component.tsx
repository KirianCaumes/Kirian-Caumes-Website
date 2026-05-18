import classNames from 'classnames'
import Image from 'next/image'
import styles from 'components/containers/cards/flat-card/flat-card.module.scss'
import Title from 'components/elements/title/title.component'
import type { ComponentProps } from 'react'

export interface FlatCardProps extends Pick<ComponentProps<'p'>, 'children'>, Pick<ComponentProps<'img'>, 'alt'> {
    /** ImageSrc */
    readonly imageSrc: Parameters<typeof Image>[0]['src']
    /** Title */
    readonly title: Parameters<typeof Image>[0]['alt']
    /** Align */
    readonly align?: 'center' | 'justify'
}

/**
 * A skill card
 * @returns JSX.Element
 */
export default function FlatCard({ imageSrc, title, children, align = 'justify', alt }: FlatCardProps) {
    return (
        <div className={styles['flat-card']}>
            <div className={styles['flat-card-image-container']}>
                <Image
                    alt={alt ?? ''}
                    className={styles['flat-card-image-container']}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={imageSrc}
                />
            </div>
            <Title
                className={styles['flat-card-title']}
                level={4}
            >
                {title}
            </Title>
            <p className={classNames(styles['flat-card-content'], styles[`is-content-${align}`])}>{children}</p>
        </div>
    )
}
