import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'
import type { PublicRuntimeConfigType } from 'types'

const { publicRuntimeConfig } = getConfig() as {
    /** PublicRuntimeConfig */
    publicRuntimeConfig: PublicRuntimeConfigType
}

/**
 * Base component to render base HTML
 * {@link https://nextjs.org/docs/advanced-features/custom-document}
 */
export default class MyDocument extends Document {
    /**
     * Render
     */
    render() {
        return (
            <Html lang={publicRuntimeConfig.appLang}>
                <Head>
                    <link
                        rel="canonical"
                        href="https://kiriancaumes.fr"
                    />
                    <link
                        rel="shortcut icon"
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
                        content={`${publicRuntimeConfig.appUrl}/images/kirian_caumes.jpg`}
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
                        content={`${publicRuntimeConfig.appUrl}/images/kirian_caumes.jpg`}
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
                                '@context': 'http://schema.org',
                                '@graph': [
                                    {
                                        '@type': 'Person',
                                        name: publicRuntimeConfig.appName,
                                        description: publicRuntimeConfig.appDescription,
                                        birthDate: '1997-02-21',
                                        image: {
                                            '@type': 'ImageObject',
                                            /* cspell:disable-next-line */
                                            contentUrl: `${publicRuntimeConfig.appUrl}/_next/image?url=%2Fimages%2Fkirian_caumes.jpg&w=640&q=75`,
                                        },
                                        url: publicRuntimeConfig.appUrl,
                                        jobTitle: ['Développeur Web Full Stack'],
                                        email: 'mailto:kirian.caumes@gmail.com',
                                        sameAs: [
                                            'https://linkedin.com/in/kirian-caumes',
                                            'https://www.linkedin.com/in/kirian-caumes',
                                            'https://github.com/KirianCaumes',
                                            'https://www.github.com/KirianCaumes',
                                        ],
                                        address: {
                                            '@type': 'PostalAddress',
                                            addressLocality: 'Nantes, France',
                                            addressCountry: 'FRA',
                                        },
                                        knowsLanguage: [
                                            {
                                                '@type': 'Language',
                                                name: 'Français',
                                            },
                                            {
                                                '@type': 'Language',
                                                name: 'Anglais',
                                            },
                                        ],
                                        alumniOf: [
                                            {
                                                '@type': 'EducationalOrganization',
                                                name: 'Nantes Ynov Campus',
                                                url: 'https://www.ynov.com/campus/nantes/',
                                                member: {
                                                    '@type': 'OrganizationRole',
                                                    startDate: '2016-09',
                                                    endDate: '2021-08',
                                                },
                                            },
                                            {
                                                '@type': 'EducationalOrganization',
                                                name: 'Lycée Notre Dame de Toutes Aides',
                                                url: 'https://ndtoutesaides.fr/',
                                                member: {
                                                    '@type': 'OrganizationRole',
                                                    startDate: '2012-09',
                                                    endDate: '2016-07',
                                                },
                                            },
                                        ],
                                        hasCredential: [
                                            {
                                                '@type': 'EducationalOccupationalCredential',
                                                credentialCategory: 'degree',
                                                name: 'Mastère Expert Développement Web',
                                                educationalLevel: 'Expert',
                                                dateCreated: '2021-08',
                                                about: {
                                                    '@type': 'EducationalOccupationalProgram',
                                                    name: 'Développeur Web',
                                                },
                                                recognizedBy: {
                                                    '@type': 'EducationalOrganization',
                                                    name: 'Nantes Ynov Campus',
                                                    url: 'https://www.ynov.com/campus/nantes/',
                                                },
                                            },
                                            {
                                                '@type': 'EducationalOccupationalCredential',
                                                credentialCategory: 'degree',
                                                name: "RNCP: Expert Informatique et Systèmes d'Information",
                                                educationalLevel: 'Expert',
                                                dateCreated: '2021-08',
                                                about: {
                                                    '@type': 'EducationalOccupationalProgram',
                                                    name: 'Développeur Informatique',
                                                },
                                                recognizedBy: {
                                                    '@type': 'EducationalOrganization',
                                                    name: 'France Compétences',
                                                    url: 'https://www.francecompetences.fr/',
                                                },
                                            },
                                            {
                                                '@type': 'EducationalOccupationalCredential',
                                                credentialCategory: 'degree',
                                                name: 'Baccalauréat Scientifique SVT',
                                                dateCreated: '2016-08',
                                                about: {
                                                    '@type': 'EducationalOccupationalProgram',
                                                    name: 'Bachelier',
                                                },
                                                recognizedBy: {
                                                    '@type': 'CollegeOrUniversity',
                                                    name: 'Lycée Notre Dame de Toutes Aides',
                                                    url: 'https://ndtoutesaides.fr/',
                                                },
                                            },
                                        ],
                                        worksFor: [
                                            {
                                                '@type': 'Organization',
                                                name: 'Next Decision',
                                                url: 'https://www.next-decision.fr/',
                                                address: {
                                                    '@type': 'PostalAddress',
                                                    addressLocality: 'Nantes, Pays de la Loire, France',
                                                    addressRegion: 'Pays de la Loire',
                                                    addressCountry: 'FRA',
                                                },
                                                member: {
                                                    '@type': 'OrganizationRole',
                                                    startDate: '2018-06',
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        '@type': 'WebPage',
                                        url: publicRuntimeConfig.appUrl,
                                        reviewedBy: {
                                            '@type': 'Person',
                                            name: 'Kirian Caumes',
                                        },
                                    },
                                ],
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
