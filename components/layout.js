import React from 'react'
// @ts-ignore
import styles from 'styles/components/layout.module.scss'
import Container from './containers/container'
import Navbar from './layout/navbar'
import Link from 'next/link'
import getConfig from 'next/config'
import Img from './elements/img'

/**
 * App layout
 * @param {object} props
 * @param {React.ReactNode} props.children Children 
 */
export default function Layout({ children }) {
    const { publicRuntimeConfig } = getConfig()

    return (
        <div className={styles['layout']}>
            <header>
                <Container>
                    <Navbar
                        itemHome={{
                            href: "/#intro",
                            children: <Img
                                // @ts-ignore
                                src={require(`public/icons/favicon-96x96.png?resize`)}
                                // @ts-ignore
                                srcWebp={require(`public/icons/favicon-96x96.png?resize&format=webp`)}
                                alt="kiriancaumes"
                                width={19}
                                height={19}
                                isZoomable={false}
                            />
                        }}
                        itemsMain={[
                            {
                                href: "/#about",
                                children: "A propos"
                            },
                            {
                                href: "/#skills",
                                children: "Compétences"
                            },
                            {
                                href: "/#career",
                                children: "Parcours"
                            },
                            {
                                href: "/#productions",
                                children: "Réalisations"
                            },
                            {
                                href: "/#passions",
                                children: "Passions"
                            }
                        ]}
                        itemsEnd={[
                            {
                                href: "/#contact",
                                children: "Contact"
                            }

                        ]}
                    />
                </Container>
            </header>
            {children}
            <footer>
                <Container>
                    <p>© {(new Date().getFullYear())} - {publicRuntimeConfig.appName} - <Link href="/mentions-legales"><a>Mentions légales</a></Link></p>
                </Container>
            </footer>
        </div>
    )
}