import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from 'styles/components/layout/navbar.module.scss'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import onClickOutside from "react-onclickoutside"
import Link from 'next/link'

/**
 * A navbar item
 * @typedef {object} NavbarItem Navbar props
 * @property {string=} href Href
 * @property {React.ReactNode} children Children 
 */

/**
 * A navbar
 * @param {object} props
 * @param {NavbarItem} props.itemHome Item home
 * @param {NavbarItem[]} props.itemsMain Items main
 * @param {NavbarItem[]=} props.itemsEnd Items end
 */
function Navbar({ itemsMain, itemsEnd, itemHome }) {
    /** @type {[boolean, function(boolean):any]} Is burger menu open? */
    const [isOpen, setIsOpen] = useState(!true)
    /** @type {[string, function(string):any]} Hash string selected */
    const [hash, setHash] = useState('')

    const router = useRouter()

    // @ts-ignore
    Navbar.handleClickOutside = () => setIsOpen(false)

    /** Handle init router to setup first hash */
    useEffect(
        () => setHash(router?.asPath?.replace('#', '')?.replace('/', '')),
        [router]
    )

    return (
        <nav className={classNames(styles['navbar'], { [styles['is-active']]: isOpen })}>
            <div className={styles['navbar-icon']}>
                <Link
                    href={itemHome.href}
                >
                    <a
                        className={classNames(styles['navbar-item'], { [styles['is-active']]: hash === itemHome.href?.replace('#', '')?.replace('/', '') })}
                        onClick={() => {
                            setHash(itemHome.href?.replace('#', '')?.replace('/', ''))
                            setIsOpen(false)
                        }}
                    >
                        {itemHome.children}
                    </a>
                </Link>
            </div>
            <div className={styles['navbar-lists']}>
                {[itemsMain, itemsEnd].map((list, y) => (
                    <ul
                        className={styles['navbar-list']}
                        key={`navbaritem_list_${y}`}
                    >
                        {list?.map((item, i) => (
                            <li
                                key={`navbaritem_${i}`}
                                className={classNames(styles['navbar-item'], { [styles['is-active']]: hash === item.href?.replace('#', '')?.replace('/', '') })}
                                onClick={() => {
                                    setHash(item.href?.replace('#', '')?.replace('/', ''))
                                    setIsOpen(false)
                                }}
                            >
                                <Link
                                    href={item.href}
                                >
                                    <a>
                                        {item.children}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            <a
                role="button"
                className={classNames(styles['navbar-burger'], { [styles['is-active']]: isOpen })}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="menu"
                aria-expanded={isOpen}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </nav>
    )
}

export default onClickOutside(Navbar, {
    // @ts-ignore
    handleClickOutside: () => Navbar.handleClickOutside
})