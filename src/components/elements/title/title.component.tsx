import React from 'react'
import classNames from 'classnames'
import styles from 'components/elements/title/title.module.scss'
import type { ComponentProps } from 'react'

export interface TitleProps extends Pick<ComponentProps<'h1'>, 'children' | 'className'> {
    /** Level */
    readonly level?: number
    /** IsSubtitle */
    readonly isSubtitle?: boolean
    /** IsCentered */
    readonly isCentered?: boolean
}

/**
 * A title
 * @returns JSX.Element
 */
export default function Title({ level = 2, isSubtitle = false, isCentered = false, children = null, className = '' }: TitleProps) {
    /** Title element */
    const El = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

    return (
        <El className={classNames(styles.title, { [styles.subtitle]: isSubtitle }, { [styles['is-centered']]: isCentered }, className)}>
            {children}
        </El>
    )
}
