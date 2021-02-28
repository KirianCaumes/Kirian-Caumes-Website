import React from 'react'
// @ts-ignore
import styles from 'styles/components/containers/tag.module.scss'
import classNames from 'classnames'

/**
 * A tag
 * @param {object} props
 * @param {'yellow' | 'pink' | 'purple' | 'blue'} props.color Color
 * @param {React.ReactNode} props.children Children
 */
export default function Tag({ children, color }) {
    return (
        <span className={classNames(styles['tag'], styles[`is-${color}`])}>
            {children}
        </span>
    )
}