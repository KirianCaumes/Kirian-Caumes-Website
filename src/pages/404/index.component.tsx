import React from 'react'
import Head from 'next/head'
import styles from 'pages/404/index.module.scss'
import useNotFound from 'pages/404/index.hook'
import { Container } from 'components/containers'
import { Emoji, Title } from 'components/elements'
import { Button } from 'components/inputs'

/**
 * 404 page
 * @returns {JSX.Element} Content
 */
export default function My404() {
    const { title, router } = useNotFound()

    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta
                    name="description"
                    content="404 not found."
                />
                <meta
                    name="robots"
                    content="noindex"
                />
            </Head>

            <main className={styles['not-found']}>
                <Container>
                    <Emoji
                        label="sad"
                        emoji="🤷‍♀️"
                    />
                    <Title
                        level={1}
                    >
                        Non trouvée (404)
                    </Title>
                    <p>
                        La page que vous chercher n'a hélas pas été trouvée.
                        <br />
                        Vous pouvez revenir en arrière ou visiter la (superbe) page d'accueil.
                    </p>
                    <div>
                        <Button
                            onClick={() => router.back()}
                        >
                            Revenir en arrière
                        </Button>
                        &nbsp;
                        <Button
                            href="/"
                        >
                            Page d'accueil
                        </Button>
                    </div>
                </Container>
            </main>
        </>
    )
}
