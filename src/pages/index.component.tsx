/* eslint-disable max-len */

import React from 'react'
import Head from 'next/head'
import styles from 'pages/index.module.scss'
import classNames from 'classnames'
import { Fade as RevealFade } from 'react-awesome-reveal'
import Link from 'next/link'
import useIndex from 'pages/index.hook'
import { Columns, Container, Tag } from 'components/containers'
import { Border, Icon, Title } from 'components/elements'
import { Button } from 'components/inputs'
import Image from 'next/image'
import {
    CareerCard, FlatCard, Skillcard, IconCard,
} from 'components/containers/cards'

const Fade = RevealFade as React.FC<import('react-awesome-reveal').FadeProps & {
    /** Children */
    children: React.ReactNode
}>

/**
 * Home page
 */
export default function Index(): JSX.Element {
    const { publicRuntimeConfig, age } = useIndex()

    return (
        <>
            <Head>
                <title>{publicRuntimeConfig.appTitle}</title>
                <meta
                    name="description"
                    content={publicRuntimeConfig.appDescription}
                />
                <script
                    type="application/ld+json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org/',
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                {
                                    '@type': 'ListItem',
                                    position: 1,
                                    name: publicRuntimeConfig.appName,
                                    item: publicRuntimeConfig.appUrl,
                                },
                            ],
                        }),
                    }}
                />
            </Head>

            <main
                className={styles['index-page']}
            >
                <div
                    id="intro"
                    className={classNames(styles.row, styles['row-intro'])}
                >
                    <Container>
                        <Title
                            level={1}
                        >
                            Kirian CAUMES
                        </Title>
                        <Columns>
                            <Columns.Column>
                                <p>
                                    Développeur full stack âgé de
                                    {' '}
                                    <b>
                                        {age}
                                        {' '}
                                        ans
                                    </b>
                                    , je suis situé aux abords de la ville de
                                    {' '}
                                    <b>Nantes</b>
                                    {' '}
                                    et titulaire du
                                    {' '}
                                    <b>permis B</b>
                                    .
                                    <br />
                                    <br />
                                    Dans le domaine de l'informatique depuis maintenant plus de 5 ans, mes études à Ynov Nantes avec l'obtention de mon mastère «
                                    {' '}
                                    <b>Expert Développement Web</b>
                                    {' '}
                                    » et du titre RNCP «
                                    {' '}
                                    <b>Expert Informatique et Systèmes d'Information</b>
                                    {' '}
                                    », ainsi que mon
                                    {' '}
                                    <Link href="/#career">
                                        parcours professionnel
                                    </Link>
                                    , m'ont permis l'acquisition de
                                    {' '}
                                    <Link href="/#skills">
                                        compétences
                                    </Link>
                                    {' '}
                                    solides et adaptatives.
                                    <br />
                                    <br />
                                    Ce savoir-faire technique, acquis également grâce à ma bonne compréhension de l'
                                    <b>anglais</b>
                                    , se sera exprimé autour de la réalisation (notamment) d'
                                    <b>applications web métier</b>
                                    {' '}
                                    mais aussi de la
                                    {' '}
                                    <b>gestion de projets</b>
                                    {' '}
                                    et de la
                                    {' '}
                                    <b>relation client</b>
                                    .
                                    <br />
                                    <br />
                                </p>
                                <br />
                                <Columns>
                                    <Columns.Column>
                                        <Button
                                            href="/documents/Kirian-CAUMES-CV.pdf"
                                            rel="noopener"
                                            target="_blank"
                                            color="yellow"
                                            isFullWidth
                                        >
                                            Mon CV *
                                        </Button>
                                        <p className={classNames(styles['last-update'])}>
                                            * Dernière mise à jour : janvier 2018
                                        </p>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Button
                                            href="/#contact"
                                            color="purple"
                                            isFullWidth
                                        >
                                            Me contacter
                                        </Button>
                                    </Columns.Column>
                                </Columns>
                                <a
                                    href="https://www.linkedin.com/in/kirian-caumes"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="Linkedin"
                                    title="Linkedin"
                                >
                                    <Icon
                                        name="linkedin"
                                        isColored
                                    />
                                </a>
                                <a
                                    href="https://github.com/KirianCaumes"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="Github"
                                    title="Github"
                                >
                                    <Icon
                                        name="github"
                                        isColored
                                    />
                                </a>
                                <a
                                    href="https://medium.com/@kirian.caumes"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="Medium"
                                    title="Medium"
                                >
                                    <Icon
                                        name="medium"
                                        isColored
                                    />
                                </a>
                            </Columns.Column>
                            <Columns.Column
                                align="center"
                            >
                                <Fade
                                    direction="right"
                                    triggerOnce
                                >
                                    <Image
                                        src="/images/kirian_caumes.jpg"
                                        alt="kirian caumes"
                                        width={300}
                                        height={300}
                                    />
                                </Fade>
                            </Columns.Column>
                        </Columns>
                    </Container>
                    <Border />
                </div>
                <div
                    id="about"
                    className={classNames(styles.row, styles['row-about'])}
                >
                    <Container>
                        <Title
                            level={2}
                            isCentered
                        >
                            À propos de moi
                        </Title>
                        <Title
                            level={3}
                            isSubtitle
                            isCentered
                        >
                            Quelques traits de caractères
                        </Title>
                        <br />

                        <Columns>
                            <Columns.Column>
                                <Fade
                                    direction="left"
                                    triggerOnce
                                    className={styles['row-about-fade-container']}
                                >
                                    <IconCard
                                        iconName="balloon_laughing"
                                        title="Sérieux sans se prendre au sérieux"
                                        content="Sérieux dans le travail, mais avec une pointe d'humour suffisante pour rendre une journée moins monotone."
                                        color="yellow"
                                        isIconBorder
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <Fade
                                    direction="up"
                                    triggerOnce
                                    className={styles['row-about-fade-container']}
                                >
                                    <IconCard
                                        iconName="balloon_naughty"
                                        title="Calme mais pas amorphe"
                                        content="Concentré sur un projet pour qu'il puisse aboutir, sans être un simple robot uniquement coincé derrière son écran."
                                        color="pink"
                                        isIconBorder
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <Fade
                                    direction="right"
                                    triggerOnce
                                    className={styles['row-about-fade-container']}
                                >
                                    <IconCard
                                        iconName="balloon_dead"
                                        title="Passionné et patient"
                                        content="Mordu depuis plusieurs années par l'informatique, savoir faire face à des problèmes et s'impliquer pour les résoudre est un objectif du quotidien."
                                        color="purple"
                                        isIconBorder
                                    />
                                </Fade>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </div>
                <div
                    id="skills"
                    className={classNames(styles.row, styles['row-skills'])}
                >
                    <Container>
                        <Title
                            level={2}
                            isCentered
                        >
                            Mes compétences
                        </Title>
                        <Title
                            level={3}
                            isSubtitle
                            isCentered
                        >
                            Mon savoir-faire (non exhaustif) de développeur full stack
                        </Title>
                        <br />
                        <Fade
                            direction="up"
                            triggerOnce
                            className={styles['row-skills-fade-container']}
                        >
                            <Columns>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <Skillcard
                                        title={[
                                            'NodeJs',
                                            'Javascript/Typescript',
                                        ]}
                                        score={4}
                                        rows={[
                                            { title: 'Express', score: 4 },
                                            { title: 'Nest', score: 4 },
                                            { title: 'ORM (Mongoose/Prisma/TypeOrm)', score: 4 },
                                            { title: 'Playwright/Puppeteer', score: 3 },
                                            { title: 'Jest', score: 3 },
                                            { title: 'Babel', score: 3 },
                                        ]}
                                        color="yellow"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <Skillcard
                                        title={['FrontEnd', 'Framework JS']}
                                        score={4}
                                        rows={[
                                            { title: 'Vanilla', score: 4 },
                                            { title: 'React', score: 4 },
                                            { title: 'Next.js', score: 3 },
                                            { title: 'Angular', score: 2 },
                                            { title: 'jQuery', score: 2 },
                                            { title: 'VueJs', score: 1 },
                                        ]}
                                        color="yellow"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <Skillcard
                                        title="BDD"
                                        score={3}
                                        rows={[
                                            { title: 'TSQL', score: 3 },
                                            { title: 'MySQL', score: 3 },
                                            { title: 'MongoDB', score: 3 },
                                            { title: 'PostgreSQL', score: 3 },
                                            { title: 'SQLite', score: 2 },
                                            { title: 'ElasticSearch', score: 2 },
                                        ]}
                                        color="yellow"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <Skillcard
                                        title=".NET Core"
                                        score={2}
                                        rows={[
                                            { title: 'C#', score: 3 },
                                            { title: 'AspNetCore.Mvc', score: 3 },
                                            { title: 'Entity Framework', score: 3 },
                                        ]}
                                        color="yellow"
                                    />
                                </Columns.Column>
                            </Columns>
                        </Fade>
                        <Fade
                            direction="up"
                            triggerOnce
                            className={styles['row-skills-fade-container']}
                        >
                            <Columns>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <Skillcard
                                        title="HTML/CSS"
                                        score={4}
                                        rows={[
                                            { title: 'Bulma', score: 4 },
                                            { title: 'Bootstrap', score: 2 },
                                            { title: 'Material Design', score: 1 },
                                            { title: 'Web component', score: 1 },
                                        ]}
                                        color="pink"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <Skillcard
                                        title="CSS"
                                        score={4}
                                        rows={[
                                            { title: 'SCSS', score: 4 },
                                            { title: 'Sass', score: 4 },
                                            { title: 'Less', score: 1 },
                                        ]}
                                        color="pink"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <Skillcard
                                        title={['Deno', 'Typescript']}
                                        score={3}
                                        rows={[
                                            { title: 'Computed Types', score: 4 },
                                            { title: 'Oak', score: 3 },
                                            { title: 'Djwt', score: 3 },

                                        ]}
                                        color="pink"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <Skillcard
                                        title="PHP"
                                        score={3}
                                        rows={[
                                            { title: 'Symfony 4/5', score: 4 },
                                            { title: 'Wordpress', score: 3 },
                                            { title: 'Doctrine', score: 3 },
                                            { title: 'Twig', score: 3 },
                                            { title: 'PHPUnit', score: 2 },
                                        ]}
                                        color="pink"
                                    />
                                </Columns.Column>
                            </Columns>
                        </Fade>
                        <Fade
                            direction="up"
                            triggerOnce
                            className={styles['row-skills-fade-container']}
                        >
                            <Columns>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <Skillcard
                                        title="Mobile"
                                        score={2}
                                        rows={[
                                            { title: 'PWA', score: 3 },
                                            { title: 'Ionic 3/4', score: 2 },
                                            { title: 'Android Studio', score: 1 },
                                            { title: 'React Native', score: 1 },
                                        ]}
                                        color="purple"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <Skillcard
                                        title="Divers"
                                        score={0}
                                        rows={[
                                            { title: 'Bash', score: 3 },
                                            { title: 'Java', score: 2 },
                                            { title: 'Python', score: 2 },
                                            { title: 'C/C++', score: 1 },
                                            { title: 'Cisco', score: 1 },
                                        ]}
                                        color="purple"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <Skillcard
                                        title="Env."
                                        score={0}
                                        rows={[
                                            { title: 'Heroku', score: 3 },
                                            { title: 'Azure', score: 3 },
                                            { title: 'Ubuntu/Debian', score: 3 },
                                            { title: 'OMV', score: 3 },
                                            { title: 'Win. Server', score: 2 },
                                        ]}
                                        color="purple"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <Skillcard
                                        title="Transverse"
                                        score={0}
                                        rows={[
                                            { title: 'Merise', score: 3 },
                                            { title: 'Agile', score: 3 },
                                            { title: 'UML', score: 2 },
                                        ]}
                                        color="purple"
                                    />
                                </Columns.Column>
                            </Columns>
                        </Fade>
                    </Container>
                </div>
                <div
                    id="career"
                    className={classNames(styles.row, styles['row-career'])}
                >
                    <Container>
                        <Title
                            level={2}
                            isCentered
                        >
                            Mon parcours
                        </Title>
                        <Title
                            level={3}
                            isSubtitle
                            isCentered
                        >
                            La petite histoire de mon cheminent profesionnel
                        </Title>
                        <br />
                        <Fade
                            direction="up"
                            triggerOnce
                        >
                            <>
                                <CareerCard
                                    title="CDI développeur full stack"
                                    location={{
                                        company: 'Nextdecision',
                                        url: 'https://www.next-decision.fr/',
                                        city: 'Nantes',
                                    }}
                                    period={[new Date(2021, 8), new Date()]}
                                    missions={[
                                        {
                                            title: "Développement d'applications web métier",
                                            desc: "Mise en place et maintenance d'applications web : Frontend, Backend (API) et Base de données",
                                        },
                                        {
                                            title: 'Gestion du client',
                                            desc: 'Élaboration de cahiers des charges, TMA, gestion de projets et relation client',
                                        },
                                        {
                                            title: 'Création de programmes/scripts/outils divers',
                                            desc: "Génération de PDF, mise en place d'environnements (Azure, VM), etc.",
                                        },
                                    ]}
                                />
                                <CareerCard
                                    title="Alternance en développement d'applications web (B3 à M2)"
                                    location={{
                                        company: 'Nextdecision',
                                        url: 'https://www.next-decision.fr/',
                                        city: 'Nantes',
                                    }}
                                    period={[new Date(2018, 8), new Date(2021, 8)]}
                                    missions={[
                                        {
                                            title: "Développement d'applications web métier",
                                            desc: "Interventions aux différents niveaux d'une application web : Frontend, Backend (API) et Base de données",
                                        },
                                        {
                                            title: 'Gestion du client',
                                            desc: 'Élaboration de cahiers des charges, TMA, gestion de projets et relation client',
                                        },
                                    ]}
                                />
                                <CareerCard
                                    title="Stage en développement d'applications web (B2)"
                                    location={{
                                        company: 'Nextdecision',
                                        url: 'https://www.next-decision.fr/',
                                        city: 'Nantes',
                                    }}
                                    period={[new Date(2018, 6), new Date(2018, 7)]}
                                    missions={[
                                        {
                                            title: "Développement d'applications web métier",
                                            desc: "Réalisation de fonctionnalités & corrections de bugs d'applications existantes",
                                        },
                                    ]}
                                />
                                <CareerCard
                                    title="Stage en développement web (B1)"
                                    location={{
                                        city: 'Nantes',
                                        company: 'Label Communication',
                                        url: 'https://www.labelcommunication.net/',
                                    }}
                                    period={[new Date(2017, 6), new Date(2017, 7)]}
                                    missions={[
                                        {
                                            title: 'Réalisation de sites vitrines',
                                            desc: 'Apprentissage de Wordpress et son environnement (WooComerce, etc.)',
                                        },
                                    ]}
                                />
                                <CareerCard
                                    title="Diplôme d'expert développement web"
                                    location={{
                                        city: 'Nantes',
                                        company: 'Ynov',
                                        url: 'https://www.ynov.com/campus/nantes/',
                                    }}
                                    period={[new Date(2016, 8), new Date(2021, 7)]}
                                    missions={[
                                        {
                                            title: '2 années de Mastères',
                                            desc: 'Spécialisation expert développement web',
                                        },
                                        {
                                            title: '3 années de Bachelor',
                                            desc: "Apprentissage général de l'informatique : développement, réseau et culture générale",
                                        },
                                    ]}
                                />
                                <CareerCard
                                    title="Diplôme Bac. Scientifique SVT, mention assez bien (13.5/20)"
                                    location={{
                                        city: 'Nantes',
                                        company: 'Lycée Notre-Dame de Toutes-Aides',
                                        url: 'http://ndtoutesaides.fr/',
                                    }}
                                    period={[new Date(2015, 8), new Date(2016, 5)]}
                                    missions={[
                                        {
                                            title: 'Projet Bac ISN (spécialité informatique)',
                                            desc: "Réalisation d'un jeu vidéo sous Processing 3 : 20/20 obtenu",
                                        },
                                    ]}
                                />
                                <CareerCard
                                    title="Stage d'observation (3e, Lycée)"
                                    location={{
                                        city: 'Nantes',
                                        company: 'Parabellum Geographic Insight',
                                        url: 'https://www.pginsight.com/',
                                    }}
                                    period={[new Date(2011, 11)]}
                                    missions={[
                                        {
                                            title: "Observation des métiers de l'informatique",
                                            desc: 'Observation de problématiques réseaux et développements',
                                        },
                                    ]}
                                />
                            </>
                        </Fade>
                    </Container>
                </div>
                <div
                    id="productions"
                    className={classNames(styles.row, styles['row-productions'])}
                >
                    <Container>
                        <Title
                            level={2}
                            isCentered
                        >
                            Un exemple de réalisation ?
                        </Title>
                        <Title
                            level={3}
                            isSubtitle
                            isCentered
                        >
                            Vous êtes en train d'en vivre un
                        </Title>
                        <br />
                        <Columns>
                            <Columns.Column
                                align="center"
                                vAlign="center"
                                sizes={['one-third-desktop', 'full-tablet']}
                            >
                                <Fade
                                    direction="left"
                                    triggerOnce
                                >
                                    <Image
                                        src="/images/website.png"
                                        alt="kiriancaumes.fr"
                                        width={320}
                                        height={180}
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <p>
                                    Le site que vous êtes en train de visiter a été entièrement réalisé par mes soins. Celui-ci repose sur
                                    {' '}
                                    <b>Next.js</b>
                                    {' '}
                                    : un Framework
                                    {' '}
                                    <b>React</b>
                                    {' '}
                                    permettant notamment la mise en place d'un rendu des composants côté serveur ou, dans le cas de ce site, la génération d'application statique.
                                    <br />
                                    Pour un simple projet tel que celui-ci,
                                    {' '}
                                    <b>Next.js</b>
                                    {' '}
                                    est "overkill", et un site sans Framework serait plus optimal. Mais ici, ce choix résulte d'une volonté personnelle de démontrer mes compétences en
                                    {' '}
                                    <b>React</b>
                                    .
                                    <br />
                                    À travers ce projet, une partie de mes compétences auront pu être exprimées. Allant de la phase de
                                    {' '}
                                    <b>conception</b>
                                    {' '}
                                    (recherche d'idées, mockup, etc.) à l'
                                    <b>hébergement</b>
                                    {' '}
                                    (déploiement continu, etc.) en passant bien sûr par la phase de
                                    {' '}
                                    <b>développement</b>
                                    {' '}
                                    (découpage des composants, logique fonctionnelle, etc.).
                                    <br />
                                    <Tag color="blue">#Next.ss</Tag>
                                    <Tag color="blue">#React</Tag>
                                    <Tag color="blue">#SCSS</Tag>
                                    <Tag color="blue">#PWA</Tag>
                                    <Tag color="blue">#Docker</Tag>
                                </p>
                                <br />
                                <Button
                                    href="https://github.com/KirianCaumes/Kirian-Caumes-Website"
                                    color="purple"
                                    isOutlined
                                    rel="noopener"
                                    target="_blank"
                                >
                                    Voir sur Github
                                </Button>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </div>
                <div
                    className={classNames(styles.row, styles['row-quote'])}
                >
                    <figure>
                        <blockquote>
                            Il est parfois sensé d'
                            <strong>être insensé</strong>
                            .
                        </blockquote>
                        <figcaption>
                            Jérémie Belpois,
                            {' '}
                            <cite>
                                <a
                                    href="https://youtu.be/G5Q9CVbo67o?t=1348"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Code Lyoko
                                </a>
                            </cite>
                        </figcaption>
                    </figure>
                    <hr />
                    <p>
                        Une simple locution qui, bien que provenant d'un dessin animé, m'a toujours inspiré et notamment aujourd'hui dans mes projets personnels de développements informatiques.
                        <br />
                        Même si une idée me parait farfelue, peu utile ou encore ayant de faibles chances d'aboutir ; j'aime me lancer des défis et explorer des solutions originales dans le but d'expérimenter mais aussi d'apprendre.
                    </p>
                </div>
                <div
                    id="passions"
                    className={classNames(styles.row, styles['row-passions'])}
                >
                    <Container>
                        <Title
                            level={2}
                            isCentered
                        >
                            Mes passions
                        </Title>
                        <Title
                            level={3}
                            isSubtitle
                            isCentered
                        >
                            Mes passes-temps et hobbies
                        </Title>
                        <br />
                        <Columns>
                            <Columns.Column sizes={['one-third-desktop', 'full-tablet']}>
                                <Fade
                                    direction="left"
                                    triggerOnce
                                >
                                    <FlatCard
                                        imageSrc="/images/handball.jpg"
                                        title="Handball"
                                        content={(
                                            <>
                                                Joueur de Handball au poste de gardien de but, à ma treizième année au club de Thouaré sur Loire, puis de Carquefou.
                                                <br />
                                                <br />
                                                J'y ai développé de vrais liens humains dans un projet d'équipe ayant un objectif commun.
                                                <br />
                                                <br />
                                                Fidèle supporter du HBC Nantes et de l'équipe de France.
                                            </>
                                        )}
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column sizes={['one-third-desktop', 'full-tablet']}>
                                <Fade
                                    direction="up"
                                    triggerOnce
                                >
                                    <FlatCard
                                        imageSrc="/images/ajesterscollection.png"
                                        title="Collections"
                                        content={(
                                            <>
                                                Collectionneur depuis toujours d'objets en tous genres (pièces d'euros, timbres, fèves, jeux vidéo, etc.), j'y voue une véritable passion.
                                                <br />
                                                <br />
                                                Aujourd'hui la collection vers laquelle je suis principalement tourné concerne le groupe de musique In Flames avec un ensemble de CD, vinyl et autres. Je partage également cette passion sur internet sous le pseudonyme :
                                                {' '}
                                                <a
                                                    href="https://www.instagram.com/jesters_collection/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    A Jester's Collection
                                                </a>
                                                .
                                            </>
                                        )}
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column sizes={['one-third-desktop', 'full-tablet']}>
                                <Fade
                                    direction="right"
                                    triggerOnce
                                >
                                    <FlatCard
                                        imageSrc="/images/developpement.jpg"
                                        title="Développement"
                                        content={(
                                            <>
                                                Plus qu'un métier, le développement est également une passion. Je m'amuse fréquemment à développer différents projets, qu'ils soient Open Source, ou bien directement pour mon usage personnel (
                                                <a
                                                    href="https://github.com/KirianCaumes"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Github
                                                </a>
                                                ).
                                                <br />
                                                <br />
                                                Ainsi, je peux me permettre d'expérimenter de mon côté pour proposer des solutions innovantes lors de projets professionnels.
                                            </>
                                        )}
                                    />
                                </Fade>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </div>
                <div
                    id="contact"
                    className={classNames(styles.row, styles['row-contact'])}
                >
                    <Container>
                        <Title
                            level={2}
                            isCentered
                        >
                            Me contacter
                        </Title>
                        <Title
                            level={3}
                            isSubtitle
                            isCentered
                        >
                            Une question ? Un projet ? Contactez moi !
                        </Title>
                        <br />

                        <Columns>
                            <Columns.Column>
                                <Fade
                                    direction="left"
                                    triggerOnce
                                >
                                    <IconCard
                                        iconName="mail"
                                        title="Par mail"
                                        content={(
                                            <a
                                                href="mailto:kirian.caumes@gmail.com"
                                            >
                                                kirian.caumes@gmail.com
                                            </a>
                                        )}
                                        color="pink"
                                        align="center"
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <Fade
                                    direction="right"
                                    triggerOnce
                                >
                                    <IconCard
                                        iconName="linkedin"
                                        title="Par Linkedin"
                                        content={(
                                            <a
                                                href="https://www.linkedin.com/in/kirian-caumes"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                linkedin.com
                                            </a>
                                        )}
                                        color="purple"
                                        align="center"
                                    />
                                </Fade>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </div>
            </main>
        </>
    )
}
