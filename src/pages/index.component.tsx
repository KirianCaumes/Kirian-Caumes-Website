import React from 'react'
import Head from 'next/head'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import styles from 'pages/index.module.scss'
import useIndex from 'pages/index.hook'
import { Columns, Container, Fade, Tag } from 'components/containers'
import { Border, Icon, Title } from 'components/elements'
import { Button } from 'components/inputs'
import { CareerCard, FlatCard, SkillCard, IconCard } from 'components/containers/cards'

/**
 * Home page
 */
export default function Index(): JSX.Element {
    const { publicRuntimeConfig, age, workingYears } = useIndex()

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

            <main className={styles['index-page']}>
                <div
                    id="intro"
                    className={classNames(styles['index-page-row'], styles['is-intro'])}
                >
                    <Container>
                        <Title level={1}>Kirian CAUMES</Title>
                        <Columns>
                            <Columns.Column>
                                <p>
                                    Lead Tech / Développeur Full Stack âgé de <em>{age} ans</em>, je suis situé aux abords de la ville de{' '}
                                    <em>Nantes</em> et titulaire du <em>permis B</em>
                                    .
                                    <br />
                                    <br />
                                    Dans le domaine de l'informatique depuis maintenant plus de {workingYears} ans, mon{' '}
                                    <Link href="/#career">parcours professionnel</Link>, ainsi que mes études à Ynov Nantes avec l'obtention
                                    de mon mastère « <em>Expert Développement Web</em> » et du titre RNCP «{' '}
                                    <em>Expert Informatique et Systèmes d'Information</em> », m'ont permis l'acquisition de{' '}
                                    <Link href="/#skills">compétences</Link> solides et adaptatives.
                                    <br />
                                    <br />
                                    Ce savoir-faire technique, acquis également grâce à ma bonne compréhension de l'
                                    <em>anglais</em>, se sera exprimé autour de la réalisation (notamment) d'
                                    <em>applications web métier</em> mais aussi de la <em>gestion de projets</em> et de la{' '}
                                    <em>relation client</em>
                                    .
                                    <br />
                                    <br />
                                </p>
                                <br />
                                <Columns>
                                    <Columns.Column>
                                        <Button
                                            href="/documents/Kirian-CAUMES-CV.pdf"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            aria-label="Kirian-CAUMES-CV.pdf, ouvre dans un nouvel onglet"
                                            color="secondary"
                                            isFullWidth
                                        >
                                            Mon CV *
                                        </Button>
                                        <p className={styles['is-last-update']}>* Dernière mise à jour : janvier 2018</p>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Button
                                            href="/#contact"
                                            color="primary"
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
                                    aria-label="linkedin.com/in/kirian-caumes, ouvre dans un nouvel onglet"
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
                                    aria-label="github.com/KirianCaumes, ouvre dans un nouvel onglet"
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
                                    aria-label="medium.com/@kirian.caumes, ouvre dans un nouvel onglet"
                                    title="Medium"
                                >
                                    <Icon
                                        name="medium"
                                        isColored
                                    />
                                </a>
                            </Columns.Column>
                            <Columns.Column align="center">
                                <Fade
                                    direction="right"
                                    triggerOnce
                                >
                                    <Image
                                        src="/images/kirian_caumes.jpg"
                                        alt="Photo de profil de Kirian Caumes"
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
                    className={classNames(styles['index-page-row'], styles['is-about'])}
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
                                        color="tertiary"
                                        isIconBorder
                                    >
                                        Doté d'un sérieux indéniable dans l'accomplissement de mes tâches professionnelles, j'aime néanmoins
                                        chercher à distiller une légère touche d'humour tout au long de la journée, apportant ainsi une
                                        brise rafraîchissante dans une atmosphère de travail.
                                    </IconCard>
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
                                        color="secondary"
                                        isIconBorder
                                    >
                                        Mon attention est pleinement dédiée à chaque projet pour assurer son succès, tout en préservant un
                                        certain équilibre pour éviter de me confiner à un rôle monotone derrière un écran. L'implication et
                                        une approche humaine sont des aspects que j'estime importants dans mon travail.
                                    </IconCard>
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
                                        color="primary"
                                        isIconBorder
                                    >
                                        Mordu depuis des années par l'informatique, mon objectif quotidien est de faire face aux problèmes
                                        et de m'impliquer activement pour trouver les meilleures solutions. Cette volonté de résoudre les
                                        défis informatiques est au cœur de mes engagements.
                                    </IconCard>
                                </Fade>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </div>
                <div
                    id="skills"
                    className={classNames(styles['index-page-row'], styles['is-skills'])}
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
                            Mon savoir-faire (non exhaustif et ardu à organiser) de développeur
                        </Title>
                        <br />
                        <Fade
                            direction="up"
                            triggerOnce
                            className={styles['row-skills-fade-container']}
                        >
                            <Columns>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <SkillCard
                                        title={['NodeJs', 'JavaScript/TypeScript']}
                                        score={4}
                                        rows={[
                                            { title: 'Nest/Express', score: 4 },
                                            { title: 'ORM (Prisma/Mongoose)', score: 4 },
                                            { title: 'ESLint/Prettier/Stylelint/CSpell', score: 4 },
                                            { title: 'Playwright/Puppeteer', score: 3.5 },
                                            { title: 'Jest', score: 3 },
                                            { title: 'Babel/Rollup/WebPack/SWC', score: 2.5 },
                                        ]}
                                        color="tertiary"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <SkillCard
                                        title={['FrontEnd', 'Framework JS']}
                                        score={4}
                                        rows={[
                                            { title: 'Vanilla (ECMAScript)', score: 4 },
                                            { title: 'React (Vite/Redux/ReactQuery)', score: 4 },
                                            { title: 'Next.js', score: 3 },
                                            { title: 'Angular', score: 2 },
                                            { title: 'jQuery', score: 2 },
                                            { title: 'VueJs', score: 1 },
                                        ]}
                                        color="tertiary"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <SkillCard
                                        title="Python"
                                        score={3}
                                        rows={[
                                            { title: 'Llamaindex', score: 3 },
                                            { title: 'FastAPI', score: 3 },
                                            { title: 'Sympy', score: 2 },
                                            { title: 'SQLAlchemy', score: 2 },
                                        ]}
                                        color="tertiary"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <SkillCard
                                        title="BDD"
                                        score={3.5}
                                        rows={[
                                            { title: 'T-SQL', score: 3.5 },
                                            { title: 'PostgreSQL', score: 3.5 },
                                            { title: 'MongoDB', score: 3.5 },
                                            { title: 'MySQL', score: 3 },
                                            { title: 'ElasticSearch', score: 3 },
                                            { title: 'SQLite', score: 2 },
                                        ]}
                                        color="tertiary"
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
                                    <SkillCard
                                        title={['HTML/CSS', 'et composants']}
                                        score={4}
                                        rows={[
                                            { title: 'Fluent UI', score: 4 },
                                            { title: 'Bulma', score: 4 },
                                            { title: 'Bootstrap', score: 2 },
                                            { title: 'Material Design', score: 1 },
                                            { title: 'Web component', score: 1 },
                                        ]}
                                        color="secondary"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <SkillCard
                                        title="CSS"
                                        score={4}
                                        rows={[
                                            { title: 'Vanilla', score: 4 },
                                            { title: 'SCSS/Sass', score: 4 },
                                            { title: 'Less', score: 1 },
                                        ]}
                                        color="secondary"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <SkillCard
                                        title=".NET Core"
                                        score={2}
                                        rows={[
                                            { title: 'C#', score: 3 },
                                            { title: 'AspNetCore.Mvc', score: 3 },
                                            { title: 'Entity Framework', score: 3 },
                                        ]}
                                        color="secondary"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <SkillCard
                                        title="PHP"
                                        score={3}
                                        rows={[
                                            { title: 'Symfony 4/5', score: 3 },
                                            { title: 'WordPress', score: 3 },
                                            { title: 'Doctrine', score: 3 },
                                            { title: 'Twig', score: 3 },
                                            { title: 'PHPUnit', score: 2 },
                                        ]}
                                        color="secondary"
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
                                    <SkillCard
                                        title="Mobile"
                                        score={2.5}
                                        rows={[
                                            { title: 'PWA', score: 4 },
                                            { title: 'Ionic 3/4', score: 2 },
                                            { title: 'Android Studio', score: 1 },
                                            { title: 'React Native', score: 1 },
                                        ]}
                                        color="primary"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <SkillCard
                                        title="Divers"
                                        score={0}
                                        rows={[
                                            { title: 'Bash', score: 3 },
                                            { title: 'Deno/Bun', score: 2 },
                                            { title: 'Java', score: 2 },
                                            { title: 'Merise/UML', score: 2 },
                                            { title: 'C/C++', score: 1 },
                                            { title: 'Cisco', score: 1 },
                                        ]}
                                        color="primary"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <SkillCard
                                        title="Systèmes"
                                        score={0}
                                        rows={[
                                            { title: 'Azure', score: 4 },
                                            { title: 'Docker', score: 3.5 },
                                            { title: 'Linux', score: 3.5 },
                                            { title: 'Heroku', score: 3 },
                                            { title: 'Win. Server', score: 2 },
                                        ]}
                                        color="primary"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-quarter-widescreen', 'half-desktop', 'half-tablet']}>
                                    <SkillCard
                                        title={['Gestion', 'de projet']}
                                        score={3.5}
                                        rows={[
                                            { title: 'Lead Tech', score: 4 },
                                            { title: 'Pilotage dev.', score: 4 },
                                            { title: 'Code reviewer', score: 4 },
                                            { title: 'Suivi client', score: 4 },
                                            { title: 'Commerce', score: 2 },
                                        ]}
                                        color="primary"
                                    />
                                </Columns.Column>
                            </Columns>
                        </Fade>
                    </Container>
                </div>
                <div
                    id="career"
                    className={classNames(styles['index-page-row'], styles['is-career'])}
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
                            La petite histoire de mon cheminent professionnel
                        </Title>
                        <br />
                        <Fade
                            direction="up"
                            triggerOnce
                        >
                            <>
                                <CareerCard
                                    title="CDI Lead Tech / Développeur Full Stack"
                                    location={{
                                        company: 'Next Decision',
                                        href: 'https://www.next-decision.fr/',
                                        city: 'Nantes',
                                    }}
                                    period={[new Date(2021, 8), new Date()]}
                                    missions={[
                                        {
                                            title: "Conception et création d'applications web métier sur mesure",
                                            description:
                                                // eslint-disable-next-line max-len
                                                'Gestion complète de projets web : développement, optimisation, maintenance et évolutions du Frontend, du Backend (API) et de la Base de données',
                                        },
                                        {
                                            title: 'Assurer le suivi technique du client et de son projet tout au long du processus de réalisation',
                                            description:
                                                // eslint-disable-next-line max-len
                                                'Rédaction de spécifications fonctionnelles, prise en charge des demandes évolutives, coordination de projets et suivi avec le client',
                                        },
                                        {
                                            title: 'Développement de programmes, scripts et outils variés pour répondre à des besoins spécifiques',
                                            description:
                                                // eslint-disable-next-line max-len
                                                "Mise en place d'environnements sur Azure et machines virtuelles, modules de génération de PDF, outils de synchronisation de bases de données, création de scripts de calcul de données, etc.",
                                        },
                                    ]}
                                />
                                <CareerCard
                                    title="Alternance en développement d'applications web (Bachelor 3 à Mastère 2)"
                                    location={{
                                        href: 'https://www.next-decision.fr/',
                                        city: 'Nantes',
                                    }}
                                    period={[new Date(2018, 8), new Date(2021, 8)]}
                                    missions={[
                                        {
                                            title: "Création d'applications web adaptées aux processus métier",
                                            description:
                                                // eslint-disable-next-line max-len
                                                "Prise en charge complète d'applications web : du Frontend au Backend (API) et à la gestion de la Base de données, incluant maintenance et évolutions",
                                        },
                                        {
                                            title: 'Gestion et suivi technique du client et son projet',
                                            description:
                                                // eslint-disable-next-line max-len
                                                'Création de documents de spécifications, maintenance applicative, pilotage de projets et gestion de la relation client',
                                        },
                                    ]}
                                />
                                <CareerCard
                                    title="Stage en développement d'applications web (Bachelor 2)"
                                    location={{ company: 'Next Decision', href: 'https://www.next-decision.fr/', city: 'Nantes' }}
                                    period={[new Date(2018, 6), new Date(2018, 7)]}
                                    missions={[
                                        {
                                            title: "Création d'applications web fonctionnelles et spécialisées pour les entreprises",
                                            description:
                                                // eslint-disable-next-line max-len
                                                'Implémentation de nouvelles fonctionnalités et résolution des anomalies présentes dans des applications existantes',
                                        },
                                    ]}
                                />
                                <CareerCard
                                    title="Stage en développement web (Bachelor 1)"
                                    location={{
                                        city: 'Nantes',
                                        company: 'Label Communication',
                                        href: 'https://www.labelcommunication.net/',
                                    }}
                                    period={[new Date(2017, 6), new Date(2017, 7)]}
                                    missions={[
                                        {
                                            title: 'Développement de sites web vitrines modernes et ergonomiques',
                                            description:
                                                // eslint-disable-next-line max-len
                                                "Apprentissage de WordPress et de son écosystème, incluant WooCommerce et autres plugins gravitants dans l'écosystème du CMS",
                                        },
                                    ]}
                                />
                                <CareerCard
                                    title="Études supérieures Développeur Informatique Ingésup"
                                    location={{
                                        city: 'Nantes',
                                        company: 'Ynov',
                                        href: 'https://www.ynov.com/campus/nantes/',
                                    }}
                                    period={[new Date(2016, 8), new Date(2021, 7)]}
                                    missions={[
                                        {
                                            title: '2 années de Mastères',
                                            description:
                                                "Diplômes : (RNCP) Expert Informatique et Systèmes d'Information et Mastère Expert Développement Web",
                                        },
                                        {
                                            title: '3 années de Bachelor',
                                            description:
                                                "Apprentissage général de l'informatique : développement, réseau et culture générale",
                                        },
                                    ]}
                                />
                                <CareerCard
                                    title="Études Baccalauréat"
                                    location={{
                                        city: 'Nantes',
                                        company: 'Lycée Notre-Dame de Toutes-Aides',
                                        href: 'http://ndtoutesaides.fr/',
                                    }}
                                    period={[new Date(2012, 8), new Date(2016, 5)]}
                                    missions={[
                                        {
                                            title: 'Études Scientifiques',
                                            description: 'Diplôme : Baccalauréat Scientifique SVT, mention assez bien',
                                        },
                                        {
                                            title: 'Projet Bac. ISN (spécialité informatique)',
                                            description: "Réalisation d'un jeu vidéo sous Processing 3",
                                        },
                                    ]}
                                />
                                <CareerCard
                                    title={
                                        <>
                                            Stage d'observation (3<sup>ème</sup>, Lycée)
                                        </>
                                    }
                                    location={{
                                        city: 'Nantes',
                                        company: 'Parabellum Geographic Insight',
                                        href: 'https://www.pginsight.com/',
                                    }}
                                    period={[new Date(2011, 11)]}
                                    missions={[
                                        {
                                            title: "Observation des métiers de l'informatique",
                                            description: 'Observation de problématiques réseaux et développements',
                                        },
                                    ]}
                                />
                            </>
                        </Fade>
                    </Container>
                </div>
                <div
                    id="productions"
                    className={classNames(styles['index-page-row'], styles['is-productions'])}
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
                                        width={300}
                                        height={200}
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <p>
                                    Le site que vous êtes en train de visiter a été entièrement réalisé par mes soins. Celui-ci repose sur{' '}
                                    <em>Next.js</em> : un Framework <em>React</em> permettant, notamment, la mise en place d'un rendu des
                                    composants côté serveur.
                                </p>
                                <br />
                                <p>
                                    Pour un simple projet comme celui-ci, <em>Next.js</em> est "overkill", et un site sans un tel Framework
                                    serait sûrement plus optimal. Mais ici, ce choix résulte d'une volonté personnelle de démontrer mes
                                    compétences en <em>React</em>.
                                </p>
                                <br />
                                <p>
                                    À travers ce projet, une partie de mes compétences auront pu être exprimées. Allant de la phase de{' '}
                                    <em>conception</em> (recherche d'idées, mockup, etc.) à l'
                                    <em>hébergement</em> (déploiement continu, etc.) en passant bien sûr par la phase de{' '}
                                    <em>développement</em> (architecture en composants, style, accessibilité, performance, etc.).
                                </p>
                                <br />
                                <p>
                                    <Tag color="primary-dark">#Next.js</Tag>
                                    <Tag color="primary-dark">#React</Tag>
                                    <Tag color="primary-dark">#SCSS</Tag>
                                    <Tag color="primary-dark">#PWA</Tag>
                                    <Tag color="primary-dark">#Docker</Tag>
                                </p>
                                <br />
                                <Button
                                    href="https://github.com/KirianCaumes/Kirian-Caumes-Website"
                                    color="primary"
                                    isOutlined
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="github.com/KirianCaumes/Kirian-Caumes-Website, ouvre dans un nouvel onglet"
                                >
                                    Voir sur Github
                                </Button>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </div>
                <div className={classNames(styles['index-page-row'], styles['is-quote'])}>
                    <figure>
                        <blockquote>
                            Il est parfois sensé d'
                            <span>être insensé</span>.
                        </blockquote>
                        <figcaption>
                            Jérémie Belpois,{' '}
                            <cite>
                                <a
                                    href="https://youtu.be/G5Q9CVbo67o?t=1348"
                                    target="_blank"
                                    aria-label="youtu.be/G5Q9CVbo67o?t=1348, ouvre dans un nouvel onglet"
                                    rel="noopener noreferrer nofollow"
                                >
                                    Code Lyoko
                                </a>
                            </cite>
                        </figcaption>
                    </figure>
                    <hr />
                    <p>
                        Une simple locution qui, bien que provenant d'un dessin animé, m'a toujours inspiré et notamment aujourd'hui dans
                        mes projets personnels de développements informatiques.
                    </p>
                    <br />
                    <p>
                        Même si une idée me parait farfelue, peu utile ou encore ayant de faibles chances d'aboutir ; j'aime me lancer des
                        défis et explorer des solutions originales dans le but d'expérimenter mais aussi d'apprendre.
                    </p>
                </div>
                <div
                    id="passions"
                    className={classNames(styles['index-page-row'], styles['is-passions'])}
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
                        <Columns className={classNames(styles['row-passions-columns'])}>
                            <Columns.Column sizes={['one-third-desktop', 'half-tablet']}>
                                <Fade
                                    direction="left"
                                    triggerOnce
                                >
                                    <FlatCard
                                        imageSrc="/images/handball.jpg"
                                        title="Handball"
                                        alt="Équipe de Handball du Thouaré Handball"
                                    >
                                        Joueur de Handball au poste de gardien de but, cumulant quinze saisons aux clubs de Carquefou et
                                        anciennement Thouaré-sur-Loire. Également, coach et entraîneur d'une équipe d'U16M à Carquefou.
                                        <br />
                                        <br />
                                        J'y ai développé de vrais liens humains, dans un projet d'équipe ayant un objectif commun : gagner
                                        ensemble, en cultivant l'unité et l'entraide.
                                        <br />
                                        <br />
                                        Fidèle supporter du HBC Nantes et de l'équipe de France.
                                    </FlatCard>
                                </Fade>
                            </Columns.Column>
                            <Columns.Column sizes={['one-third-desktop', 'half-tablet']}>
                                <Fade
                                    direction="up"
                                    triggerOnce
                                >
                                    <FlatCard
                                        imageSrc="/images/ajesterscollection.png"
                                        title="Collections"
                                        alt="Collections Vinyls d'In Flames - A Jester's Collection"
                                    >
                                        Collectionneur passionné depuis mon plus jeune âge, je me suis toujours adonné à la quête d'objets
                                        variés, tels que des pièces d'euros, des timbres, des fèves, des jeux vidéo, et bien d'autres.
                                        <br />
                                        <br />
                                        Aujourd'hui la collection vers laquelle je suis principalement tourné concerne le groupe de musique
                                        In Flames avec un ensemble de CD, vinyl et autres. Je partage également cette passion sur internet
                                        sous le pseudonyme :{' '}
                                        <a
                                            href="https://www.instagram.com/jesters_collection/"
                                            target="_blank"
                                            aria-label="instagram.com/jesters_collection, ouvre dans un nouvel onglet"
                                            rel="noopener noreferrer nofollow"
                                        >
                                            A Jester's Collection
                                        </a>
                                        .
                                    </FlatCard>
                                </Fade>
                            </Columns.Column>
                            <Columns.Column sizes={['one-third-desktop', 'half-tablet']}>
                                <Fade
                                    direction="right"
                                    triggerOnce
                                >
                                    <FlatCard
                                        imageSrc="/images/development.jpg"
                                        title="Développement"
                                        alt="Développement et exemple de code React"
                                    >
                                        Plus qu'un métier, le développement est également une passion. Je m'amuse fréquemment à développer
                                        différents projets, qu'ils soient Open Source, ou bien directement pour mon usage personnel (
                                        <a
                                            href="https://github.com/KirianCaumes"
                                            target="_blank"
                                            aria-label="github.com/KirianCaumes, ouvre dans un nouvel onglet"
                                            rel="noopener noreferrer"
                                        >
                                            Github
                                        </a>
                                        ).
                                        <br />
                                        <br />
                                        Cette approche plus personnel me permet d'explorer de nouvelles options de mon coté, afin de
                                        proposer, lors de mes projets professionnels, des solutions novatrices et innovantes qui résultent
                                        de mes propres recherches, expériences et découvertes .
                                    </FlatCard>
                                </Fade>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </div>
                <div
                    id="contact"
                    className={classNames(styles['index-page-row'])}
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
                                        color="secondary"
                                        align="center"
                                    >
                                        <a href="mailto:kirian.caumes@gmail.com">kirian.caumes@gmail.com</a>
                                    </IconCard>
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
                                        color="primary"
                                        align="center"
                                    >
                                        {' '}
                                        <a
                                            href="https://www.linkedin.com/in/kirian-caumes"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            aria-label="linkedin.com/in/kirian-caumes, ouvre dans un nouvel onglet"
                                        >
                                            linkedin.com/in/kirian-caumes
                                        </a>
                                    </IconCard>
                                </Fade>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </div>
            </main>
        </>
    )
}
