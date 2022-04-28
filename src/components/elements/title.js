import React from 'react'
import styles from 'styles/components/elements/title.module.scss'
import classNames from 'classnames'

/**
 * A title
 * @param {object} props Props
 * @param {number=} props.level Level
 * @param {boolean=} props.isSubtitle Is with subtitle
 * @param {boolean=} props.isCentered Is centered
 * @param {React.ReactNode} props.children Children
 * @returns {JSX.Element} Content
 */
export default function Title({
    level = 2, isSubtitle, isCentered, children,
}) {
    /** Title element */
    const El = /** @type {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} */(`h${level}`)

    return (
        <El
            className={classNames(
                styles.title,
                { [styles.subtitle]: isSubtitle },
                { [styles['is-centered']]: isCentered },
            )}
        >
            {children}
        </El>
    )
}
