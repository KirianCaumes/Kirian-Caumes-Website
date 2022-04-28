import React from 'react'
import styles from 'styles/components/containers/tag.module.scss'
import classNames from 'classnames'

/**
 * A tag
 * @param {object} props Props
 * @param {'yellow' | 'pink' | 'purple' | 'blue'} props.color Color
 * @param {React.ReactNode} props.children Children
 * @returns {JSX.Element} Content
 */
export default function Tag({ children, color }) {
    return (
        <span className={classNames(styles.tag, styles[`is-${color}`])}>
            {children}
        </span>
    )
}
