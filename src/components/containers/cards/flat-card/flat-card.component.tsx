import classNames from 'classnames'
import Image from 'next/image'
import styles from 'components/containers/cards/flat-card/flat-card.module.scss'
import { Title } from 'components/elements'
import type { ComponentProps } from 'react'

export interface FlatCardProps extends Pick<ComponentProps<'p'>, 'children'>, Pick<ComponentProps<'img'>, 'alt'> {
    /** imageSrc */
    imageSrc: Parameters<typeof Image>[0]['src']
    /** title */
    title: Parameters<typeof Image>[0]['alt']
    /** align */
    align?: 'center' | 'justify'
}

/**
 * A skill card
 */
export default function FlatCard({ imageSrc, title, children, align = 'justify', alt }: FlatCardProps): React.ReactElement {
    return (
        <div className={styles['flat-card']}>
            <div className={styles['flat-card-image-container']}>
                <Image
                    className={styles['flat-card-image-container']}
                    src={imageSrc}
                    alt={alt || ''}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>
            <Title
                level={4}
                className={styles['flat-card-title']}
            >
                {title}
            </Title>
            <p className={classNames(styles['flat-card-content'], styles[`is-content-${align}`])}>{children}</p>
        </div>
    )
}
