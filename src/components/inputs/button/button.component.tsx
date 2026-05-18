import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import styles from 'components/inputs/button/button.module.scss'
import type { ComponentProps } from 'react'

export interface ButtonProps
    extends
        Pick<ComponentProps<'div'>, 'children' | 'title' | 'className' | 'aria-label'>,
        Pick<ComponentProps<'a'>, 'rel' | 'href' | 'target'> {
    /** Type */
    readonly type?: 'button' | 'submit' | 'reset'
    /** OnClick */
    readonly onClick?: (ev: React.MouseEvent<unknown>) => void
    /** Color */
    readonly color?: 'tertiary' | 'secondary' | 'primary' | 'primary-dark'
    /** IsFullWidth */
    readonly isFullWidth?: boolean
    /** IsDisabled */
    readonly isDisabled?: boolean
    /** IsOutlined */
    readonly isOutlined?: boolean
}

/**
 * A button
 * @returns JSX.Element
 */
export default function Button({
    type = 'button',
    // eslint-disable-next-line react/require-default-props
    onClick,
    color = 'primary-dark',
    isFullWidth = false,
    isDisabled = false,
    isOutlined = false,
    href = '',
    rel = 'noopener',
    target,
    title,
    children,
    className,
    'aria-label': ariaLabel,
}: ButtonProps): React.ReactElement {
    if (href && !isDisabled) {
        return (
            <Link
                aria-label={ariaLabel}
                className={classNames(
                    styles.button,
                    { [styles['is-fullwidth']]: isFullWidth },
                    { [styles['is-outlined']]: isOutlined },
                    styles[`is-${color}`],
                    className,
                )}
                href={href}
                onClick={onClick}
                rel={rel}
                target={target}
                title={title}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            aria-label={ariaLabel}
            className={classNames(
                styles.button,
                { [styles['is-fullwidth']]: isFullWidth },
                { [styles['is-outlined']]: isOutlined },
                styles[`is-${color}`],
                className,
            )}
            disabled={isDisabled}
            onClick={onClick}
            title={title}
            // eslint-disable-next-line react/button-has-type
            type={type}
        >
            {children}
        </button>
    )
}
