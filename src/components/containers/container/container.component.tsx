import React from 'react'
import classNames from 'classnames'
import styles from 'components/containers/container/container.module.scss'
import type { ComponentProps } from 'react'

export interface ContainerProps extends Pick<ComponentProps<'p'>, 'children' | 'className'> {}

/**
 * A container for element
 */
export default function Container({ children, className }: ContainerProps): React.ReactElement {
    return <div className={classNames(styles.container, className)}>{children}</div>
}
