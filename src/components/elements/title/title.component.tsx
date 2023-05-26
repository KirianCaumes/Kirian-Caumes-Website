import React from 'react'
import classNames from 'classnames'
import styles from 'components/elements/title/title.module.scss'

export type TitleProps = {
    /** level */
    level?: number
    /** isSubtitle */
    isSubtitle?: boolean
    /** isCentered */
    isCentered?: boolean
} & Pick<React.HTMLAttributes<HTMLTitleElement>, 'children'>

/**
 * A title
 */
export default function Title({ level = 2, isSubtitle = false, isCentered = false, children = null }: TitleProps): React.ReactElement {
    /** Title element */
    const El = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

    return (
        <El className={classNames(styles.title, { [styles.subtitle]: isSubtitle }, { [styles['is-centered']]: isCentered })}>{children}</El>
    )
}
