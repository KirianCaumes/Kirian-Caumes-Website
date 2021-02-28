import React from 'react'
// @ts-ignore
import styles from 'styles/components/containers/container.module.scss'

/**
 * A container for element
 * @param {object} props
 * @param {React.ReactNode} props.children Children
 */
export default function Container({ children }) {
    return (
        <div className={styles['container']}>
            {children}
        </div>
    )
}