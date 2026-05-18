import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import styles from 'components/layout/navbar/navbar.module.scss'
import useNavbar from 'components/layout/navbar/navbar.hook'

export interface NavbarItem extends Pick<Parameters<typeof Link>[0], 'children'> {
    /** Href */
    href: string
}

export interface NavbarProps {
    /** ItemHome */
    readonly itemHome: NavbarItem
    /** ItemsMain */
    readonly itemsMain: Array<NavbarItem>
    /** ItemsEnd */
    readonly itemsEnd?: Array<NavbarItem>
}

/**
 * A navbar
 * @returns JSX.Element
 */
// eslint-disable-next-line react/require-default-props
export default function Navbar({ itemsMain, itemsEnd, itemHome }: NavbarProps) {
    const { isOpen, ref, toggleIsOpen, onClickLink } = useNavbar()

    return (
        <nav
            className={classNames(styles.navbar, { [styles['is-active']]: isOpen })}
            ref={ref}
        >
            <div className={styles['navbar-icon']}>
                <Link
                    className={classNames(styles['navbar-item'])}
                    href={itemHome.href}
                    onClick={onClickLink}
                >
                    {itemHome.children}
                </Link>
            </div>
            <div className={styles['navbar-lists']}>
                {[itemsMain, itemsEnd].map((list, y) => (
                    <ul
                        className={styles['navbar-list']}
                        // eslint-disable-next-line react/no-array-index-key
                        key={`navbar-item_list_${y}`}
                    >
                        {list?.map((item, i) => (
                            <li
                                className={classNames(styles['navbar-item'])}
                                // eslint-disable-next-line react/no-array-index-key
                                key={`navbar-item_${i}`}
                            >
                                <Link
                                    href={item.href}
                                    onClick={onClickLink}
                                >
                                    {item.children}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            <button
                aria-expanded={isOpen}
                aria-label="menu"
                className={classNames(styles['navbar-burger'], { [styles['is-active']]: isOpen })}
                onClick={toggleIsOpen}
                tabIndex={0}
                type="button"
            >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </button>
        </nav>
    )
}
