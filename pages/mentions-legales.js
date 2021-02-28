import React from "react"
import Head from "next/head"
// @ts-ignore
import styles from "styles/pages/mentions-legales.module.scss"
import getConfig from 'next/config'
import Container from "components/containers/container"

/**
 * Mentios légales page
 */
export default function MentionsLegales() {
    const { publicRuntimeConfig } = getConfig()

    return (
        <>
            <Head>
                <title>Mentions legales - {publicRuntimeConfig.appName}</title>
                <meta
                    name="description"
                    content={`Mentions legales du site ${publicRuntimeConfig.appName}`}
                />
                <meta name="robots" content="noindex" />
            </Head>

            <main className={styles['mentions-legales']}>
                <Container>
                    ...Mentions legales
                </Container>
            </main>
        </>
    )
}