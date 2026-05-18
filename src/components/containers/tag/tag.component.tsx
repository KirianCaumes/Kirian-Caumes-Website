import React from 'react'
import classNames from 'classnames'
import styles from 'components/containers/tag/tag.module.scss'
import type { ComponentProps } from 'react'

export interface TagProps extends Pick<ComponentProps<'span'>, 'children'> {
    /** Color */
    readonly color: 'tertiary' | 'secondary' | 'primary' | 'primary-dark'
}

/**
 * A tag
 * @returns JSX.Element
 */
export default function Tag({ children, color }: TagProps) {
    return <span className={classNames(styles.tag, styles[`is-${color}`])}>{children}</span>
}
