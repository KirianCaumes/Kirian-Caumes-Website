'use client'

import { useRouter } from 'next/navigation'
import styles from 'views/not-found/index.module.scss'
import Container from 'components/containers/container/container.component'
import Emoji from 'components/elements/emoji/emojis.component'
import Title from 'components/elements/title/title.component'
import Button from 'components/inputs/button/button.component'

/**
 * 404 page content
 * @returns JSX.Element
 */
export default function NotFound() {
    const router = useRouter()

    return (
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
    )
}
