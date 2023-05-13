import React from 'react'
import styles from 'components/layout/layout/layout.module.scss'
import Link from 'next/link'
import useLayout from 'components/layout/layout/layout.hook'
import Navbar from 'components/layout/navbar/navbar.component'
import { Container } from 'components/containers'
import Image from 'next/image'

export type LayoutProps = {
    /** Children */
    children: React.ReactNode
}

/**
 * App layout
 */
export default function Layout({ children }: LayoutProps): React.ReactElement {
    const { publicRuntimeConfig } = useLayout()

    return (
        <div className={styles.layout}>
            <header>
                <Container>
                    <Navbar
                        itemHome={{
                            href: '/#intro',
                            children: (
                                <Image
                                    // eslint-disable-next-line global-require, import/no-absolute-path
                                    src={require('/public/icons/favicon-96x96.png')}
                                    alt="Kirian Caumes"
                                    width={19}
                                    height={19}
                                />
                            ),

                            // <Img
                            //     src={{
                            //         // eslint-disable-next-line import/no-absolute-path, import/no-unresolved
                            //         normal: require('/public/icons/favicon-96x96.png?resize'),
                            //         // eslint-disable-next-line import/no-absolute-path, import/no-unresolved
                            //         webp: require('/public/icons/favicon-96x96.png?resize&format=webp'),
                            //         // eslint-disable-next-line import/no-absolute-path, import/no-unresolved
                            //         lqip: require('/public/icons/favicon-96x96.png?lqip'),
                            //     }}
                            //     alt="kiriancaumes"
                            //     width={19}
                            //     height={19}
                            // />,
                        }}
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
                        itemsEnd={[
                            {
                                href: '/#contact',
                                children: 'Contact',
                            },
                        ]}
                    />
                </Container>
            </header>
            {children}
            <footer>
                <Container>
                    <p>
                        © {new Date().getFullYear()} - {publicRuntimeConfig.appName} -{' '}
                        <Link href="/mentions-legales">Mentions légales</Link>
                    </p>
                </Container>
            </footer>
        </div>
    )
}
