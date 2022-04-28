import React from 'react'
import styles from 'styles/components/containers/container.module.scss'

/**
 * A container for element
 * @param {object} props Props
 * @param {React.ReactNode} props.children Children
 * @returns {JSX.Element} Content
 */
export default function Container({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
