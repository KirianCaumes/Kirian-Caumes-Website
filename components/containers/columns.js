/* eslint-disable max-len */
import React from 'react'
import styles from 'styles/components/containers/columns.module.scss'
import classNames from 'classnames'

/**
 * A columns
 * @param {object} props Props
 * @param {React.ReactNode} props.children Children
 * @returns {JSX.Element} Content
 */
function Columns({ children }) {
    return (
        <div className={styles.columns}>
            {children}
        </div>
    )
}

/**
 * A column
 * @param {object} props Props
 * @param {'left' | 'center' | 'right'=} props.align Align
 * @param {'top' | 'center' | 'bottom'=} props.vAlign Vertical align
 * @param {('full' | 'three-quarters' | 'two-thirds' | 'half' | 'one-third' | 'one-quarter' | 'one-fifth' | 'two-fifths' | 'three-fifths' | 'four-fifths' | 'full-tablet' | 'three-quarters-tablet' | 'two-thirds-tablet' | 'half-tablet' | 'one-third-tablet' | 'one-quarter-tablet' | 'one-fifth-tablet' | 'two-fifths-tablet' | 'three-fifths-tablet' | 'four-fifths-tablet' |  'full-desktop' | 'three-quarters-desktop' | 'two-thirds-desktop' | 'half-desktop' | 'one-third-desktop' | 'one-quarter-desktop' | 'one-fifth-desktop' | 'two-fifths-desktop' | 'three-fifths-desktop' | 'four-fifths-desktop'| 'full-widescreen' |'three-quarters-widescreen' | 'two-thirds-widescreen' | 'half-widescreen' | 'one-third-widescreen' | 'one-quarter-widescreen' | 'one-fifth-widescreen' | 'two-fifths-widescreen' | 'three-fifths-widescreen' | 'four-fifths-widescreen')[]=} props.sizes Sizes
 * @param {React.ReactNode} props.children Children
 * @returns {JSX.Element} Content
 */
Columns.Column = function Column({
    align = 'left', vAlign, sizes = [], children,
}) {
    return (
        <div
            className={classNames(
                styles.column,
                { [styles[`is-${align}`]]: align },
                { [styles[`is-v-${vAlign}`]]: !!vAlign },
                ...sizes?.map(size => [styles[`is-${size}`]]),
            )}
        >
            {children}
        </div>
    )
}

export default Columns
