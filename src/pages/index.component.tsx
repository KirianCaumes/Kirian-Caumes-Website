import React from 'react'
import Head from 'next/head'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import styles from 'pages/index.module.scss'
import useIndex from 'pages/index.hook'
import CareerCard from 'components/containers/cards/career-card/career-card.component'
import ContactCard from 'components/containers/cards/contact-card/contact-card.component'
import FlatCard from 'components/containers/cards/flat-card/flat-card.component'
import IconCard from 'components/containers/cards/icon-card/icon-card.component'
import SkillCard from 'components/containers/cards/skill-card/skill-card.component'
import Columns from 'components/containers/columns/columns.component'
import Tag from 'components/containers/tag/tag.component'
import Border from 'components/elements/border/border.component'
import Icon from 'components/elements/icon/icon.component'
import Title from 'components/elements/title/title.component'
import Button from 'components/inputs/button/button.component'
import Container from 'components/containers/container/container.component'
import Fade from 'components/containers/fade/fade.component'

/**
 * Home page
 * @returns JSX.Element
 */
export default function Index() {
    const { publicRuntimeConfig, age, workingYears } = useIndex()

    return (
        <>
            <Head>
                <title>{publicRuntimeConfig.appTitle}</title>
                <meta
                    content={publicRuntimeConfig.appDescription}
                    name="description"
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
                                    name: publicRuntimeConfig.appName,
                                    item: publicRuntimeConfig.appUrl,
                                },
                            ],
                        }),
                    }}
                    type="application/ld+json"
                />
            </Head>

            <main className={styles['index-page']}>
                <div
                    className={classNames(styles['index-page-row'], styles['is-intro'])}
                    id="intro"
                >
                    <Container>
                        <Title level={1}>Kirian CAUMES</Title>
                        <Columns>
                            <Columns.Column>
                                <p>
                                    Lead Tech / Développeur Full Stack âgé de <em>{age} ans</em>, je suis situé aux abords de la ville de{' '}
                                    <em>Nantes</em> et titulaire du <em>permis B</em>.
                                    <br />
                                    <br />
                                    Fort de plus de <em>{workingYears} ans d'expérience</em> dans la conception d'
                                    <em>applications web métier</em> sur mesure et performantes, mon{' '}
                                    <Link href="/#career">parcours professionnel</Link> m'a permis de développer une expertise couvrant l'
                                    <em>architecture logicielle</em>, le développement <em>full stack</em>, l'automatisation <em>CI/CD</em>,
                                    le cloud <em>Azure</em> et l'<em>accompagnement technique d'équipes</em>.
                                    <br />
                                    <br />
                                    Spécialisé en <em>TypeScript</em>, <em>React</em> et <em>Node.js/NestJS</em>, j'ai obtenu à Ynov Nantes
                                    mon mastère « <em>Expert Développement Web</em> » et le titre RNCP «{' '}
                                    <em>Expert Informatique et Systèmes d'Information</em> ». Habitué aux environnements multi-projets, aux
                                    échanges directs avec les clients métiers et à la bonne compréhension de l'<em>anglais</em>,
                                    j'interviens du cadrage fonctionnel initial jusqu'à la mise en production.
                                    <br />
                                    <br />
                                </p>
                                <br />
                                <Columns>
                                    <Columns.Column>
                                        <Button
                                            aria-label="Kirian-CAUMES-CV.pdf, ouvre dans un nouvel onglet"
                                            color="secondary"
                                            href="/documents/Kirian-CAUMES-CV.pdf"
                                            isFullWidth
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            Mon CV *
                                        </Button>
                                        <p className={styles['is-last-update']}>* Dernière mise à jour : mai 2026</p>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Button
                                            color="primary"
                                            href="/#contact"
                                            isFullWidth
                                        >
                                            Me contacter
                                        </Button>
                                    </Columns.Column>
                                </Columns>
                                <a
                                    aria-label="linkedin.com/in/kirian-caumes, ouvre dans un nouvel onglet"
                                    href="https://www.linkedin.com/in/kirian-caumes"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Linkedin"
                                >
                                    <Icon
                                        isColored
                                        name="linkedin"
                                    />
                                </a>
                                <a
                                    aria-label="github.com/KirianCaumes, ouvre dans un nouvel onglet"
                                    href="https://github.com/KirianCaumes"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Github"
                                >
                                    <Icon
                                        isColored
                                        name="github"
                                    />
                                </a>
                                <a
                                    aria-label="medium.com/@kirian.caumes, ouvre dans un nouvel onglet"
                                    href="https://medium.com/@kirian.caumes"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Medium"
                                >
                                    <Icon
                                        isColored
                                        name="medium"
                                    />
                                </a>
                            </Columns.Column>
                            <Columns.Column align="center">
                                <Fade
                                    direction="right"
                                    triggerOnce
                                >
                                    <Image
                                        alt="Photo de profil de Kirian Caumes"
                                        height={300}
                                        src="/images/kirian_caumes.jpg"
                                        width={300}
                                    />
                                </Fade>
                            </Columns.Column>
                        </Columns>
                    </Container>
                    <Border />
                </div>
                <div
                    className={classNames(styles['index-page-row'], styles['is-about'])}
                    id="about"
                >
                    <Container>
                        <Title
                            isCentered
                            level={2}
                        >
                            À propos de moi
                        </Title>
                        <Title
                            isCentered
                            isSubtitle
                            level={3}
                        >
                            Quelques traits de caractères
                        </Title>
                        <br />

                        <Columns>
                            <Columns.Column>
                                <Fade
                                    className={styles['row-about-fade-container']}
                                    direction="left"
                                    triggerOnce
                                >
                                    <IconCard
                                        color="tertiary"
                                        iconName="balloon_laughing"
                                        isIconBorder
                                        title="Sérieux sans se prendre au sérieux"
                                    >
                                        Rigoureux dans mon travail et exigeant sur la qualité, j'aime néanmoins garder une touche d'humour
                                        au quotidien. Parce qu'une bonne ambiance de travail, c'est aussi ce qui fait la différence au sein
                                        d'une équipe.
                                    </IconCard>
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <Fade
                                    className={styles['row-about-fade-container']}
                                    direction="up"
                                    triggerOnce
                                >
                                    <IconCard
                                        color="secondary"
                                        iconName="balloon_naughty"
                                        isIconBorder
                                        title="Calme mais pas amorphe"
                                    >
                                        Je m'investis pleinement dans chaque projet tout en gardant le recul nécessaire pour prendre les
                                        bonnes décisions. L'humain reste au cœur de mon approche : écoute, implication et relation de
                                        confiance avec les clients comme avec l'équipe.
                                    </IconCard>
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <Fade
                                    className={styles['row-about-fade-container']}
                                    direction="right"
                                    triggerOnce
                                >
                                    <IconCard
                                        color="primary"
                                        iconName="balloon_dead"
                                        isIconBorder
                                        title="Passionné et patient"
                                    >
                                        Passionné d'informatique depuis toujours, j'aborde chaque problème comme un défi à relever. La
                                        recherche de la meilleure solution, même lorsque c'est complexe, est ce qui me motive au quotidien.
                                    </IconCard>
                                </Fade>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </div>
                <div
                    className={classNames(styles['index-page-row'], styles['is-skills'])}
                    id="skills"
                >
                    <Container>
                        <Title
                            isCentered
                            level={2}
                        >
                            Mes compétences
                        </Title>
                        <Title
                            isCentered
                            isSubtitle
                            level={3}
                        >
                            Mon savoir-faire technique et managérial
                        </Title>
                        <br />
                        <Fade
                            className={styles['row-skills-fade-container']}
                            direction="up"
                            triggerOnce
                        >
                            <Columns>
                                <Columns.Column sizes={['one-third-widescreen', 'one-third-desktop', 'full-tablet']}>
                                    <SkillCard
                                        color="tertiary"
                                        description={
                                            <>
                                                Référent technique sur des projets critiques, de la définition de l'
                                                <strong>architecture</strong> au passage en production. Pilotage des décisions techniques,{' '}
                                                <strong>animation d'ateliers</strong> de cadrage client, <strong>mentorat</strong> de
                                                développeurs juniors et mise en place de <strong>standards de qualité</strong> garants de
                                                livraisons fiables.
                                            </>
                                        }
                                        tags={['Leadership', 'Architecture', 'Mentorat', 'Qualité']}
                                        title="Lead Tech & Pilotage"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-third-widescreen', 'one-third-desktop', 'half-tablet']}>
                                    <SkillCard
                                        color="secondary"
                                        description={
                                            <>
                                                La base de mon c&oelig;ur de métier : développement <strong>full stack</strong> de A à Z :
                                                backend robuste avec <strong>NestJS</strong> et <strong>Fastify</strong>, frontend réactif
                                                avec <strong>React</strong>. Culture forte de la <strong>qualité</strong> : typage strict,
                                                revues de code, CI, tests unitaires et E2E pour une base de code{' '}
                                                <strong>maintainable sur la durée</strong>.
                                            </>
                                        }
                                        tags={['TypeScript', 'JavaScript', 'React', 'NestJS']}
                                        title="JavaScript / TypeScript"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-third-widescreen', 'one-third-desktop', 'half-tablet']}>
                                    <SkillCard
                                        color="secondary"
                                        description={
                                            <>
                                                Architecture et intégration d'interfaces exigeantes : composants{' '}
                                                <strong>réutilisables</strong>, <strong>design systems</strong>, animations fluides et
                                                gestion d'état complexe. Sensibilité à l'
                                                <strong>accessibilité</strong> (WCAG), au <strong>SEO</strong> et aux{' '}
                                                <strong>Core Web Vitals</strong> pour des applications à la fois esthétiques et
                                                performantes.
                                            </>
                                        }
                                        tags={['CSS/SCSS', 'Accessibilité', 'SEO']}
                                        title="Interfaces & UI"
                                    />
                                </Columns.Column>
                            </Columns>
                        </Fade>
                        <Fade
                            className={styles['row-skills-fade-container']}
                            direction="up"
                            triggerOnce
                        >
                            <Columns>
                                <Columns.Column sizes={['one-third-widescreen', 'one-third-desktop', 'half-tablet']}>
                                    <SkillCard
                                        color="primary"
                                        description={
                                            <>
                                                Conception d'<strong>APIs REST</strong> typées et documentées (OpenAPI/Swagger),
                                                modélisation de schémas relationnels et NoSQL. Du schéma initial aux requêtes optimisées,
                                                avec un œil constant sur la <strong>cohérence des données</strong>.
                                            </>
                                        }
                                        tags={['PostgreSQL', 'MongoDB', 'ElasticSearch', 'Swagger']}
                                        title="Données & APIs"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={['one-third-widescreen', 'one-third-desktop', 'half-tablet']}>
                                    <SkillCard
                                        color="primary"
                                        description={
                                            <>
                                                Mise en œuvre d'architectures <strong>cloud Azure</strong>, dont <strong>AKS</strong>,
                                                garantissant <strong>haute disponibilité</strong> et scalabilité. Conteneurisation{' '}
                                                <strong>Docker</strong>, pipelines <strong>CI/CD</strong> automatisés et administration{' '}
                                                <strong>Linux</strong> pour des déploiements fiables.
                                            </>
                                        }
                                        tags={['Azure', 'AKS', 'Docker', 'CI/CD', 'Linux']}
                                        title="DevOps & Cloud"
                                    />
                                </Columns.Column>
                            </Columns>
                        </Fade>
                    </Container>
                </div>
                <div
                    className={classNames(styles['index-page-row'], styles['is-career'])}
                    id="career"
                >
                    <Container>
                        <Title
                            isCentered
                            level={2}
                        >
                            Mon parcours
                        </Title>
                        <Title
                            isCentered
                            isSubtitle
                            level={3}
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
                                    location={{
                                        company: 'Next Decision',
                                        href: 'https://www.next-decision.fr/',
                                        city: 'Nantes',
                                    }}
                                    missions={[
                                        {
                                            title: 'Référent technique & qualité logicielle',
                                            description:
                                                // eslint-disable-next-line max-len
                                                "Garant de la qualité, de la maintenabilité et des bonnes pratiques de développement via la mise en place de standards de qualité logicielle. Définition d'architectures full stack scalables en React et NestJS pour des applications métier critiques.",
                                        },
                                        {
                                            title: 'Cadrage fonctionnel & pilotage technique',
                                            description:
                                                // eslint-disable-next-line max-len
                                                "Animation d'ateliers de cadrage fonctionnel et pilotage des décisions techniques avec les parties prenantes métier dans des secteurs variés : recrutement, transport, immobilier, informatique, etc.",
                                        },
                                        {
                                            title: "Mentorat & accompagnement d'équipes",
                                            description:
                                                // eslint-disable-next-line max-len
                                                "Montée en compétence de développeurs juniors sur plusieurs projets : code reviews, pair programming et animation d'ateliers techniques.",
                                        },
                                        {
                                            title: 'Architecture cloud & DevOps',
                                            description:
                                                // eslint-disable-next-line max-len
                                                "Conception et mise en œuvre d'architectures cloud Azure et On-Premise (AKS), conteneurisation Docker, pipelines CI/CD automatisés et déploiements haute disponibilité.",
                                        },
                                    ]}
                                    period={[new Date(2021, 8), new Date()]}
                                    title="CDI Lead Tech / Développeur Full Stack"
                                />
                                <CareerCard
                                    duration="3 ans"
                                    location={{
                                        company: 'Next Decision',
                                        href: 'https://www.next-decision.fr/',
                                        city: 'Nantes',
                                    }}
                                    missions={[
                                        {
                                            title: "Développement d'applications web métier pour PME et grands groupes",
                                            description:
                                                // eslint-disable-next-line max-len
                                                "Prise en charge complète d'applications web de A à Z : Frontend, Backend (API REST sécurisées) et Base de données, incluant maintenance et évolutions.",
                                        },
                                        {
                                            title: 'Suivi technique et relation client',
                                            description:
                                                // eslint-disable-next-line max-len
                                                "Rédaction de spécifications fonctionnelles, pilotage de projets, coordination avec les clients et conception d'architectures cloud.",
                                        },
                                    ]}
                                    period={[new Date(2018, 6), new Date(2021, 7)]}
                                    title="Alternance Développeur Full Stack (Bachelor 3 à Mastère 2)"
                                />
                                <CareerCard
                                    location={{ company: 'Next Decision', href: 'https://www.next-decision.fr/', city: 'Nantes' }}
                                    missions={[
                                        {
                                            title: "Création d'applications web fonctionnelles et spécialisées pour les entreprises",
                                            description:
                                                // eslint-disable-next-line max-len
                                                'Implémentation de nouvelles fonctionnalités et résolution des anomalies présentes dans des applications existantes',
                                        },
                                    ]}
                                    period={[new Date(2018, 6), new Date(2018, 7)]}
                                    title="Stage en développement d'applications web (Bachelor 2)"
                                />
                                <CareerCard
                                    location={{
                                        city: 'Nantes',
                                        company: 'Label Communication',
                                        href: 'https://www.labelcommunication.net/',
                                    }}
                                    missions={[
                                        {
                                            title: 'Développement de sites web vitrines modernes et ergonomiques',
                                            description:
                                                // eslint-disable-next-line max-len
                                                "Apprentissage de WordPress et de son écosystème, incluant WooCommerce et autres plugins gravitants dans l'écosystème du CMS",
                                        },
                                    ]}
                                    period={[new Date(2017, 6), new Date(2017, 7)]}
                                    title="Stage en développement web (Bachelor 1)"
                                />
                                <CareerCard
                                    location={{
                                        city: 'Nantes',
                                        company: 'Ynov',
                                        href: 'https://www.ynov.com/campus/nantes/',
                                    }}
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
                                    period={[new Date(2016, 8), new Date(2021, 7)]}
                                    title="Études supérieures Développeur Informatique Ingésup"
                                />
                                <CareerCard
                                    location={{
                                        city: 'Nantes',
                                        company: 'Lycée Notre-Dame de Toutes-Aides',
                                        href: 'http://ndtoutesaides.fr/',
                                    }}
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
                                    period={[new Date(2012, 8), new Date(2016, 5)]}
                                    title="Études Baccalauréat"
                                />
                                <CareerCard
                                    location={{
                                        city: 'Nantes',
                                        company: 'Parabellum Geographic Insight',
                                        href: 'https://www.pginsight.com/',
                                    }}
                                    missions={[
                                        {
                                            title: "Observation des métiers de l'informatique",
                                            description: 'Observation de problématiques réseaux et développements',
                                        },
                                    ]}
                                    period={[new Date(2011, 11)]}
                                    title={
                                        <>
                                            Stage d'observation (3<sup>ème</sup>, Lycée)
                                        </>
                                    }
                                />
                            </>
                        </Fade>
                    </Container>
                </div>
                <div
                    className={classNames(styles['index-page-row'], styles['is-productions'])}
                    id="productions"
                >
                    <Container>
                        <Title
                            isCentered
                            level={2}
                        >
                            Un exemple de réalisation ?
                        </Title>
                        <Title
                            isCentered
                            isSubtitle
                            level={3}
                        >
                            Vous êtes en train d'en vivre un
                        </Title>
                        <br />
                        <Columns>
                            <Columns.Column
                                align="center"
                                sizes={['one-third-desktop', 'full-tablet']}
                                vAlign="center"
                            >
                                <Fade
                                    direction="left"
                                    triggerOnce
                                >
                                    <Image
                                        alt="kiriancaumes.fr"
                                        height={200}
                                        src="/images/website.png"
                                        width={300}
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <p>
                                    Ce site a été entièrement conçu et développé par mes soins. Il repose sur <em>Next.js</em>, un framework{' '}
                                    <em>React</em> permettant le rendu côté serveur (SSR) et la génération statique.
                                </p>
                                <br />
                                <p>
                                    Pour un projet de cette taille, <em>Next.js</em> est clairement « overkill », un site statique serait
                                    plus léger. Ce choix est délibéré : il me permet de démontrer concrètement mes compétences essentielles
                                    en <em>React</em>.
                                </p>
                                <br />
                                <p>
                                    Ce projet couvre l'ensemble du cycle de vie d'une application : de la <em>conception</em> (maquettes,
                                    choix techniques) au <em>déploiement</em> continu, en passant par le <em>développement</em>{' '}
                                    (architecture en composants, style, accessibilité, performance).
                                </p>
                                <br />
                                <p>
                                    <Tag color="primary-dark">Next.js</Tag>
                                    <Tag color="primary-dark">React</Tag>
                                    <Tag color="primary-dark">SCSS</Tag>
                                    <Tag color="primary-dark">PWA</Tag>
                                    <Tag color="primary-dark">Docker</Tag>
                                </p>
                                <br />
                                <Button
                                    aria-label="github.com/KirianCaumes/Kirian-Caumes-Website, ouvre dans un nouvel onglet"
                                    color="primary"
                                    href="https://github.com/KirianCaumes/Kirian-Caumes-Website"
                                    isOutlined
                                    rel="noopener noreferrer"
                                    target="_blank"
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
                                    aria-label="youtu.be/G5Q9CVbo67o?t=1303, ouvre dans un nouvel onglet"
                                    href="https://youtu.be/G5Q9CVbo67o?t=1303"
                                    rel="noopener noreferrer nofollow"
                                    target="_blank"
                                >
                                    Code Lyoko
                                </a>
                            </cite>
                        </figcaption>
                    </figure>
                    <hr />
                    <p>
                        Une simple locution qui, bien que tirée d'un dessin animé, m'a toujours inspiré, notamment dans mes projets
                        personnels de développement informatique.
                    </p>
                    <br />
                    <p>
                        Même si une idée me paraît farfelue, peu utile ou vouée à l'échec, j'aime me lancer des défis et explorer des pistes
                        originales, autant pour expérimenter que pour apprendre.
                    </p>
                </div>
                <div
                    className={classNames(styles['index-page-row'], styles['is-passions'])}
                    id="passions"
                >
                    <Container>
                        <Title
                            isCentered
                            level={2}
                        >
                            Mes passions
                        </Title>
                        <Title
                            isCentered
                            isSubtitle
                            level={3}
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
                                        alt="Équipe de Handball du Thouaré Handball"
                                        imageSrc="/images/handball.jpg"
                                        title="Handball"
                                    >
                                        Gardien de but depuis{' '}
                                        {new Date(new Date().getTime() - new Date('2008-07-01').getTime()).getUTCFullYear() - 1970} saisons,
                                        j'évolue aujourd'hui au club de Carquefou.
                                        <br />
                                        <br />
                                        Le handball m'a appris l'essentiel : s'investir dans un projet collectif et associatif, cultiver
                                        l'entraide et gagner ensemble.
                                        <br />
                                        <br />
                                        Évidement, fidèle supporter du HBC Nantes et de l'équipe de France.
                                    </FlatCard>
                                </Fade>
                            </Columns.Column>
                            <Columns.Column sizes={['one-third-desktop', 'half-tablet']}>
                                <Fade
                                    direction="up"
                                    triggerOnce
                                >
                                    <FlatCard
                                        alt="Collections Vinyls d'In Flames - A Jester's Collection"
                                        imageSrc="/images/ajesterscollection.png"
                                        title="Collections"
                                    >
                                        Collectionneur passionné depuis mon plus jeune âge, j'ai toujours aimé chiner des objets variés :
                                        pièces d'euros, timbres, fèves, jeux vidéo, et bien d'autres.
                                        <br />
                                        <br />
                                        Aujourd'hui, ma collection principale tourne autour du groupe In Flames : CD, vinyles et autres
                                        raretés. Je partage cette passion sous le pseudonyme :{' '}
                                        <a
                                            aria-label="instagram.com/jesters_collection, ouvre dans un nouvel onglet"
                                            href="https://www.instagram.com/jesters_collection/"
                                            rel="noopener noreferrer nofollow"
                                            target="_blank"
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
                                        alt="Développement et exemple de code React"
                                        imageSrc="/images/development.jpg"
                                        title="Développement"
                                    >
                                        Plus qu'un métier, le développement est une véritable passion. Je m'amuse régulièrement à concevoir
                                        des projets variés, qu'ils soient open source ou pour mon usage personnel (
                                        <a
                                            aria-label="github.com/KirianCaumes, ouvre dans un nouvel onglet"
                                            href="https://github.com/KirianCaumes"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            Github
                                        </a>
                                        ).
                                        <br />
                                        <br />
                                        Cette démarche me permet d'explorer librement de nouvelles idées et de nourrir mes projets
                                        professionnels de découvertes issues de mes propres recherches et expériences.
                                    </FlatCard>
                                </Fade>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </div>
                <div
                    className={classNames(styles['index-page-row'], styles['is-contact'])}
                    id="contact"
                >
                    <Container>
                        <Title
                            isCentered
                            level={2}
                        >
                            Me contacter
                        </Title>
                        <Title
                            isCentered
                            isSubtitle
                            level={3}
                        >
                            Une question ? Un projet ? Contactez moi !
                        </Title>
                        <br />
                        <Columns>
                            <Columns.Column sizes={['one-third-widescreen', 'one-third-desktop', 'half-tablet']}>
                                <Fade
                                    direction="left"
                                    triggerOnce
                                >
                                    <ContactCard
                                        color="secondary"
                                        iconName="mail"
                                        linkProps={{
                                            href: 'mailto:kirian.caumes@gmail.com',
                                            children: 'kirian.caumes@gmail.com',
                                        }}
                                        title="Par mail"
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column sizes={['one-third-widescreen', 'one-third-desktop', 'half-tablet']}>
                                <Fade
                                    direction="right"
                                    triggerOnce
                                >
                                    <ContactCard
                                        color="primary"
                                        iconName="linkedin"
                                        linkProps={{
                                            'aria-label': 'linkedin.com/in/kirian-caumes, ouvre dans un nouvel onglet',
                                            href: 'https://www.linkedin.com/in/kirian-caumes',
                                            children: 'linkedin.com/in/kirian-caumes',
                                            target: '_blank',
                                            rel: 'noopener noreferrer',
                                        }}
                                        title="Par Linkedin"
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
