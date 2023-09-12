import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import styles from 'components/layout/navbar/navbar.module.scss'
import useNavbar from 'components/layout/navbar/navbar.hook'

export interface NavbarItem extends Pick<Parameters<typeof Link>[0], 'children'> {
    /** href */
    href: string
}

export interface NavbarProps {
    /** itemHome */
    itemHome: NavbarItem
    /** itemsMain */
    itemsMain: Array<NavbarItem>
    /** itemsEnd */
    itemsEnd?: Array<NavbarItem>
}

/**
 * A navbar
 */
export default function Navbar({ itemsMain, itemsEnd = [], itemHome }: NavbarProps): React.ReactElement {
    const { hash, isOpen, ref, setIsOpen } = useNavbar()

    return (
        <nav
            className={classNames(styles.navbar, { [styles['is-active']]: isOpen })}
            ref={ref}
        >
            <div className={styles['navbar-icon']}>
                <Link
                    href={itemHome.href}
                    className={classNames(styles['navbar-item'], {
                        [styles['is-active']]: hash === itemHome.href?.replace('#', '')?.replace('/', ''),
                    })}
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
                                // eslint-disable-next-line react/no-array-index-key
                                key={`navbar-item_${i}`}
                                className={classNames(styles['navbar-item'], {
                                    [styles['is-active']]: hash === item.href?.replace('#', '')?.replace('/', ''),
                                })}
                            >
                                <Link href={item.href}>{item.children}</Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            <button
                className={classNames(styles['navbar-burger'], { [styles['is-active']]: isOpen })}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="menu"
                aria-expanded={isOpen}
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
