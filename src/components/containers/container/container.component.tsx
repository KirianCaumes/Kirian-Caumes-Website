import React from 'react'
import classNames from 'classnames'
import styles from 'components/containers/container/container.module.scss'
import type { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ContainerProps extends Pick<ComponentProps<'p'>, 'children' | 'className'> {}

/**
 * A container for element
 * @returns JSX.Element
 */
export default function Container({ children, className }: ContainerProps) {
    return <div className={classNames(styles.container, className)}>{children}</div>
}
