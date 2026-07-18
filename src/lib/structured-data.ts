import { publicRuntimeConfig } from 'config'

/**
 * Schema.org JSON-LD (WebSite + ProfilePage + Person) injected on the home page.
 * {@link https://schema.org}
 */
export const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': `${publicRuntimeConfig.appUrl}/#website`,
            url: publicRuntimeConfig.appUrl,
            name: publicRuntimeConfig.appName,
            description: publicRuntimeConfig.appDescription,
            inLanguage: publicRuntimeConfig.appLang,
            publisher: { '@id': `${publicRuntimeConfig.appUrl}/#person` },
        },
        {
            '@type': 'ProfilePage',
            '@id': `${publicRuntimeConfig.appUrl}/#webpage`,
            url: publicRuntimeConfig.appUrl,
            name: publicRuntimeConfig.appTitle,
            isPartOf: { '@id': `${publicRuntimeConfig.appUrl}/#website` },
            mainEntity: { '@id': `${publicRuntimeConfig.appUrl}/#person` },
            primaryImageOfPage: { '@id': `${publicRuntimeConfig.appUrl}/#primary-image` },
            inLanguage: publicRuntimeConfig.appLang,
            dateCreated: '2021-01-12',
            // Evaluated at build time, so it tracks the latest deployment (like sitemap.ts's lastModified)
            dateModified: new Date().toISOString().split('T')[0],
        },
        {
            '@type': 'Person',
            '@id': `${publicRuntimeConfig.appUrl}/#person`,
            name: publicRuntimeConfig.appName,
            description: publicRuntimeConfig.appDescription,
            birthDate: '1997-02-21',
            image: {
                '@type': 'ImageObject',
                '@id': `${publicRuntimeConfig.appUrl}/#primary-image`,
                /* cspell:disable-next-line */
                contentUrl: `${publicRuntimeConfig.appUrl}/images/kirian_caumes.jpg`,
                width: 2268,
                height: 2269,
            },
            url: publicRuntimeConfig.appUrl,
            jobTitle: ['Lead Tech', 'Développeur Full Stack'],
            email: 'mailto:kirian.caumes@gmail.com',
            sameAs: ['https://www.linkedin.com/in/kirian-caumes', 'https://github.com/KirianCaumes', 'https://medium.com/@kirian.caumes'],
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Nantes',
                addressRegion: 'Pays de la Loire',
                addressCountry: 'FR',
            },
            knowsLanguage: [
                { '@type': 'Language', name: 'Français' },
                { '@type': 'Language', name: 'Anglais' },
            ],
            knowsAbout: [
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'NestJS',
                'Fastify',
                'REST APIs',
                'PWA',
                'SCSS',
                'Docker',
                'Kubernetes',
                'Microsoft Azure',
                'CI/CD',
                'SEO',
            ],
            alumniOf: [
                {
                    '@type': 'OrganizationRole',
                    alumniOf: {
                        '@type': 'EducationalOrganization',
                        name: 'Nantes Ynov Campus',
                        url: 'https://www.ynov.com/campus/nantes/',
                    },
                    startDate: '2016-09',
                    endDate: '2021-08',
                },
                {
                    '@type': 'OrganizationRole',
                    alumniOf: {
                        '@type': 'EducationalOrganization',
                        name: 'Lycée Notre Dame de Toutes Aides',
                        url: 'https://ndtoutesaides.fr/',
                    },
                    startDate: '2012-09',
                    endDate: '2016-07',
                },
            ],
            hasCredential: [
                {
                    '@type': 'EducationalOccupationalCredential',
                    credentialCategory: 'degree',
                    name: 'Mastère Expert Développement Web',
                    educationalLevel: 'Expert',
                    dateCreated: '2021-08',
                    about: { '@type': 'EducationalOccupationalProgram', name: 'Développeur Web' },
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
                    about: { '@type': 'EducationalOccupationalProgram', name: 'Développeur Informatique' },
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
                    about: { '@type': 'EducationalOccupationalProgram', name: 'Bachelier' },
                    recognizedBy: {
                        '@type': 'CollegeOrUniversity',
                        name: 'Lycée Notre Dame de Toutes Aides',
                        url: 'https://ndtoutesaides.fr/',
                    },
                },
            ],
            worksFor: [
                {
                    '@type': 'OrganizationRole',
                    worksFor: {
                        '@type': 'Organization',
                        name: 'Next Decision',
                        url: 'https://www.next-decision.fr/',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: '8 rue Monteil', // cspell:disable-line
                            postalCode: '44000',
                            addressLocality: 'Nantes',
                            addressRegion: 'Pays de la Loire',
                            addressCountry: 'FR',
                        },
                    },
                    roleName: 'Lead Tech / Développeur Full Stack',
                    startDate: '2018-06',
                },
            ],
        },
    ],
}
