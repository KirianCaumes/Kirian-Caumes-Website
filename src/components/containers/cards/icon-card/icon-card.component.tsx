import React from 'react'
import classNames from 'classnames'
import styles from 'components/containers/cards/icon-card/icon-card.module.scss'
import { Icon, Title } from 'components/elements'

export type IconCardProps = {
    /** iconName */
    iconName: Parameters<typeof Icon>[0]['name']
    /** title */
    title: React.HTMLAttributes<HTMLParagraphElement>['children']
    /** color */
    color: 'tertiary' | 'secondary' | 'primary' | 'primary-dark'
    /** isIconBorder */
    isIconBorder?: boolean
    /** align */
    align?: 'center' | 'justify'
} & Pick<React.HTMLAttributes<HTMLParagraphElement>, 'children'>

/**
 * A card with icon
 */
export default function IconCard({
    iconName,
    title,
    children,
    color,
    isIconBorder = false,
    align = 'justify',
}: IconCardProps): React.ReactElement {
    return (
        <div className={styles['icon-card']}>
            <div className={classNames(styles['icon-card-icon'], styles[`is-${color}`], { [styles['is-icon-border']]: isIconBorder })}>
                <Icon name={iconName} />
            </div>
            <div className={classNames(styles['icon-card-body'], styles[`is-${color}`])}>
                <Title
                    level={4}
                    isCentered
                    className={styles['icon-card-title']}
                >
                    {title}
                </Title>
                <p className={classNames(styles['icon-card-content'], styles[`is-content-${align}`])}>{children}</p>
            </div>
        </div>
    )
}
