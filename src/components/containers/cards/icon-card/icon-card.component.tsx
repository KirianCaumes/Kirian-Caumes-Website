import React from 'react'
import styles from 'components/containers/cards/icon-card/icon-card.module.scss'
import classNames from 'classnames'
import { Icon } from 'components/elements'

export type IconCardProps = {
    /** iconName */
    iconName: import('components/elements/icon/icon.component').IconNameType
    /** title */
    title: string | string[]
    /** content */
    content: React.ReactElement | string
    /** color */
    color: 'yellow' | 'pink' | 'purple' | 'blue'
    /** isIconBorder */
    isIconBorder?: boolean
    /** align */
    align?: 'center' | 'justify'
}

/**
 * A card with icon
 */
export default function IconCard({
    iconName,
    title,
    content,
    color,
    isIconBorder = false,
    align = 'justify',
}: IconCardProps): React.ReactElement {
    return (
        <div className={styles.iconcard}>
            <div className={classNames(styles['iconcard-icon'], styles[`is-${color}`], { [styles['is-icon-border']]: isIconBorder })}>
                <Icon name={iconName} />
            </div>
            <div className={classNames(styles['iconcard-body'], styles[`is-${color}`])}>
                <p className={styles['iconcard-title']}>{title}</p>
                <p className={classNames(styles['iconcard-content'], styles[`is-content-${align}`])}>{content}</p>
            </div>
        </div>
    )
}
