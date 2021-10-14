import React from 'react'
import Head from 'next/head'
import styles from 'styles/pages/404.module.scss'
import Container from 'components/containers/container'
import Title from 'components/elements/title'
import Button from 'components/inputs/button'
import Emoji from 'components/elements/emojis'
import useNotFound from 'hooks/pages/useNotFound'

/**
 * 404 page
 * @returns {JSX.Element} Content
 */
export default function My404() {
    const { publicRuntimeConfig, router } = useNotFound()

    return (
        <>
            <Head>
                <title>
                    Not found -
                    {' '}
                    {publicRuntimeConfig.appName}
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
