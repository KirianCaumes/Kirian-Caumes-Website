import React from "react"
import Head from "next/head"
// @ts-ignore
import styles from "styles/pages/404.module.scss"
import getConfig from 'next/config'
import Container from "components/containers/container"

/**
 * 404 page
 */
export default function My404() {
    const { publicRuntimeConfig } = getConfig()

    return (
        <>
            <Head>
                <title>Not found - {publicRuntimeConfig.appName}</title>
                <meta
                    name="description"
                    content="404 not found."
                />
                <meta name="robots" content="noindex" />
            </Head>

            <main className={styles['not-found']}>
                <Container>
                    ...404
                </Container>
            </main>
        </>
    )
}