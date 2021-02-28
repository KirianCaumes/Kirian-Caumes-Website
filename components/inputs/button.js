import React from 'react'
// @ts-ignore
import styles from 'styles/components/inputs/button.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

/**
 * A button
 * @param {object} props
 * @param {"button" | "submit" | "reset"=} props.type Type
 * @param {function(React.MouseEvent<any, MouseEvent>)=} props.onClick On click
 * @param {'yellow' | 'pink' | 'purple' | 'blue'=} props.color Color
 * @param {boolean=} props.isFullWidth Is full width
 * @param {boolean=} props.isDisabled Is disabled
 * @param {boolean=} props.isOutlined Is with outline
 * @param {string=} props.href Href
 * @param {string=} props.rel Rel
 * @param {string=} props.target Target
 * @param {React.ReactNode} props.children Children
 */
export default function Button({
    type = "button",
    onClick = () => null,
    color = "blue",
    isFullWidth,
    isDisabled,
    isOutlined,
    href,
    rel = "noopener",
    target,
    children,
}) {
    /** Button element */
    const Btn = !!href && !isDisabled ? 'a' : 'button'

    const element = <Btn
        className={classNames(styles['button'], { [styles['is-fullwidth']]: isFullWidth }, { [styles['is-outlined']]: isOutlined }, styles[`is-${color}`])}
        type={type}
        onClick={onClick}
        disabled={isDisabled}
        rel={rel}
        target={target}
    >
        {children}
    </Btn>

    if (href)
        return (
            <Link href={href}>
                {element}
            </Link>
        )
    else
        return element
}