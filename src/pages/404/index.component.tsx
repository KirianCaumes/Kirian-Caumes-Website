import React from 'react'
import Head from 'next/head'
import styles from 'pages/404/index.module.scss'
import useNotFound from 'pages/404/index.hook'
import Container from 'components/containers/container/container.component'
import Emoji from 'components/elements/emoji/emojis.component'
import Title from 'components/elements/title/title.component'
import Button from 'components/inputs/button/button.component'

/**
 * 404 page
 * @returns JSX.Element
 */
export default function My404() {
    const { title, router, publicRuntimeConfig } = useNotFound()

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    content="404 not found."
                    name="description"
                />
                <meta
                    content="noindex"
                    name="robots"
                />
                <script
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org/',
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                {
                                    '@type': 'ListItem',
                                    position: 1,
                                    name: title,
                                    item: `${publicRuntimeConfig.appUrl}/404`,
                                },
                            ],
                        }),
                    }}
                    type="application/ld+json"
                />
            </Head>

            <main className={styles['not-found']}>
                <Container>
                    <Emoji
                        emoji="🤷‍♀️"
                        label="sad"
                    />
                    <Title level={1}>Non trouvée (404)</Title>
                    <p>
                        La page que vous chercher n'a hélas pas été trouvée.
                        <br />
                        Vous pouvez revenir en arrière ou visiter la (superbe) page d'accueil.
                    </p>
                    <div>
                        <Button
                            onClick={() => {
                                router.back()
                            }}
                        >
                            Revenir en arrière
                        </Button>
                        &nbsp;
                        <Button href="/">Page d'accueil</Button>
                    </div>
                </Container>
            </main>
        </>
    )
}
