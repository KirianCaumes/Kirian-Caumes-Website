import React from 'react'
// @ts-ignore
import styles from 'styles/components/containers/cards/iconcard.module.scss'
import classNames from 'classnames'

/**
 * A card with icon
 * @param {object} props
 * @param {any} props.icon Icon
 * @param {string} props.title Title
 * @param {string | React.ReactNode} props.content Content
 * @param {'yellow' | 'pink' | 'purple' | 'blue'} props.color Color
 * @param {boolean=} props.isIconBorder Is icon with border
 * @param {'center' | 'justify'=} props.align Align
 */
export default function IconCard({ icon, title, content, color, isIconBorder = false, align = "justify" }) {
    return (
        <div className={styles['iconcard']}>
            <div
                className={classNames(styles['iconcard-icon'], styles[`is-${color}`], { [styles[`is-icon-border`]]: isIconBorder })}
            >
                {icon}
            </div>
            <div
                className={classNames(styles['iconcard-body'], styles[`is-${color}`])}
            >
                <p
                    className={styles['iconcard-title']}
                >
                    {title}
                </p>
                <p
                    className={classNames(styles['iconcard-content'], styles[`is-content-${align}`])}
                >
                    {content}
                </p>
            </div>
        </div>
    )
}



