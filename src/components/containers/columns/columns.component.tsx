import React from 'react'
import classNames from 'classnames'
import styles from 'components/containers/columns/columns.module.scss'
import type { ComponentProps } from 'react'

export interface ColumnsProps extends Pick<ComponentProps<'div'>, 'className'> {
    /** children */
    children: React.ReactNode
}

/**
 * A columns
 */
function Columns({ children, className }: ColumnsProps): React.ReactElement {
    return <div className={classNames(styles.columns, className)}>{children}</div>
}

export interface ColumnProps extends Pick<ComponentProps<'p'>, 'children' | 'className'> {
    /** Align */
    align?: 'left' | 'center' | 'right'
    /** Vertical align */
    vAlign?: 'top' | 'center' | 'bottom'
    /** Sizes */
    sizes?: Array<
        | 'full'
        | 'three-quarters'
        | 'two-thirds'
        | 'half'
        | 'one-third'
        | 'one-quarter'
        | 'one-fifth'
        | 'two-fifths'
        | 'three-fifths'
        | 'four-fifths'
        | 'full-tablet'
        | 'three-quarters-tablet'
        | 'two-thirds-tablet'
        | 'half-tablet'
        | 'one-third-tablet'
        | 'one-quarter-tablet'
        | 'one-fifth-tablet'
        | 'two-fifths-tablet'
        | 'three-fifths-tablet'
        | 'four-fifths-tablet'
        | 'full-desktop'
        | 'three-quarters-desktop'
        | 'two-thirds-desktop'
        | 'half-desktop'
        | 'one-third-desktop'
        | 'one-quarter-desktop'
        | 'one-fifth-desktop'
        | 'two-fifths-desktop'
        | 'three-fifths-desktop'
        | 'four-fifths-desktop'
        | 'full-widescreen'
        | 'three-quarters-widescreen'
        | 'two-thirds-widescreen'
        | 'half-widescreen'
        | 'one-third-widescreen'
        | 'one-quarter-widescreen'
        | 'one-fifth-widescreen'
        | 'two-fifths-widescreen'
        | 'three-fifths-widescreen'
        | 'four-fifths-widescreen'
    >
}

/**
 * A column
 */
Columns.Column = function Column({
    align = 'left',
    vAlign = undefined,
    sizes = [],
    className = '',
    children = undefined,
}: ColumnProps): JSX.Element {
    return (
        <div
            className={classNames(
                styles.column,
                className,
                { [styles[`is-${align}`]]: align },
                { [styles[`is-v-${vAlign!}`]]: !!vAlign },
                ...(sizes?.map(size => [styles[`is-${size}`]]) ?? [{}]),
            )}
        >
            {children}
        </div>
    )
}
export default Columns
