import React from "react"
import Head from "next/head"
// @ts-ignore
import styles from "styles/pages/mentions-legales.module.scss"
import getConfig from 'next/config'
import Container from "components/containers/container"
import Title from "components/elements/title"

/**
 * Mentios légales page
 */
export default function MentionsLegales() {
    const { publicRuntimeConfig } = getConfig()

    return (
        <>
            <Head>
                <title>Mentions legales - {publicRuntimeConfig.appName}
                </title>
                <meta
                    name="description"
                    content={`Mentions legales du site ${publicRuntimeConfig.appName}`}
                />
                <meta name="robots" content="noindex" />
            </Head>

            <main className={styles['mentions-legales']}>
                <Container>
                    <Title
                        level={1}
                    >
                        Mentions légales
                    </Title>
                    <p>
                        Le site appartient a <strong>Kirian Caumes</strong>.
                    </p>
                    <Title
                        level={2}
                    >
                        Hébergeur
                    </Title>
                    <p>
                        <strong>Hebergeur :</strong> <a href="https://www.ovh.com/fr/" target="_blank" rel="noopener">ovh.com</a><br />
                        <strong>Adresse :</strong> 2 rue Kellermann / 59100 Roubaix / France<br />
                        <strong>Téléphone :</strong> 1007
                    </p>
                    <Title
                        level={2}
                    >
                        Éditeur du Site
                    </Title>
                    <p>
                        <strong>Nom</strong> : Caumes<br />
                        <strong>Prénon</strong> : Kirian<br />
                        <strong>E-mail</strong> : kirian.caumes@gmail.com
                    </p>
                    <Title
                        level={2}
                    >
                        Politique de confidentialité
                    </Title>
                    <p>
                        <strong>Kirian Caumes </strong>s’engage à protéger votre vie privée. Contactez-nous si vous avez des questions ou des problèmes concernant l’utilisation de vos données personnelles et nous serons heureux de vous aider.
                    </p>
                    <p>
                        En utilisant ce site et/ou nos services, vous consentez au traitement de vos données personnelles tel que décrit dans cette politique de confidentialité.<br />
                    </p>
                    <Title
                        level={2}
                    >
                        Définitions
                    </Title>
                    <p>
                        <strong>Données personnelles</strong> – toute information concernant une personne physique identifiée ou identifiable.<br />
                        <strong>Traitement</strong> – toute opération ou ensemble d’opérations effectuées sur des Données Personnelles ou sur des ensembles de Données Personnelles.<br />
                        <strong>La personne concernée</strong> – une personne physique dont les données personnelles sont en cours de traitement.<br />
                        <strong>Enfant</strong> – personne physique âgée de moins de 16 ans.<br />
                        <strong>Nous </strong>– <strong>Kirian Caumes</strong><br />
                    </p>
                    <Title
                        level={2}
                    >
                        Principes de protection des données
                    </Title>
                    <p>
                        Nous nous engageons à respecter les principes de protection des données suivants :
                    </p>
                    <ul>
                        <li>Le traitement est légal, équitable et transparent. Nos activités de traitement ont des motifs légitimes. Nous considérons toujours vos droits avant de traiter des données personnelles. Nous vous fournirons des informations concernant le traitement sur demande.</li>
                        <li>Le traitement est limité à la finalité. Nos activités de traitement correspondent à l’objectif pour lequel les données personnelles ont été collectées.</li>
                        <li>Le traitement se fait avec un minimum de données. Nous ne recueillons et ne traitons que la quantité minimale de Données Personnelles nécessaire à quelque fin que ce soit.</li>
                        <li>Le traitement est limité dans le temps. Nous ne conserverons pas vos données personnelles plus longtemps que nécessaire.</li>
                        <li>Nous ferons de notre mieux pour assurer l’exactitude des données.</li>
                        <li>Nous ferons de notre mieux pour assurer l’intégrité et la confidentialité des données.</li>
                    </ul>
                    <Title
                        level={2}
                    >
                        Droits de la personne concernée
                    </Title>
                    <p>
                        La personne concernée dispose des droits suivants :
                    </p>
                    <ol>
                        <li>Droit à l’information – vous avez le droit de savoir si vos données personnelles sont traitées, quelles données sont collectées, d’où elles proviennent, pourquoi et par qui elles sont traitées.</li>
                        <li>Droit d’accès – c’est-à-dire que vous avez le droit d’accéder aux données collectées auprès de vous ou à votre sujet. Ceci inclut votre droit de demander et d’obtenir une copie de vos données personnelles recueillies.</li>
                        <li>Droit de rectification – c’est-à-dire que vous avez le droit de demander la rectification ou l’effacement de vos données personnelles inexactes ou incomplètes.</li>
                        <li>Droit d’effacement – c’est-à-dire que, dans certaines circonstances, vous pouvez demander que vos données personnelles soient effacées de nos dossiers.</li>
                        <li>Droit de limiter le traitement – c’est-à-dire que lorsque certaines conditions s’appliquent, vous avez le droit de restreindre le traitement de vos données personnelles.</li>
                        <li>Droit de s’opposer au traitement – dans certains cas, vous avez le droit de vous opposer au traitement de vos données personnelles, par exemple dans le cas du marketing direct.</li>
                        <li>Droit de s’opposer au traitement automatisé – ce qui signifie que vous avez le droit de vous opposer au traitement automatisé, y compris le profilage, et de ne pas être soumis à une décision fondée uniquement sur le traitement automatisé. Ce droit peut être exercé chaque fois qu’un résultat du profilage produit des effets juridiques vous concernant ou vous affectant de manière significative.</li>
                        <li>Droit à la transférabilité des données – vous avez le droit d’obtenir vos données personnelles dans un format lisible par machine ou, si cela est possible, sous forme de transfert direct d’un processeur à un autre.</li>
                        <li>Droit de déposer une plainte – si nous refusons votre demande en vertu du droit d’accès, nous vous en donnerons les raisons. Si vous n’êtes pas satisfait de la façon dont votre demande a été traitée, veuillez nous contacter.</li>
                        <li>Droit à l’aide d’une autorité de surveillance – ce qui signifie que vous avez le droit à l’aide d’une autorité de surveillance et le droit à d’autres recours légaux tels que la réclamation de dommages-intérêts.</li>
                        <li>Droit de retirer votre consentement – vous avez le droit de retirer tout consentement donné pour le traitement de vos données personnelles.</li>
                    </ol>
                    <Title
                        level={2}
                    >
                        Les données que nous recueillons
                    </Title>
                    <p>
                        <strong>Informations que vous nous avez fournies</strong><br />
                        Il peut s’agir de votre adresse électronique, de votre nom, de votre adresse de facturation, de votre adresse domiciliaire, etc. – principalement les informations nécessaires pour vous livrer un produit ou un service ou pour améliorer votre expérience client avec nous.
                    </p>
                    <br />
                    <p>
                        <strong>Informations collectées automatiquement sur vous</strong><br />
                        Cela inclut les informations qui sont automatiquement stockées par les cookies et autres outils de session. Ces informations sont utilisées pour améliorer votre expérience client. Lorsque vous utilisez nos services ou consultez le contenu de notre site Web, vos activités peuvent être enregistrées.
                    </p>
                    <Title
                        level={2}
                    >
                        Comment nous utilisons vos données personnelles
                    </Title>
                    <p>
                        Nous utilisons vos données personnelles pour :
                    </p>
                    <ul>
                        <li>vous fournir notre service</li>
                        <li>améliorer votre expérience client</li>
                    </ul>
                    <br />
                    <p>
                        Nous utilisons vos données personnelles pour des motifs légitimes et/ou avec votre consentement.
                    </p>
                    <p>
                        En raison de la conclusion d’un contrat ou de l’exécution d’obligations contractuelles, nous traitons vos données personnelles aux fins suivantes :
                    </p>
                    <ul>
                        <li>pour vous identifier ;</li>
                        <li>pour vous fournir un service ou vous envoyer un produit ;</li>
                        <li>pour communiquer soit pour la vente, soit pour la facturation ;</li>
                    </ul>
                    <br />
                    <p>
                        Pour des raisons d’intérêt légitime, nous traitons vos données personnelles aux fins suivantes :
                    </p>
                    <ul>
                        <li>d’administrer et d’analyser notre clientèle (comportement et historique d’achat) afin d’améliorer la qualité, la variété et la disponibilité des produits/services offerts / fournis ;</li>
                        <li>d’effectuer des questionnaires sur la satisfaction des clients ;</li>
                    </ul>
                    <br />
                    <p>
                        Tant que vous ne nous avez pas informés du contraire, nous considérons que vous offrir des produits/services similaires ou identiques à votre historique d’achat/comportement de navigation est dans notre intérêt légitime.
                    </p>
                    <br />
                    <p>
                        Avec votre consentement, nous traitons vos données personnelles aux fins suivantes :
                    </p>
                    <ul>
                        <li>pour vous envoyer des newsletters et des offres de campagne (de notre part et/ou de nos partenaires soigneusement sélectionnés) ;</li>
                        <li>à d’autres fins pour lesquelles nous vous avons demandé votre consentement ;</li>
                    </ul>
                    <br />
                    <p>
                        Nous traitons vos Données Personnelles afin de remplir les obligations découlant de la loi et/ou d’utiliser vos Données Personnelles pour les options prévues par la loi. Nous nous réservons le droit d’anonymiser les données personnelles recueillies et d’utiliser ces données. Nous n’utiliserons les données en dehors du champ d’application de la présente politique que lorsqu’elles seront rendues anonymes. Nous conservons vos informations de facturation et autres informations recueillies à votre sujet aussi longtemps que nécessaire à des fins comptables ou autres obligations découlant de la loi.
                    </p>
                    <br />
                    <p>
                        Nous pouvons traiter vos données personnelles à des fins supplémentaires qui ne sont pas mentionnées ici, mais qui sont compatibles avec l’objectif initial pour lequel les données ont été recueillies. Pour ce faire, nous veillerons à ce que :
                    </p>
                    <ul>
                        <li>le lien entre les finalités, le contexte et la nature des Données Personnelles est approprié pour un Traitement ultérieur ;</li>
                        <li>le traitement ultérieur ne porterait pas préjudice à vos intérêts et à ceux du <strong>Kirian Caumes</strong></li>
                        <li>il y aurait des mesures de protection appropriées pour le traitement.</li>
                    </ul>
                    <br />
                    <p>
                        Nous vous informerons de tout traitement et de toute finalité ultérieurs.
                    </p>
                    <Title
                        level={2}
                    >
                        Comment nous sécurisons vos données
                    </Title>
                    <p>
                        Nous faisons de notre mieux pour protéger vos données personnelles. Nous utilisons des protocoles sécurisés pour la communication et le transfert de données (tels que HTTPS). Nous utilisons l’anonymat et le pseudonymat lorsque cela est approprié. Nous surveillons nos systèmes pour détecter d’éventuelles vulnérabilités et attaques.
                    </p>
                    <br />
                    <p>
                        Même si nous faisons de notre mieux, nous ne pouvons pas garantir la sécurité de l’information. Toutefois, nous nous engageons à informer les autorités compétentes en cas d’atteinte à la protection des données. Nous vous aviserons également s’il y a une menace à vos droits ou intérêts. Nous ferons tout ce qui est raisonnablement possible pour prévenir les atteintes à la sécurité et pour aider les autorités en cas d’atteinte à la sécurité.
                    </p>
                    <br />
                    <p>
                        Si vous avez un compte chez nous, notez que vous devez garder votre nom d’utilisateur et votre mot de passe secrets.
                    </p>
                    <Title
                        level={2}
                    >
                        Enfants
                    </Title>
                    <p>
                        Nous n’avons pas l’intention de recueillir ou de recueillir sciemment des renseignements auprès des enfants. Nous ne ciblons pas les enfants avec nos services.
                    </p>
                    <Title
                        level={2}
                    >
                        Cookies et autres technologies que nous utilisons
                    </Title>
                    <p>
                        Nous utilisons des cookies et/ou des technologies similaires pour analyser le comportement des clients, administrer le site Web, suivre les mouvements des utilisateurs et collecter des informations sur les utilisateurs. Ceci est fait dans le but de personnaliser et d’améliorer votre expérience avec nous.
                    </p>
                    <br />
                    <p>
                        Un cookie est un petit fichier texte stocké sur votre ordinateur. Les cookies stockent des informations qui sont utilisées pour aider à faire fonctionner les sites. Seuls nous pouvons accéder aux cookies créés par notre site Web. Vous pouvez contrôler vos cookies au niveau du navigateur. Le choix de désactiver les cookies peut entraver votre utilisation de certaines fonctions.
                    </p>
                    <br />
                    <p>
                        <strong>Nous utilisons les cookies aux fins suivantes :</strong>
                    </p>
                    <br />
                    <ul>
                        <li>Cookies nécessaires – ces cookies sont nécessaires pour que vous puissiez utiliser certaines fonctions importantes de notre site Web, telles que la connexion. Ces cookies ne collectent aucune information personnelle.</li>
                        <li>Fonctionnalité des cookies – ces cookies fournissent des fonctionnalités qui rendent l’utilisation de notre service plus pratique et permettent d’offrir des fonctionnalités plus personnalisées. Par exemple, ils peuvent se souvenir de votre nom et de votre adresse électronique dans les formulaires de commentaires afin que vous n’ayez pas à saisir ces informations à nouveau la prochaine fois lorsque vous commentez.</li>
                        <li>Cookies d’analyse – ces cookies sont utilisés pour suivre l’utilisation et la performance de notre site Web et de nos services.</li>
                        <li>Cookies publicitaires – ces cookies sont utilisés pour diffuser des publicités qui vous concernent et qui correspondent à vos intérêts. De plus, ils sont utilisés pour limiter le nombre de fois que vous voyez une publicité. Ils sont généralement placés sur le site Web par des réseaux publicitaires avec l’autorisation de l’exploitant du site Web. Ces cookies rappellent que vous avez visité un site Web et que ces informations sont partagées avec d’autres organisations telles que les annonceurs. Souvent, les cookies de ciblage ou de publicité seront liés aux fonctionnalités du site fournies par l’autre organisation.</li>
                    </ul>
                    <br />
                    <p>
                        Nous utilisons Google Analytics pour mesurer le trafic sur notre site Web. Google a ses propres règles de confidentialité que vous pouvez consulter <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener">ici</a>.
                    </p>
                    <Title
                        level={2}
                    >
                        Modifications à cette politique de confidentialité
                    </Title>
                    <p>
                        Nous nous réservons le droit de modifier cette politique de confidentialité.<br />
                        Dernière modification apportée le 02/03/2021.
                    </p>
                </Container>
            </main>
        </>
    )
}