/* eslint-disable global-require */
import React from 'react'
import styles from 'styles/components/layout.module.scss'
import Link from 'next/link'
import useLayout from 'hooks/components/useLayout'
import Container from 'components/containers/container'
import Navbar from 'components/layout/navbar'
import Img from 'components/elements/img'

/**
 * App layout
 * @param {object} props props
 * @param {React.ReactNode} props.children Children
 * @returns {JSX.Element} Content
 */
export default function Layout({ children }) {
    const { publicRuntimeConfig } = useLayout()

    return (
        <div className={styles.layout}>
            <header>
                <Container>
                    <Navbar
                        itemHome={{
                            href: '/#intro',
                            children: <Img
                                src={{
                                    // eslint-disable-next-line import/no-unresolved
                                    normal: require('public/icons/favicon-96x96.png?resize'),
                                    // eslint-disable-next-line import/no-unresolved
                                    webp: require('public/icons/favicon-96x96.png?resize&format=webp'),
                                    // eslint-disable-next-line import/no-unresolved
                                    lqip: require('public/icons/favicon-96x96.png?lqip'),
                                }}
                                alt="kiriancaumes"
                                width={19}
                                height={19}
                                isZoomable={false}
                            />,
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
                        ©
                        {' '}
                        {(new Date().getFullYear())}
                        {' '}
                        -
                        {' '}
                        {publicRuntimeConfig.appName}
                        {' '}
                        -
                        {' '}
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <Link href="/mentions-legales"><a>Mentions légales</a></Link>
                    </p>
                </Container>
            </footer>
        </div>
    )
}
