/* eslint-disable max-len */
import React from 'react'
import Head from 'next/head'
import styles from 'pages/mentions-legales/index.module.scss'
import Link from 'next/link'
import useMentionsLegalesIndex from 'pages/mentions-legales/index.hook'
import { Title } from 'components/elements'
import { Container } from 'components/containers'

/**
 * Mentios légales page
 */
export default function MentionsLegalesIndexPage(): React.ReactElement {
    const { title, appName } = useMentionsLegalesIndex()

    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta
                    name="description"
                    content={`Mentions legales du site ${appName}`}
                />
                <meta
                    name="robots"
                    content="noindex"
                />
            </Head>

            <main className={styles['mentions-legales']}>
                <Container>
                    <Title
                        level={1}
                    >
                        Mentions légales
                    </Title>
                    <Title
                        level={2}
                    >
                        Présentation du site
                    </Title>
                    <p>
                        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site
                        {' '}
                        <a
                            href="https://kiriancaumes.fr"
                            title="kiriancaumes.fr"
                        >
                            kiriancaumes.fr
                        </a>
                        {' '}
                        l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                    </p>
                    <br />
                    <p>
                        Le présent site est édité par : Kirian CAUMES, personne morale
                        <br />
                        Responsable de la publication : Kirian CAUMES, personne morale, joignable par
                        {' '}
                        <a href="mailto:kirian.caumes@gmail.com">email</a>
                        <br />
                        Hébergeur du site:
                        {' '}
                        <a
                            href="https://www.ovh.com/fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ovh.com
                        </a>
                        , qui est domicilé 2 rue Kellermann / 59100 Roubaix / France et joignable par téléphone au 1007.
                    </p>
                    <br />
                    <Title
                        level={2}
                    >
                        Propriété intellectuelle et contrefaçons
                    </Title>
                    <p>
                        Kirian CAUMES est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment : les textes, les images, les graphismes, le logo, les icônes,...
                    </p>
                    <br />
                    <p>
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Kirian CAUMES.
                    </p>
                    <br />
                    <p>
                        Toute exploitation non autorisée du site ou d'un quelconque élément qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                    </p>
                    <br />
                    <Title
                        level={2}
                    >
                        Cookies et traceurs
                    </Title>
                    <p>
                        Le site internet
                        {' '}
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <Link href="https://kiriancaumes.fr">kiriancaumes.fr</Link>
                        {' '}
                        possède un système de mesure d'audience.
                    </p>
                    <br />
                    <p>
                        En application de la directive européenne dite "paquet télécom", les internautes sont informés et donne leur consentement préalablement à l'insertion de traceurs (plus couramment appelés "cookies"). Les internautes disposent d'une possibilité de choisir de ne pas être tracés lorsqu'ils visitent le site.
                    </p>
                    <br />
                    <p>
                        Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'internaute peut toutefois configurer son navigateur internet pour refuser l'installation des cookies.
                    </p>
                    <br />
                    <Title
                        level={3}
                    >
                        Mesure d'audience
                    </Title>
                    <p>
                        Les cookies de mesure d'audience sont de petits fichiers qui permettent de connaitre et d'analyser les statistiques de trafic sur le site internet : les pages visitées, le nombre de visites, le taux de rebond, la provenance des visites,... Les cookies de mesure d'audience sont totalement anonymes.
                    </p>
                    <br />
                    <p>
                        Sur ce site, c'est la solution Google Analytics qui est utilisée pour mesurer l'audience.
                    </p>
                    <br />
                    <Title
                        level={2}
                    >
                        Liens hypertextes
                    </Title>
                    <p>
                        Ce site internet contient un certain nombre de liens hypertextes vers d'autres sites. Cependant,
                        {' '}
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <Link href="https://kiriancaumes.fr">kiriancaumes.fr</Link>
                        {' '}
                        n'a pas la possibilité de suivre et vérifier le contenu de ces sites, et n'assumera en conséquence aucune responsabilité de ce fait.
                    </p>
                    <br />
                    <Title
                        level={2}
                    >
                        Crédits
                    </Title>
                    <p>
                        Certains éléments du site proviennent de ressources externes libre de droits.
                    </p>
                    <br />
                    <Title
                        level={3}
                    >
                        Images
                    </Title>
                    <ul>
                        <li>
                            <p>
                                Photo de Antonio Batinić :
                                {' '}
                                <a
                                    href="https://www.pexels.com/photo/internet-technologie-ordinateur-texte-4164418/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Pexels
                                </a>
                            </p>
                        </li>
                    </ul>
                    <br />
                    <Title
                        level={3}
                    >
                        Icones
                    </Title>
                    <ul>
                        <li>
                            <p>
                                Balloon Emoticons de AomAm :
                                {' '}
                                <a
                                    href="https://thenounproject.com/aomam/collection/balloon-emoticons-line/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    The Noun Project
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>
                                Letter de Vladimir Belochkin :
                                {' '}
                                <a
                                    href="https://thenounproject.com/search/?q=letter&i=2157680"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    The Noun Project
                                </a>
                            </p>
                        </li>
                    </ul>

                </Container>
            </main>
        </>
    )
}
