import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * Base component to render base HTML
 * @extends {Document}
 * {@link https://nextjs.org/docs/advanced-features/custom-document}
 */
export default class MyDocument extends Document {
    render() {
        return (
            <Html
                lang="fr"
            >
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/manifest.webmanifest" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <meta name="theme-color" content="#263547" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
