import React from 'react'
import styles from 'components/containers/tag/tag.module.scss'
import classNames from 'classnames'

export type TagProps = {
    /** color */
    color: 'yellow' | 'pink' | 'purple' | 'blue'
    /** children */
    children: React.ReactNode
}

/**
 * A tag
 */
export default function Tag({ children, color }: TagProps): React.ReactElement {
    return <span className={classNames(styles.tag, styles[`is-${color}`])}>{children}</span>
}
