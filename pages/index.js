import React, { useEffect } from 'react'
import Head from 'next/head'
// @ts-ignore
import styles from 'styles/pages/index.module.scss'
import classNames from 'classnames'
import Border from 'components/elements/border'
import Container from 'components/containers/container'
import Columns from 'components/containers/columns'
import Icon from 'components/elements/icon'
import Button from 'components/inputs/button'
import Title from 'components/elements/title'
import Card from 'components/containers/cards/iconcard'
import Fade from 'react-reveal/Fade'
import Skillcard from 'components/containers/cards/skillcard'
import getConfig from 'next/config'
import FlatCard from 'components/containers/cards/flatcard'
import Tag from 'components/containers/tag'
import CareerCard from 'components/containers/cards/careercard'
import Img from 'components/elements/img'
import { useRouter } from 'next/router'

/**
 * Home page
 */
export default function Index() {
    const { publicRuntimeConfig } = getConfig()
    const router = useRouter()

    return (
        <>
            <Head>
                <title>{publicRuntimeConfig.appTitle}</title>
                <meta
                    name="description"
                    content={publicRuntimeConfig.appDescription}
                />
            </Head>

            <main
                className={styles['index-page']}
            >
                <div
                    id="intro"
                    className={classNames(styles['row'], styles['row-intro'])}
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
                                    Développeur full stack junior âgé de <b>{Math.abs((new Date(Date.now() - new Date(1997, 1, 21).getTime())).getUTCFullYear() - 1970)} ans</b>, je suis situé aux abords de la ville de <b>Nantes</b> et titulaire du <b>permis B</b>.<br /><br />
                                    Dans le domaine de l'informatique depuis maintenant plus de 5 ans, mes études à Ynov Nantes avec l'obtention de mon mastère « <b>Expert Développement Web</b> » ainsi que mon <a href="#career" onClick={() => router.replace({ hash: '#career' })}>parcours professionnel</a>, m'ont permis l'acquisition de <a href="#skills" onClick={() => router.replace({ hash: '#skills' })}>compétences</a> solides et adaptatives.<br /><br />
                                    Ce savoir-faire technique, acquis également grâce à ma bonne compréhension de l'<b>anglais</b>, se sera exprimé autour de la réalisation (notamment) d'<b>applications web métier</b> mais aussi de la <b>gestion de projets</b> et de la <b>relation client</b>.<br /><br />
                                </p>
                                <br />
                                <Columns>
                                    <Columns.Column>
                                        <Button
                                            href="/#contact"
                                            color="yellow"
                                            onClick={() => router.replace({ hash: '#contact' })}
                                            isFullWidth
                                        >
                                            Me contacter
                                        </Button>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Button
                                            href="/documents/Kirian-CAUMES-CV.pdf"
                                            rel="noopener"
                                            target="_blank"
                                            color="purple"
                                            isFullWidth
                                        >
                                            Mon CV
                                        </Button>
                                    </Columns.Column>
                                </Columns>
                                <a
                                    href="https://www.linkedin.com/in/kirian-caumes-120a0513a/"
                                    rel="noopener"
                                    target="_blank"
                                    aria-label="Linkedin"
                                >
                                    <Icon
                                        name="linkedin"
                                        isColored
                                    />
                                </a>
                                <a
                                    href="https://github.com/KirianCaumes"
                                    rel="noopener"
                                    target="_blank"
                                    aria-label="Github"
                                >
                                    <Icon
                                        name="github"
                                        isColored
                                    />
                                </a>
                            </Columns.Column>
                            <Columns.Column
                                align="center"
                            >
                                <Fade right>
                                    <Img
                                        src={{
                                            // @ts-ignore
                                            normal: require(`public/images/kirian_caumes.jpg?resize`),
                                            // @ts-ignore
                                            webp: require(`public/images/kirian_caumes.jpg?resize&format=webp`),
                                            // @ts-ignore
                                            lqip: require(`public/images/kirian_caumes.jpg?lqip`)
                                        }}
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
                    className={classNames(styles['row'], styles['row-about'])}
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
                                <Fade left>
                                    <Card
                                        icon={<Icon name="balloon_laughing" />}
                                        title="Sérieux sans se prendre au sérieux"
                                        content="Sérieux dans le travail, mais avec une pointe d'humour suffisante pour rendre une journée moins monotone."
                                        color="yellow"
                                        isIconBorder
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <Fade bottom>
                                    <Card
                                        icon={<Icon name="balloon_naughty" />}
                                        title="Calme mais pas amorphe"
                                        content="Concentré sur un projet pour qu'il puisse aboutir, sans être un simple robot uniquement coincé derrière son écran."
                                        color="pink"
                                        isIconBorder
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <Fade right>
                                    <Card
                                        icon={<Icon name="balloon_dead" />}
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
                    className={classNames(styles['row'], styles['row-skills'])}
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
                        <Fade bottom>
                            <Columns>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="NodeJs"
                                        score={4}
                                        rows={[
                                            { title: "Express", score: 4 },
                                            { title: "Puppeteer", score: 3 },
                                            { title: "Babel", score: 3 },
                                            { title: "WebPush", score: 3 },
                                            { title: "Nest", score: 2 },
                                            { title: "Mongoose", score: 3 },
                                            { title: "Sequelize", score: 2 },
                                            { title: "Jest", score: 2 },
                                            { title: "Passport", score: 2 },
                                        ]}
                                        color="yellow"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="Javascript"
                                        score={4}
                                        rows={[
                                            { title: "Vanilla", score: 4 },
                                            { title: "ReactJs", score: 4 },
                                            { title: "Angular", score: 2 },
                                            { title: "jQuery", score: 2 },
                                            { title: "VueJs", score: 1 },
                                        ]}
                                        color="yellow"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="BDD"
                                        score={3}
                                        rows={[
                                            { title: "TSQL", score: 3 },
                                            { title: "MySQL", score: 3 },
                                            { title: "MongoDB", score: 3 },
                                            { title: "PostgreSQL", score: 2 },
                                            { title: "SQLite", score: 2 },
                                            { title: "ElasticSearch", score: 1 }
                                        ]}
                                        color="yellow"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="PHP"
                                        score={3}
                                        rows={[
                                            { title: "Symfony 4/5", score: 4 },
                                            { title: "Wordpress", score: 3 },
                                            { title: "Doctrine", score: 3 },
                                            { title: "Twig", score: 3 },
                                            { title: "Monolog", score: 3 },
                                            { title: "PHPUnit", score: 2 },
                                        ]}
                                        color="yellow"
                                    />
                                </Columns.Column>
                            </Columns>
                        </Fade>
                        <Fade bottom>
                            <Columns>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="HTML/CSS"
                                        score={4}
                                        rows={[
                                            { title: "Bulma", score: 4 },
                                            { title: "Bootstrap", score: 2 },
                                        ]}
                                        color="pink"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="CSS"
                                        score={4}
                                        rows={[
                                            { title: "SCSS", score: 3 },
                                            { title: "SASS", score: 2 },
                                        ]}
                                        color="pink"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="Deno"
                                        score={3}
                                        rows={[
                                            { title: "Computed Types", score: 4 },
                                            { title: "Oak", score: 3 },
                                            { title: "Djwt", score: 3 },

                                        ]}
                                        color="pink"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title=".NET Core"
                                        score={2}
                                        rows={[
                                            { title: "C#", score: 3 },
                                            { title: "AspNetCore.Mvc", score: 3 },
                                            { title: "Entity Framework", score: 3 }
                                        ]}
                                        color="pink"
                                    />
                                </Columns.Column>
                            </Columns>
                        </Fade>
                        <Fade bottom>
                            <Columns>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="Mobile"
                                        score={2}
                                        rows={[
                                            { title: "PWA", score: 3 },
                                            { title: "Ionic 3/4", score: 2 },
                                            { title: "Android Studio", score: 1 },
                                            { title: "React Native", score: 1 },
                                        ]}
                                        color="purple"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="Divers"
                                        score={0}
                                        rows={[
                                            { title: "Java", score: 2 },
                                            { title: "Python", score: 2 },
                                            { title: "C/C++", score: 1 },
                                        ]}
                                        color="purple"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="Env."
                                        score={0}
                                        rows={[
                                            { title: "Debian", score: 3 },
                                            { title: "OMV", score: 3 },
                                            { title: "Win. Server", score: 2 },
                                            { title: "Bash", score: 3 },
                                            { title: "Cisco", score: 1 },
                                        ]}
                                        color="purple"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="Transverse"
                                        score={0}
                                        rows={[
                                            { title: "Merise", score: 3 },
                                            { title: "Agile", score: 3 },
                                            { title: "UML", score: 2 },
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
                    className={classNames(styles['row'], styles['row-career'])}
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
                        <Fade bottom>
                            <>
                                <CareerCard
                                    title="Alternance en développement informatique"
                                    location={{
                                        company: "Nextdecision",
                                        url: "https://www.next-decision.fr/",
                                        city: "Nantes"
                                    }}
                                    period={[new Date(2018, 2), new Date()]}
                                    missions={[
                                        {
                                            title: "Développement d'applications web métier",
                                            desc: "Interventions aux différents niveaux d'une application web : Frontend, Backend (API) et Base de données"
                                        },
                                        {
                                            title: "Gestion du client",
                                            desc: "Élaboration de cahiers des charges, TMA, gestion de projets et relation client"
                                        },
                                        {
                                            title: "Création de programmes/outils divers",
                                            desc: "Génération de PDF, Job Talend, mise en place d'environnements, etc."
                                        }
                                    ]}
                                />
                                <CareerCard
                                    title="Stage en développement web (B2)"
                                    location={{
                                        company: "Nextdecision",
                                        url: "https://www.next-decision.fr/",
                                        city: "Nantes"
                                    }}
                                    period={[new Date(2018, 6), new Date(2018, 7)]}
                                    missions={[
                                        {
                                            title: "Développement d'applications web",
                                            desc: "Réalisation de fonctionnalités & corrections de bugs d'applications existantes"
                                        }
                                    ]}
                                />
                                <CareerCard
                                    title="Stage en développement web (B1)"
                                    location={{
                                        city: "Nantes",
                                        company: "Label Communication",
                                        url: "https://www.labelcommunication.net/"
                                    }}
                                    period={[new Date(2017, 6), new Date(2017, 7)]}
                                    missions={[
                                        {
                                            title: "Réalisation de sites vitrines",
                                            desc: "Apprentissage de Wordpress et son environnement (WooComerce, etc.)"
                                        }
                                    ]}
                                />
                                <CareerCard
                                    title="Diplôme d'expert développement web"
                                    location={{
                                        city: "Nantes",
                                        company: "Ynov",
                                        url: "https://www.ynov.com/campus/nantes/",
                                    }}
                                    period={[new Date(2016, 8), new Date(2021, 8)]}
                                    missions={[
                                        {
                                            title: "2 années de Mastères",
                                            desc: "Spécialisation expert développement web"
                                        },
                                        {
                                            title: "3 années de Bachelor",
                                            desc: "Apprentissage général de l'informatique : développement, réseaux et culture générale"
                                        }
                                    ]}
                                />
                                <CareerCard
                                    title="Baccalauréat S SVT, mention assez bien (13.5/20)"
                                    location={{
                                        city: "Nantes",
                                        company: "Lycée Notre-Dame de Toutes-Aides",
                                        url: "http://ndtoutesaides.fr/"
                                    }}
                                    period={[new Date(2016, 3), new Date(2016, 5)]}
                                    missions={[
                                        {
                                            title: "Projet Bac ISN (spécialité informatique)",
                                            desc: "Réalisation d’un jeu vidéo sous Processing 3 : 20/20 obtenu"
                                        }
                                    ]}
                                />
                                <CareerCard
                                    title="Stage de 3e"
                                    location={{
                                        city: "Nantes",
                                        company: "Parabellum Geographic Insight",
                                        url: "https://www.pginsight.com/"
                                    }}
                                    period={[new Date(2011, 11)]}
                                    missions={[
                                        {
                                            title: "Observation des métiers de l'informatique",
                                            desc: "Observation de problématiques réseaux et développement"
                                        }
                                    ]}
                                />
                            </>
                        </Fade>
                    </Container>
                </div>
                <div
                    id="productions"
                    className={classNames(styles['row'], styles['row-productions'])}
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
                            Vous êtes en train d'en vivre une
                        </Title>
                        <br />
                        <Columns>
                            <Columns.Column
                                align="center"
                                vAlign="center"
                                sizes={["one-third-desktop", "full-tablet"]}
                            >
                                <Fade left>
                                    <Img
                                        src={{
                                            // @ts-ignore
                                            normal: require(`public/images/website.png?resize`),
                                            // @ts-ignore
                                            webp: require(`public/images/website.png?resize&format=webp`),
                                            // @ts-ignore
                                            lqip: require(`public/images/website.png?lqip`)
                                        }}
                                        alt="kiriancaumes.fr"
                                        width={320}
                                        height={180}
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <p>
                                    Le site que vous êtes en train de visiter a été entièrement réalisé par mes soins. Celui-ci repose sur <b>NextJs</b> : un Framework <b>ReactJs</b> permettant notamment la mise en place d'un rendu des composants côté serveur ou, dans le cas de ce site, la génération d'application statique.<br />
                                    À travers ce projet, une partie de mes compétences auront pu être exprimées. Allant de la phase de <b>conception</b> (recherche d'idées, mockup, etc.) à l'<b>hébergement</b> (déploiement continu, etc.) en passant bien sûr par la phase de <b>développement</b> (découpage des composants, logique fonctionnelle, etc.).<br />
                                    <Tag color="blue">#NextJs</Tag>
                                    <Tag color="blue">#ReactJs</Tag>
                                    <Tag color="blue">#SCSS</Tag>
                                    <Tag color="blue">#PWA</Tag>
                                    <Tag color="blue">#Docker</Tag>
                                </p>
                                <br />
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
                    id="passions"
                    className={classNames(styles['row'], styles['row-passions'])}
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
                            <Columns.Column sizes={["one-third-desktop", "full-tablet"]}>
                                <Fade left>
                                    <FlatCard
                                        imageSrc={{
                                            // @ts-ignore
                                            normal: require(`public/images/handball.jpg?resize`),
                                            // @ts-ignore
                                            webp: require(`public/images/handball.jpg?resize&format=webp`),
                                            // @ts-ignore
                                            lqip: require(`public/images/handball.jpg?lqip`)
                                        }}
                                        title="Handball"
                                        content={<>
                                            Joueur de Handball au poste de gardien de but, à ma treizième année au club de Thouaré sur Loire, puis de Carquefou.<br /><br />
                                            J'y ai développé de vrais liens humains dans un projet d'équipe ayant un objectif commun.<br /><br />
                                            Fidèle supporter du HBC Nantes et de l'équipe de France.
                                        </>}
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column sizes={["one-third-desktop", "full-tablet"]}>
                                <Fade bottom>
                                    <FlatCard
                                        imageSrc={{
                                            // @ts-ignore
                                            normal: require(`public/images/ajesterscollection.png?resize`),
                                            // @ts-ignore
                                            webp: require(`public/images/ajesterscollection.png?resize&format=webp`),
                                            // @ts-ignore
                                            lqip: require(`public/images/ajesterscollection.png?lqip`)
                                        }}
                                        title="Collections"
                                        content={<>
                                            Collectionneur depuis toujours d'objets en tous genres (pièces d'euros, timbres, fèves, jeux vidéo, etc.), j'y voue une véritable passion.<br /><br />
                                            Aujourd'hui la collection vers laquelle je suis principalement tourné concerne le groupe de musique In Flames avec un ensemble de CD, vinyl et autres. Je partage également cette passion sur internet sous le pseudonyme : <a href="https://jesterscollection.kiriancaumes.fr/" target="_blank" rel="noopener">A Jester's Collection</a>.
                                        </>}
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column sizes={["one-third-desktop", "full-tablet"]}>
                                <Fade right>
                                    <FlatCard
                                        imageSrc={{
                                            // @ts-ignore
                                            normal: require(`public/images/developpement.jpg?resize`),
                                            // @ts-ignore
                                            webp: require(`public/images/developpement.jpg?resize&format=webp`),
                                            // @ts-ignore
                                            lqip: require(`public/images/developpement.jpg?lqip`)
                                        }}
                                        title="Développement"
                                        content={<>
                                            Plus qu'un métier, le développement est également une passion. Je m'amuse fréquemment à développer différents projets, qu'ils soient Open Source, ou bien directement pour mon usage personnel (<a href="https://github.com/KirianCaumes" target="_blank" rel="noopener">Github</a>).<br /><br />
                                            Ainsi, je peux me permettre d'expérimenter de mon côté pour proposer des solutions innovantes lors de projets professionnels.
                                        </>}
                                    />
                                </Fade>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </div>
                <div
                    id="contact"
                    className={classNames(styles['row'], styles['row-contact'])}
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
                                <Fade left>
                                    <Card
                                        icon={<Icon name="mail" />}
                                        title="Par mail"
                                        content={
                                            <a
                                                href="mailto:kirian.caumes@gmail.com"
                                            >
                                                kirian.caumes@gmail.com
                                            </a>
                                        }
                                        color="pink"
                                        align="center"
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <Fade right>
                                    <Card
                                        icon={<Icon name="linkedin" />}
                                        title="Par Linkedin"
                                        content={
                                            <a
                                                href="https://www.linkedin.com/in/kirian-caumes-120a0513a/"
                                                rel="noopener"
                                                target="_blank"
                                            >
                                                linkedin.com
                                            </a>
                                        }
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
