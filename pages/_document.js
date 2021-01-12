import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * Base component to render base HTML
 * @extends {Document}
 * {@link https://nextjs.org/docs/advanced-features/custom-document}
 */
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html
                lang="fr"
            >
                <Head>
                    <link rel="icon" type="image/png" href="/logo.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
