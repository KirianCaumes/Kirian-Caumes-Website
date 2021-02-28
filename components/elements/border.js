import classNames from 'classnames'
import React from 'react'
// @ts-ignore
import styles from 'styles/components/elements/border.module.scss'

/**
 * A border for div
 * @param {object} props
 * @param {'white' | 'grey'=} props.color Color
 * @param {'top' | 'bottom'=} props.position Position
 */
export default function Border({ color = 'grey', position = 'bottom' }) {
    return (
        <svg
            className={classNames(styles['border'], styles[`is-${color}`], styles[`is-${position}`])}
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
        >
            <path
                d="M-0.57,105.08 C185.66,157.40 319.98,156.40 501.12,107.07 L500.00,150.00 L0.00,150.00 Z"
            />
        </svg>
    )
}