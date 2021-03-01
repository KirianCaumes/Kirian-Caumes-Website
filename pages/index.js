import React from 'react'
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
                                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra in magna non aliquet. Vestibulum ex sem, elementum ac facilisis vitae, molestie id nisl. <br />Sed eget elementum justo. Praesent dignissim lorem quis mauris pulvinar, nec condimentum purus accumsan. Aliquam pharetra tortor eget dui vulputate, non cursus ante sodales. Nunc vel sollicitudin nibh. Nullam sit amet ante eu sapien tincidunt semper quis ut nibh.<br /> Phasellus sagittis magna vitae ipsum blandit, non fringilla massa blandit. Curabitur et sapien rhoncus, scelerisque turpis in, accumsan tellus. */}
                                    Jeune étudiant passionné et curieux  du  monde  informatique, je cherche à exploiter mes  compétences  afin  que ce domaine puisse être mon métier de demain.<br />
                                    Persévérant,  pour  un  projet qui me tient à cœur je donnerais  mon  possible  afin d'en voir l'aboutissement.<br />
                                    Agréable,  je  me  montre  sérieux  et  professionnel  tout en  gardant  ma  sympathie qui  m'importe  particulièrement.
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
                                        // @ts-ignore
                                        src={require(`public/images/kirian_caumes.jpg?resize`)}
                                        // @ts-ignore
                                        srcWebp={require(`public/images/kirian_caumes.jpg?resize&format=webp`)}
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
                            A propos de moi
                        </Title>
                        <Title
                            level={3}
                            isSubtitle
                            isCentered
                        >
                            Quelques traits de caracteres
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
                            Mon savoir-faire de développeur web
                        </Title>
                        <br />
                        <Fade bottom>
                            <Columns>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="test test testtesttesttest"
                                        score={4}
                                        rows={[
                                            { title: "qsdqsd aze qsdqs qsdqsd aze qsdqs", score: 3 },
                                            { title: "cc", score: 3 },
                                            { title: "cc", score: 3 },
                                            { title: "cc", score: 3 },
                                            { title: "cc", score: 3 },
                                            { title: "cc", score: 3 },
                                            { title: "cc", score: 3 },
                                            { title: "cc", score: 3 },
                                        ]}
                                        color="yellow"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="test"
                                        score={4}
                                        rows={[
                                            { title: "cc", score: 3 }
                                        ]}
                                        color="yellow"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="test"
                                        score={4}
                                        rows={[
                                            { title: "cc", score: 3 }
                                        ]}
                                        color="yellow"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="test"
                                        score={4}
                                        rows={[
                                            { title: "cc", score: 3 }
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
                                        title="test"
                                        score={4}
                                        rows={[
                                            { title: "cc", score: 3 }
                                        ]}
                                        color="pink"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="test"
                                        score={4}
                                        rows={[
                                            { title: "cc", score: 3 }
                                        ]}
                                        color="pink"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="test"
                                        score={4}
                                        rows={[
                                            { title: "cc", score: 3 }
                                        ]}
                                        color="pink"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="test"
                                        score={4}
                                        rows={[
                                            { title: "cc", score: 3 }
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
                                        title="test"
                                        score={4}
                                        rows={[
                                            { title: "cc", score: 3 }
                                        ]}
                                        color="purple"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="test"
                                        score={4}
                                        rows={[
                                            { title: "cc", score: 3 }
                                        ]}
                                        color="purple"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="test"
                                        score={4}
                                        rows={[
                                            { title: "cc", score: 3 }
                                        ]}
                                        color="purple"
                                    />
                                </Columns.Column>
                                <Columns.Column sizes={["one-quarter-widescreen", "half-desktop", "half-tablet"]}>
                                    <Skillcard
                                        title="test"
                                        score={4}
                                        rows={[
                                            { title: "cc", score: 3 }
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
                                    title="Alternance"
                                    location={{
                                        company: "Nextdecision",
                                        url: "https://www.next-decision.fr/",
                                        city: "Nantes"
                                    }}
                                    period={[new Date(2018, 2), new Date()]}
                                    missions={[
                                        {
                                            title: "Mission 1",
                                            desc: "Description mission 1"
                                        },
                                        {
                                            title: "Mission 2",
                                            desc: "Description mission 2"
                                        },
                                        {
                                            title: "Mission 3",
                                            desc: "Description mission 3"
                                        }
                                    ]}
                                />
                                <CareerCard
                                    title="Stage"
                                    location={{
                                        city: "Nantes"
                                    }}
                                    period={[new Date(2017, 8), new Date(2018, 2)]}
                                    missions={[
                                        {
                                            title: "Mission 1",
                                            desc: "Description mission 1"
                                        },
                                        {
                                            title: "Mission 2",
                                            desc: "Description mission 2"
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
                            Vous êtes en train de vivre une
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
                                        // @ts-ignore
                                        src={require(`public/images/website.png?resize`)}
                                        // @ts-ignore
                                        srcWebp={require(`public/images/website.png?resize&format=webp`)}
                                        alt="kiriancaumes.fr"
                                        width={320}
                                        height={180}
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra quam non neque varius, at mollis sem mattis. Aenean ultrices rhoncus hendrerit. Mauris finibus, mauris non blandit rhoncus, risus mi maximus augue, ac hendrerit tellus tortor vel ante. Proin dapibus est ut cursus vulputate. Pellentesque ullamcorper ex et lorem blandit, vitae facilisis est aliquet.<br />
                                    <Tag color="blue">#NextJs</Tag>
                                    <Tag color="blue">#ReactJs</Tag>
                                    <Tag color="blue">#SCSS</Tag>
                                </p>
                                <br />
                                <br />
                                <Button
                                    href="https://github.com/KirianCaumes/Kirian-Caumes-Website"
                                    color="purple"
                                    isOutlined
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
                                        // @ts-ignore
                                        imageSrc={require(`public/images/handball.jpg?resize`)}
                                        // @ts-ignore
                                        imageSrcWebp={require(`public/images/handball.jpg?resize&format=webp`)}
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
                                        // @ts-ignore
                                        imageSrc={require(`public/images/ajesterscollection.png?resize`)}
                                        // @ts-ignore
                                        imageSrcWebp={require(`public/images/ajesterscollection.png?resize&format=webp`)}
                                        title="Collections"
                                        content={<>
                                            Collectionneur depuis toujours d'objets en tous genres (pièces d'euros, timbres, fèves, jeux vidéo, etc.), j'y voue une véritable passion. Aujourd'hui mes collections sont tournées vers les thèmes :<br /><br />
                                            Le groupe du musique In Flames (<a href="https://jesterscollection.kiriancaumes.fr/" target="_blank" rel="noopener">A Jester's Collection</a>)
                                    </>}
                                    />
                                </Fade>
                            </Columns.Column>
                            <Columns.Column sizes={["one-third-desktop", "full-tablet"]}>
                                <Fade right>
                                    <FlatCard
                                        // @ts-ignore
                                        imageSrc={require(`public/images/developpement.jpg?resize`)}
                                        // @ts-ignore
                                        imageSrcWebp={require(`public/images/developpement.jpg?resize&format=webp`)}
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
