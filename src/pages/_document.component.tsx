import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { publicRuntimeConfig } from 'config'

/**
 * Base component to render base HTML
 * {@link https://nextjs.org/docs/advanced-features/custom-document}
 */
export default class MyDocument extends Document {
    /**
     * Render
     * @returns JSX.Element
     */
    override render() {
        return (
            <Html lang={publicRuntimeConfig.appLang}>
                <Head>
                    <link
                        href="https://kiriancaumes.fr"
                        rel="canonical"
                    />
                    <link
                        href="/favicon.ico"
                        rel="shortcut icon"
                    />
                    <link
                        href="/icon.svg"
                        rel="icon"
                        type="image/svg+xml"
                    />
                    <link
                        href="/apple-touch-icon.png"
                        rel="apple-touch-icon"
                    />
                    <link
                        href="/manifest.webmanifest"
                        rel="manifest"
                    />
                    <meta
                        content={publicRuntimeConfig.appColor}
                        name="theme-color"
                    />

                    <meta
                        content="website"
                        property="og:type"
                    />
                    <meta
                        content={publicRuntimeConfig.appLang}
                        property="og:locale"
                    />
                    <meta
                        content={publicRuntimeConfig.appTitle}
                        property="og:title"
                    />
                    <meta
                        content={publicRuntimeConfig.appDescription}
                        property="og:description"
                    />
                    <meta
                        content={publicRuntimeConfig.appUrl}
                        property="og:url"
                    />
                    <meta
                        content={publicRuntimeConfig.appName}
                        property="og:site_name"
                    />
                    <meta
                        content={`${publicRuntimeConfig.appUrl}/images/kirian_caumes.jpg`}
                        property="og:image"
                    />

                    <meta
                        content={publicRuntimeConfig.appTitle}
                        property="twitter:title"
                    />
                    <meta
                        content={publicRuntimeConfig.appDescription}
                        property="twitter:description"
                    />
                    <meta
                        content="summary"
                        property="twitter:card"
                    />
                    <meta
                        content={`${publicRuntimeConfig.appUrl}/images/kirian_caumes.jpg`}
                        property="twitter:image"
                    />
                    <meta
                        content={publicRuntimeConfig.appUrl}
                        property="twitter:url"
                    />

                    <script
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
                        type="application/ld+json"
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
