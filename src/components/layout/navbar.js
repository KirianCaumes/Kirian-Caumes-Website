import React from 'react'
import styles from 'styles/components/layout/navbar.module.scss'
import classNames from 'classnames'
import useNavbar from 'hooks/components/layout/useNavbar'
import Link from 'next/link'

/**
 * A navbar item
 * @typedef {object} NavbarItem Navbar props
 * @property {string=} href Href
 * @property {React.ReactNode} children Children
 */

/**
 * A navbar
 * @param {object} props Props
 * @param {NavbarItem} props.itemHome Item home
 * @param {NavbarItem[]} props.itemsMain Items main
 * @param {NavbarItem[]=} props.itemsEnd Items end
 * @returns {JSX.Element} Content
 */
export default function Navbar({ itemsMain, itemsEnd, itemHome }) {
    const {
        hash, isOpen, ref, setIsOpen,
    } = useNavbar()

    return (
        <nav
            className={classNames(styles.navbar, { [styles['is-active']]: isOpen })}
            ref={ref}
        >
            <div className={styles['navbar-icon']}>
                <Link
                    href={itemHome.href}
                >
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className={classNames(styles['navbar-item'], { [styles['is-active']]: hash === itemHome.href?.replace('#', '')?.replace('/', '') })}
                    >
                        {itemHome.children}
                    </a>
                </Link>
            </div>
            <div className={styles['navbar-lists']}>
                {[itemsMain, itemsEnd].map((list, y) => (
                    <ul
                        className={styles['navbar-list']}
                        // eslint-disable-next-line react/no-array-index-key
                        key={`navbaritem_list_${y}`}
                    >
                        {list?.map((item, i) => (
                            <li
                                // eslint-disable-next-line react/no-array-index-key
                                key={`navbaritem_${i}`}
                                className={classNames(styles['navbar-item'], { [styles['is-active']]: hash === item.href?.replace('#', '')?.replace('/', '') })}
                            >
                                <Link
                                    href={item.href}
                                >
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a>
                                        {item.children}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
                role="button"
                className={classNames(styles['navbar-burger'], { [styles['is-active']]: isOpen })}
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={() => setIsOpen(!isOpen)}
                aria-label="menu"
                aria-expanded={isOpen}
                tabIndex={0}
            >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </a>
        </nav>
    )
}
