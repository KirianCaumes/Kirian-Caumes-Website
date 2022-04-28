import React from 'react'
import styles from 'styles/components/inputs/button.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

/**
 * A button
 * @param {object} props Props
 * @param {"button" | "submit" | "reset"=} props.type Type
 * @param {function(React.MouseEvent<any, MouseEvent>)=} props.onClick On click
 * @param {'yellow' | 'pink' | 'purple' | 'blue'=} props.color Color
 * @param {boolean=} props.isFullWidth Is full width
 * @param {boolean=} props.isDisabled Is disabled
 * @param {boolean=} props.isOutlined Is with outline
 * @param {string=} props.href Href
 * @param {string=} props.rel Rel
 * @param {string=} props.target Target
 * @param {string=} props.title Title
 * @param {React.ReactNode} props.children Children
 * @returns {JSX.Element} Content
 */
export default function Button({
    type = 'button',
    onClick = () => null,
    color = 'blue',
    isFullWidth,
    isDisabled,
    isOutlined,
    href,
    rel = 'noopener',
    target,
    title,
    children,
}) {
    /** Button element */
    const Element = !!href && !isDisabled ? 'a' : 'button'

    const element = (
        <Element
            className={classNames(styles.button, { [styles['is-fullwidth']]: isFullWidth }, { [styles['is-outlined']]: isOutlined }, styles[`is-${color}`])}
            type={Element === 'button' ? type : undefined}
            onClick={onClick}
            disabled={isDisabled}
            rel={Element === 'a' ? rel : undefined}
            target={Element === 'a' ? target : undefined}
            title={title}
        >
            {children}
        </Element>
    )

    if (href)
        return (
            <Link href={href}>
                {element}
            </Link>
        )
    return element
}