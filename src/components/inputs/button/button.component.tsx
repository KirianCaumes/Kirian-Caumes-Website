import React from 'react'
import styles from 'components/inputs/button/button.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

export type ButtonProps = {
    /** type */
    type?: 'button' | 'submit' | 'reset'
    /** onClick */
    onClick?: (ev: React.MouseEvent<unknown, MouseEvent>) => void
    /** color */
    color?: 'yellow' | 'pink' | 'purple' | 'blue'
    /** isFullWidth */
    isFullWidth?: boolean
    /** isDisabled */
    isDisabled?: boolean
    /** isOutlined */
    isOutlined?: boolean
    /** href */
    href?: string
    /** rel */
    rel?: string
    /** target */
    target?: string
    /** title */
    title?: string
    /** children */
    children: React.ReactNode
}

/**
 * A button
 */
export default function Button({
    type = 'button',
    onClick = () => null,
    color = 'blue',
    isFullWidth = false,
    isDisabled = false,
    isOutlined = false,
    href = '',
    rel = 'noopener',
    target = '',
    title = '',
    children,
}: ButtonProps): React.ReactElement {
    if (href && !isDisabled) {
        return (
            <Link
                className={classNames(
                    styles.button,
                    { [styles['is-fullwidth']]: isFullWidth },
                    { [styles['is-outlined']]: isOutlined },
                    styles[`is-${color}`],
                )}
                onClick={onClick}
                rel={rel}
                target={target}
                title={title}
                href={href}
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
            )}
            // eslint-disable-next-line react/button-has-type
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            title={title}
        >
            {children}
        </button>
    )
}
