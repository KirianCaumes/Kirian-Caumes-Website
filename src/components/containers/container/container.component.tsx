import React from 'react'
import styles from 'components/containers/container/container.module.scss'

export type ContainerProps = Pick<React.HTMLAttributes<HTMLParagraphElement>, 'children'>

/**
 * A container for element
 */
export default function Container({ children }: ContainerProps): React.ReactElement {
    return <div className={styles.container}>{children}</div>
}
