import classNames from 'classnames'
import styles from 'components/containers/cards/contact-card/contact-card.module.scss'
import Icon from 'components/elements/icon/icon.component'
import type { ComponentProps } from 'react'

export interface ContactCardProps {
    /** Icon name */
    readonly iconName: Parameters<typeof Icon>[0]['name']
    /** Title label */
    readonly title: string
    /** Color */
    readonly color: 'primary' | 'secondary' | 'tertiary'
    /** Link properties */
    readonly linkProps: Pick<ComponentProps<'a'>, 'href' | 'rel' | 'target' | 'aria-label' | 'children'>
}

/**
 * A contact card with icon, label and clickable link
 * @returns JSX.Element
 */
export default function ContactCard({
    iconName,
    title,
    color,
    linkProps: { 'aria-label': ariaLabel, href, rel, target, children },
}: ContactCardProps) {
    return (
        <div className={classNames(styles['contact-card'], styles[`is-${color}`])}>
            <span className={classNames(styles['contact-card-icon'], styles[`is-${color}`])}>
                <Icon name={iconName} />
            </span>
            <span className={styles['contact-card-body']}>
                <span className={styles['contact-card-title']}>{title}</span>
                <a
                    aria-label={ariaLabel}
                    className={styles['contact-card-value']}
                    href={href}
                    rel={rel}
                    target={target}
                >
                    {children}
                </a>
            </span>
        </div>
    )
}
