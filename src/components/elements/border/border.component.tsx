import classNames from 'classnames'
import React from 'react'
import styles from 'components/elements/border/border.module.scss'

export interface BorderProps {
    /** Color */
    readonly color?: 'white' | 'grey'
    /** Position */
    readonly position?: 'top' | 'bottom'
}

/**
 * A border for div
 * @returns JSX.Element
 */
export default function Border({ color = 'grey', position = 'bottom' }: BorderProps) {
    return (
        <svg
            aria-hidden="true"
            className={classNames(styles.border, styles[`is-${color}`], styles[`is-${position}`])}
            preserveAspectRatio="none"
            viewBox="0 0 500 150"
        >
            <path d="M-0.57,105.08 C185.66,157.40 319.98,156.40 501.12,107.07 L500.00,150.00 L0.00,150.00 Z" />
        </svg>
    )
}
