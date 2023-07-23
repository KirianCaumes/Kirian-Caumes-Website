import React from 'react'
import classNames from 'classnames'
import styles from 'components/containers/tag/tag.module.scss'

export type TagProps = {
    /** color */
    color: 'tertiary' | 'secondary' | 'primary' | 'primary-dark'
} & Pick<React.HTMLAttributes<HTMLSpanElement>, 'children'>

/**
 * A tag
 */
export default function Tag({ children, color }: TagProps): React.ReactElement {
    return <span className={classNames(styles.tag, styles[`is-${color}`])}>{children}</span>
}
