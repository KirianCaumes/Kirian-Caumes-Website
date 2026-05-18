import React from 'react'
import classNames from 'classnames'
import styles from 'components/containers/cards/icon-card/icon-card.module.scss'
import Title from 'components/elements/title/title.component'
import Icon from 'components/elements/icon/icon.component'
import type { ComponentProps } from 'react'

export interface IconCardProps extends Pick<ComponentProps<'p'>, 'children'> {
    /** IconName */
    readonly iconName: Parameters<typeof Icon>[0]['name']
    /** Title */
    readonly title: ComponentProps<'p'>['children']
    /** Color */
    readonly color: 'tertiary' | 'secondary' | 'primary' | 'primary-dark'
    /** IsIconBorder */
    readonly isIconBorder?: boolean
    /** Align */
    readonly align?: 'center' | 'justify'
}

/**
 * A card with icon
 * @returns JSX.Element
 */
export default function IconCard({ iconName, title, children, color, isIconBorder = false, align = 'justify' }: IconCardProps) {
    return (
        <div className={styles['icon-card']}>
            <div className={classNames(styles['icon-card-icon'], styles[`is-${color}`], { [styles['is-icon-border']]: isIconBorder })}>
                <Icon name={iconName} />
            </div>
            <div className={classNames(styles['icon-card-body'], styles[`is-${color}`])}>
                <Title
                    className={styles['icon-card-title']}
                    isCentered
                    level={4}
                >
                    {title}
                </Title>
                <p className={classNames(styles['icon-card-content'], styles[`is-content-${align}`])}>{children}</p>
            </div>
        </div>
    )
}
