import React from 'react'
import Document, {
    Html, Head, Main, NextScript,
} from 'next/document'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

/**
 * Base component to render base HTML
 * @augments {Document}
 * {@link https://nextjs.org/docs/advanced-features/custom-document}
 * @returns {JSX.Element} Content
 */
export default class MyDocument extends Document {
    render() {
        return (
            <Html
                lang={publicRuntimeConfig.appLang}
            >
                <Head>
                    <link
                        rel="icon"
                        href="/favicon.ico"
                    />
                    <link
                        rel="icon"
                        href="/icon.svg"
                        type="image/svg+xml"
                    />
                    <link
                        rel="apple-touch-icon"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="manifest"
                        href="/manifest.webmanifest"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <meta
                        name="theme-color"
                        content={publicRuntimeConfig.appColor}
                    />

                    <meta
                        property="og:type"
                        content="website"
                    />
                    <meta
                        property="og:locale"
                        content={publicRuntimeConfig.appLang}
                    />
                    <meta
                        property="og:title"
                        content={publicRuntimeConfig.appTitle}
                    />
                    <meta
                        property="og:description"
                        content={publicRuntimeConfig.appDescription}
                    />
                    <meta
                        property="og:url"
                        content={publicRuntimeConfig.appUrl}
                    />
                    <meta
                        property="og:site_name"
                        content={publicRuntimeConfig.appName}
                    />
                    <meta
                        property="og:image"
                        content={`${publicRuntimeConfig.appUrl}images/kirian_caumes.jpg`}
                    />

                    <meta
                        property="twitter:title"
                        content={publicRuntimeConfig.appTitle}
                    />
                    <meta
                        property="twitter:description"
                        content={publicRuntimeConfig.appDescription}
                    />
                    <meta
                        property="twitter:card"
                        content="summary"
                    />
                    <meta
                        property="twitter:image"
                        content={`${publicRuntimeConfig.appUrl}images/kirian_caumes.jpg`}
                    />
                    <meta
                        property="twitter:url"
                        content={publicRuntimeConfig.appUrl}
                    />

                    <script
                        type="application/ld+json"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'Person',
                                url: publicRuntimeConfig.appUrl,
                                sameAs: [
                                    'https://www.linkedin.com/in/kirian-caumes-120a0513a/',
                                    'https://github.com/KirianCaumes',
                                ],
                                name: publicRuntimeConfig.appName,
                                birthDate: '1997-02-21',
                                email: 'mailto:kirian.caumes@gmail.com',
                                jobTitle: 'Developer',
                            }),
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
