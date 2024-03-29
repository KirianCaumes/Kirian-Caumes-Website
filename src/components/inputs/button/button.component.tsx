import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import styles from 'components/inputs/button/button.module.scss'
import type { ComponentProps } from 'react'

export interface ButtonProps
    extends Pick<ComponentProps<'div'>, 'children' | 'title' | 'className' | 'aria-label'>,
        Pick<ComponentProps<'a'>, 'rel' | 'href' | 'target'> {
    /** type */
    type?: 'button' | 'submit' | 'reset'
    /** onClick */
    onClick?: (ev: React.MouseEvent<unknown, MouseEvent>) => void
    /** color */
    color?: 'tertiary' | 'secondary' | 'primary' | 'primary-dark'
    /** isFullWidth */
    isFullWidth?: boolean
    /** isDisabled */
    isDisabled?: boolean
    /** isOutlined */
    isOutlined?: boolean
}

/**
 * A button
 */
export default function Button({
    type = 'button',
    onClick = () => null,
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
                className={classNames(
                    styles.button,
                    { [styles['is-fullwidth']]: isFullWidth },
                    { [styles['is-outlined']]: isOutlined },
                    styles[`is-${color}`],
                    className,
                )}
                onClick={onClick}
                rel={rel}
                target={target}
                title={title}
                href={href}
                aria-label={ariaLabel}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            className={classNames(
                styles.button,
                { [styles['is-fullwidth']]: isFullWidth },
                { [styles['is-outlined']]: isOutlined },
                styles[`is-${color}`],
                className,
            )}
            // eslint-disable-next-line react/button-has-type
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            title={title}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    )
}
