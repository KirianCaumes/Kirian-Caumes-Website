import React from 'react'
import styles from 'components/containers/container/container.module.scss'
import type { ComponentProps } from 'react'

export interface ContainerProps extends Pick<ComponentProps<'p'>, 'children'> {}

/**
 * A container for element
 */
export default function Container({ children }: ContainerProps): React.ReactElement {
    return <div className={styles.container}>{children}</div>
}
