import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import styles from 'components/layout/layout/layout.module.scss'
import useLayout from 'components/layout/layout/layout.hook'
import Navbar from 'components/layout/navbar/navbar.component'
import Container from 'components/containers/container/container.component'
import type { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LayoutProps extends Pick<ComponentProps<'div'>, 'children' | 'className'> {}

/**
 * App layout
 * @returns JSX.Element
 */
export default function Layout({ children, className }: LayoutProps) {
    const { publicRuntimeConfig } = useLayout()

    return (
        <div className={classNames(styles.layout, className)}>
            <header>
                <Container>
                    <Navbar
                        itemHome={{
                            href: '/#intro',
                            children: (
                                <Image
                                    alt="Kirian Caumes"
                                    height={19}
                                    src="/icons/favicon-96x96.png"
                                    width={19}
                                />
                            ),

                            // <Img
                            //     Src={{
                            //         // eslint-disable-next-line import/no-absolute-path, import/no-unresolved
                            //         Normal: require('/public/icons/favicon-96x96.png?resize'),
                            //         // eslint-disable-next-line import/no-absolute-path, import/no-unresolved
                            //         Webp: require('/public/icons/favicon-96x96.png?resize&format=webp'),
                            //         // eslint-disable-next-line import/no-absolute-path, import/no-unresolved
                            //         Lqip: require('/public/icons/favicon-96x96.png?lqip'),
                            //     }}
                            //     Alt="kiriancaumes"
                            //     Width={19}
                            //     Height={19}
                            // />,
                        }}
                        itemsEnd={[
                            {
                                href: '/#contact',
                                children: 'Contact',
                            },
                        ]}
                        itemsMain={[
                            {
                                href: '/#about',
                                children: 'A propos',
                            },
                            {
                                href: '/#skills',
                                children: 'Compétences',
                            },
                            {
                                href: '/#career',
                                children: 'Parcours',
                            },
                            {
                                href: '/#productions',
                                children: 'Réalisations',
                            },
                            {
                                href: '/#passions',
                                children: 'Passions',
                            },
                        ]}
                    />
                </Container>
            </header>
            {children}
            <footer>
                <Container>
                    <p>
                        © 2021 - {publicRuntimeConfig.appName} - <Link href="/mentions-legales">Mentions légales</Link>
                    </p>
                </Container>
            </footer>
        </div>
    )
}
