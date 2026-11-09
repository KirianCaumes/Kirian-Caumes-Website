# Critères RGAA 4.1.2

Titles copied from the official page, https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/; each number links to its tests there. The right column is what the criterion means **on kiriancaumes.fr** (Next.js 16 App Router, React 19, home-made components under `src/components`, SCSS modules, French copy, single light theme). « n/a » marks what the site has no instance of today: re-check it the day such content appears. An empty cell means the criterion applies as written, with nothing specific to the stack.


## 1. Images

| # | Critère | Sur le site |
|---|---|---|
| [1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.1) | Chaque image porteuse d'information a-t-elle une alternative textuelle ? | `next/image` and `<img>` (the portrait, the hobby photos, the site screenshot, the navbar logo) need an `alt` saying what they show; the `Icon` SVGs are `aria-hidden` and the surrounding link carries the name |
| [1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2) | Chaque image de décoration est-elle correctement ignorée par les technologies d'assistance ? | `alt=""` when the text beside it says the same; an `Icon` inside a labelled link is hidden, never labelled twice |
| [1.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.3) | Pour chaque image porteuse d'information ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ? | The `alt` says what the picture tells here, in French (« Photo de profil de Kirian Caumes »), not its file name; a linked picture says where it leads |
| [1.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.4) | Pour chaque image utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle, cette alternative permet-elle d'identifier la nature et la fonction de l'image ? | n/a, no CAPTCHA |
| [1.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.5) | Pour chaque image utilisée comme CAPTCHA, une solution d'accès alternatif au contenu ou à la fonction du CAPTCHA est-elle présente ? | n/a, no CAPTCHA |
| [1.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.6) | Chaque image porteuse d'information a-t-elle, si nécessaire, une description détaillée ? |  |
| [1.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.7) | Pour chaque image porteuse d'information ayant une description détaillée, cette description est-elle pertinente ? |  |
| [1.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.8) | Chaque image texte porteuse d'information, en l'absence d'un mécanisme de remplacement, doit si possible être remplacée par du texte stylé. Cette règle est-elle respectée (hors cas particuliers) ? | Text drawn as an image (the site screenshot is an illustration, not the only copy of a text) is styled text instead |
| [1.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.9) | Chaque légende d'image est-elle, si nécessaire, correctement reliée à l'image correspondante ? |  |

## 2. Cadres

| # | Critère | Sur le site |
|---|---|---|
| [2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#2.1) | Chaque cadre a-t-il un titre de cadre ? | n/a, no `<iframe>` today: `title` on it the day one appears |
| [2.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#2.2) | Pour chaque cadre ayant un titre de cadre, ce titre de cadre est-il pertinent ? | n/a, no `<iframe>` today |

## 3. Couleurs

| # | Critère | Sur le site |
|---|---|---|
| [3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1) | Dans chaque page web, l'information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ? | A `Tag` or a card color carries no meaning on its own: the information is in the words |
| [3.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.2) | Dans chaque page web, le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers) ? | 4.5:1 (3:1 at 24px, or 18.5px bold). Single light theme, tokens in `src/styles/abstracts/_variables.scss` (`$colors`, `$brand-*`): accepted exception: white text on `tertiary` (`#fb7b6b`, 2.6:1) on the tags of the Lead Tech card, kept on purpose, do not report it; check white text on the `background-primary` SVG, `grey-medium` captions, the quote block, the GDPR banner |
| [3.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.3) | Dans chaque page web, les couleurs utilisées dans les composants d'interface ou les éléments graphiques porteurs d'informations sont-elles suffisamment contrastées (hors cas particuliers) ? | 3:1 for focus rings, button borders, the outlined button, the `Border` ornament when it carries meaning |

## 4. Multimédia

| # | Critère | Sur le site |
|---|---|---|
| [4.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.1) | Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription (hors cas particuliers) ? | n/a, no audio, video or animation media |
| [4.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.2) | Pour chaque média temporel pré-enregistré ayant une transcription textuelle ou une audiodescription synchronisée, celles-ci sont-elles pertinentes (hors cas particuliers) ? | n/a, no audio, video or animation media |
| [4.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.3) | Chaque média temporel synchronisé pré-enregistré a-t-il, si nécessaire, des sous-titres synchronisés (hors cas particuliers) ? | n/a, no audio, video or animation media |
| [4.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.4) | Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ? | n/a, no audio, video or animation media |
| [4.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.5) | Chaque média temporel pré-enregistré a-t-il, si nécessaire, une audiodescription synchronisée (hors cas particuliers) ? | n/a, no audio, video or animation media |
| [4.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.6) | Pour chaque média temporel pré-enregistré ayant une audiodescription synchronisée, celle-ci est-elle pertinente ? | n/a, no audio, video or animation media |
| [4.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.7) | Chaque média temporel est-il clairement identifiable (hors cas particuliers) ? | n/a, no audio, video or animation media |
| [4.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.8) | Chaque média non temporel a-t-il, si nécessaire, une alternative (hors cas particuliers) ? | n/a, no audio, video or animation media |
| [4.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.9) | Pour chaque média non temporel ayant une alternative, cette alternative est-elle pertinente ? | n/a, no audio, video or animation media |
| [4.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.10) | Chaque son déclenché automatiquement est-il contrôlable par l'utilisateur ? | n/a, no audio, video or animation media |
| [4.11](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.11) | La consultation de chaque média temporel est-elle, si nécessaire, contrôlable par le clavier et tout dispositif de pointage ? | n/a, no audio, video or animation media |
| [4.12](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.12) | La consultation de chaque média non temporel est-elle contrôlable par le clavier et tout dispositif de pointage ? | n/a, no audio, video or animation media |
| [4.13](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.13) | Chaque média temporel et non temporel est-il compatible avec les technologies d'assistance (hors cas particuliers) ? | n/a, no audio, video or animation media |

## 5. Tableaux

| # | Critère | Sur le site |
|---|---|---|
| [5.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.1) | Chaque tableau de données complexe a-t-il un résumé ? | n/a, no table |
| [5.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.2) | Pour chaque tableau de données complexe ayant un résumé, celui-ci est-il pertinent ? | n/a, no table |
| [5.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.3) | Pour chaque tableau de mise en forme, le contenu linéarisé reste-t-il compréhensible ? | n/a, no layout table |
| [5.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.4) | Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ? | n/a, no table |
| [5.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.5) | Pour chaque tableau de données ayant un titre, celui-ci est-il pertinent ? | n/a, no table |
| [5.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.6) | Pour chaque tableau de données, chaque en-tête de colonne et chaque en-tête de ligne sont-ils correctement déclarés ? | n/a, no table |
| [5.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.7) | Pour chaque tableau de données, la technique appropriée permettant d'associer chaque cellule avec ses en-têtes est-elle utilisée (hors cas particuliers) ? | n/a, no table |
| [5.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.8) | Chaque tableau de mise en forme ne doit pas utiliser d'éléments propres aux tableaux de données. Cette règle est-elle respectée ? | n/a, no layout table |

## 6. Liens

| # | Critère | Sur le site |
|---|---|---|
| [6.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1) | Chaque lien est-il explicite (hors cas particuliers) ? | The name says where the link leads, alone or with its context: « Voir sur Github » under a project title, « Mon CV » (the PDF); a repeated « Voir » gets an `aria-label` that **starts** with the visible words |
| [6.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.2) | Dans chaque page web, chaque lien a-t-il un intitulé ? | No empty link: a link whose only child is an `Icon` or an `Image` carries an `aria-label` (LinkedIn, GitHub, the navbar logo through the image `alt`) |

## 7. Scripts

| # | Critère | Sur le site |
|---|---|---|
| [7.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1) | Chaque script est-il, si nécessaire, compatible avec les technologies d'assistance ? | Custom widgets get their role and state: the navbar burger is a `button` with `aria-expanded` and should name its menu (`aria-controls`); `Reveal` only adds a plain `div` |
| [7.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.2) | Pour chaque script ayant une alternative, cette alternative est-elle pertinente ? |  |
| [7.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.3) | Chaque script est-il contrôlable par le clavier et par tout dispositif de pointage (hors cas particuliers) ? | Everything clickable is reachable with Tab and works with Enter/Space: no `onClick` on a `div`/`li`/`img`; the burger and the GDPR buttons are `button`s, the navigation entries `Link`s |
| [7.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.4) | Pour chaque script qui initie un changement de contexte, l'utilisateur est-il averti ou en a-t-il le contrôle ? | No navigation on focus or on `onChange`; the navbar closes on a click only |
| [7.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.5) | Dans chaque page web, les messages de statut sont-ils correctement restitués par les technologies d'assistance ? | n/a, no status message today (no form, no live count); a `role="status"` the day one appears |

## 8. Éléments obligatoires

| # | Critère | Sur le site |
|---|---|---|
| [8.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.1) | Chaque page web est-elle définie par un type de document ? | Given by Next.js |
| [8.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.2) | Pour chaque page web, le code source généré est-il valide selon le type de document spécifié ? | No interactive element nested in another (`Button` with `href` renders one `<a>`, never an `<a>` in a `<button>`), no duplicate `id` (the section anchors `intro`, `about`, `skills`, `career`, `productions`, `passions`, `contact` are unique), no `<li>` outside a list |
| [8.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.3) | Dans chaque page web, la langue par défaut est-elle présente ? | `<html lang>` comes from `publicRuntimeConfig.appLang` (`fr-FR`) in `app/layout.tsx` |
| [8.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.4) | Pour chaque page web ayant une langue par défaut, le code de langue est-il pertinent ? |  |
| [8.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.5) | Chaque page web a-t-elle un titre de page ? | Every route sets its `<title>` through the Next metadata: `config.ts` for the home, `metadata` in each other `page.tsx` |
| [8.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.6) | Pour chaque page web ayant un titre de page, ce titre est-il pertinent ? | « <Page> - Kirian Caumes » for the inner pages; the home title carries the job title and the city |
| [8.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.7) | Dans chaque page web, chaque changement de langue est-il indiqué dans le code source (hors cas particuliers) ? | English words that are not loanwords (a quote, a project tagline, the GitHub button) get `lang="en"`; « Lead Tech », « Full Stack », library names are read as French words and need nothing |
| [8.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.8) | Dans chaque page web, le code de langue de chaque changement de langue est-il valide et pertinent ? |  |
| [8.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.9) | Dans chaque page web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ? | No heading tag chosen for its size (`Title` with the right `level`; a styled `p` otherwise). Known debt: parts of the home page still space blocks with `<br />` (the intro is now paragraphs with a margin); do not add new ones, use margins or `gap` |
| [8.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.10) | Dans chaque page web, les changements du sens de lecture sont-ils signalés ? | n/a, no right-to-left text |

## 9. Structuration de l'information

| # | Critère | Sur le site |
|---|---|---|
| [9.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.1) | Dans chaque page web, l'information est-elle structurée par l'utilisation appropriée de titres ? | One `h1` per page (`Title level={1}`: the name on the home, the page title elsewhere), `h2` per section, `h3` for the section subtitle and the card titles (`SkillCard`, `IconCard` level 4 under a card `h3`), no skipped level |
| [9.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.2) | Dans chaque page web, la structure du document est-elle cohérente (hors cas particuliers) ? | Landmarks from `Layout`: one `header` holding the `nav`, one `main` per view, one `footer`; the GDPR banner sits outside `main` |
| [9.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.3) | Dans chaque page web, chaque liste est-elle correctement structurée ? | Repeated items are lists: navbar entries `ul`, `SkillCard` tags `ul`, `CareerCard` missions a `dl`; a row of cards in `Columns` is layout, not a list, unless the cards are items of one set |
| [9.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.4) | Dans chaque page web, chaque citation est-elle correctement indiquée ? | The Code Lyoko quote is a `<figure>` / `<blockquote>` / `<figcaption>` with `<cite>` |

## 10. Présentation de l'information

| # | Critère | Sur le site |
|---|---|---|
| [10.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.1) | Dans le site web, des feuilles de styles sont-elles utilisées pour contrôler la présentation de l'information ? |  |
| [10.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.2) | Dans chaque page web, le contenu visible porteur d'information reste-t-il présent lorsque les feuilles de styles sont désactivées ? |  |
| [10.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.3) | Dans chaque page web, l'information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ? |  |
| [10.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.4) | Dans chaque page web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu'à 200 %, au moins (hors cas particuliers) ? | `html` is `font-size: 100%` (`bases/_reset.scss`), sizes in `rem`/`em`: the user's default size and the browser zoom apply; nothing clipped at 200% |
| [10.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.5) | Dans chaque page web, les déclarations CSS de couleurs de fond d'élément et de police sont-elles correctement utilisées ? |  |
| [10.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.6) | Dans chaque page web, chaque lien dont la nature n'est pas évidente est-il visible par rapport au texte environnant ? |  |
| [10.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.7) | Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible ? | Every link and button keeps a visible focus: the browser outline unless a `:focus-visible` rule draws a 3:1 ring; `button.module.scss` styles `:focus`, check it stays visible on each color |
| [10.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.8) | Pour chaque page web, les contenus cachés ont-ils vocation à être ignorés par les technologies d'assistance ? | `display: none` for what is hidden (the closed mobile menu), `aria-hidden` for the decorative (`Icon`, `Border`, the burger bars); nothing focusable inside an `aria-hidden` block |
| [10.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.9) | Dans chaque page web, l'information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ? |  |
| [10.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.10) | Dans chaque page web, l'information ne doit pas être donnée par la forme, taille ou position uniquement. Cette règle est-elle implémentée de façon pertinente ? | « le bouton à droite » is not an instruction: name the thing |
| [10.11](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.11) | Pour chaque page web, les contenus peuvent-ils être présentés sans perte d'information ou de fonctionnalité et sans avoir recours soit à un défilement vertical pour une fenêtre ayant une hauteur de 256 px, soit à un défilement horizontal pour une fenêtre ayant une largeur de 320 px (hors cas particuliers) ? | Works at 320px wide and at 200% zoom: `Columns` stack on mobile, no fixed widths on text, images `max-width: 100%` |
| [10.12](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.12) | Dans chaque page web, les propriétés d'espacement du texte peuvent-elles être redéfinies par l'utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ? | No fixed `height` on text boxes (cards grow with their content), so increased line/letter spacing does not clip |
| [10.13](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.13) | Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d'un composant d'interface sont-ils contrôlables par l'utilisateur (hors cas particuliers) ? | n/a, no tooltip or hover popover; a `title` attribute on the social links only duplicates the `aria-label` |
| [10.14](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.14) | Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ? | What a `:hover` reveals (navbar underline, card hover states) is decorative; anything revealed on hover must also show on `:focus-within` |

## 11. Formulaires

| # | Critère | Sur le site |
|---|---|---|
| [11.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.1) | Chaque champ de formulaire a-t-il une étiquette ? | n/a, no form: the contact section is links only; re-check the day a form appears |
| [11.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2) | Chaque étiquette associée à un champ de formulaire est-elle pertinente (hors cas particuliers) ? | n/a, no form: the contact section is links only; re-check the day a form appears |
| [11.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.3) | Dans chaque formulaire, chaque étiquette associée à un champ de formulaire ayant la même fonction et répétée plusieurs fois dans une même page ou dans un ensemble de pages est-elle cohérente ? | n/a, no form: the contact section is links only; re-check the day a form appears |
| [11.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.4) | Dans chaque formulaire, chaque étiquette de champ et son champ associé sont-ils accolés (hors cas particuliers) ? | n/a, no form: the contact section is links only; re-check the day a form appears |
| [11.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.5) | Dans chaque formulaire, les champs de même nature sont-ils regroupés, si nécessaire ? | n/a, no form: the contact section is links only; re-check the day a form appears |
| [11.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.6) | Dans chaque formulaire, chaque regroupement de champs de même nature a-t-il une légende ? | n/a, no form: the contact section is links only; re-check the day a form appears |
| [11.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.7) | Dans chaque formulaire, chaque légende associée à un regroupement de champs de même nature est-elle pertinente ? | n/a, no form: the contact section is links only; re-check the day a form appears |
| [11.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.8) | Dans chaque formulaire, les items de même nature d'une liste de choix sont-ils regroupés de manière pertinente ? | n/a, no form: the contact section is links only; re-check the day a form appears |
| [11.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.9) | Dans chaque formulaire, l'intitulé de chaque bouton est-il pertinent (hors cas particuliers) ? | The burger button and the GDPR buttons say what they do in French (« Ouvrir le menu », « Accepter », « Refuser »), not `aria-label="menu"` |
| [11.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10) | Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente (hors cas particuliers) ? | n/a, no form: the contact section is links only; re-check the day a form appears |
| [11.11](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.11) | Dans chaque formulaire, le contrôle de saisie est-il accompagné, si nécessaire, de suggestions facilitant la correction des erreurs de saisie ? | n/a, no form: the contact section is links only; re-check the day a form appears |
| [11.12](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.12) | Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, les données saisies peuvent-elles être modifiées, mises à jour ou récupérées par l'utilisateur ? | n/a, no form: the contact section is links only; re-check the day a form appears |
| [11.13](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.13) | La finalité d'un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l'utilisateur ? | n/a, no form: the contact section is links only; re-check the day a form appears |

## 12. Navigation

| # | Critère | Sur le site |
|---|---|---|
| [12.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.1) | Chaque ensemble de pages dispose-t-il de deux systèmes de navigation différents, au moins (hors cas particuliers) ? | The navbar plus the in-page anchors on a one-page site; the footer links the legal notice |
| [12.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.2) | Dans chaque ensemble de pages, le menu et les barres de navigation sont-ils toujours à la même place (hors cas particuliers) ? | The `Layout` renders the same `header` and `footer` on every page |
| [12.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.3) | La page « plan du site » est-elle pertinente ? | n/a, no site map page (the XML sitemap is for crawlers) |
| [12.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.4) | Dans chaque ensemble de pages, la page « plan du site » est-elle accessible à partir d'une fonctionnalité identique ? | n/a, no site map page |
| [12.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.5) | Dans chaque ensemble de pages, le moteur de recherche est-il atteignable de manière identique ? | n/a, no search engine |
| [12.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.6) | Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d'en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) peuvent-elles être atteintes ou évitées ? | The `header`, `nav`, `main` and `footer` landmarks; the `nav` should be named (`aria-label="Navigation principale"`) the day a second `nav` appears |
| [12.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.7) | Dans chaque page web, un lien d'évitement ou d'accès rapide à la zone de contenu principal est-il présent (hors cas particuliers) ? | No skip link today: a « Aller au contenu » link before the `header`, visible on focus, targeting `main` (`id` + `tabIndex={-1}`) |
| [12.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.8) | Dans chaque page web, l'ordre de tabulation est-il cohérent ? | DOM order = visual order (no CSS `order` reshuffling the navbar or the columns); the mobile menu, when open, is next in the tab order after the burger |
| [12.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.9) | Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ? | The mobile menu is not a trap: Tab leaves it, Escape or a click outside closes it (`navbar.hook.ts`) |
| [12.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.10) | Dans chaque page web, les raccourcis clavier n'utilisant qu'une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l'utilisateur ? | n/a, no single-key shortcut |
| [12.11](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.11) | Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l'activation d'un composant d'interface sont-ils si nécessaire atteignables au clavier ? | Content opened on hover (none today) is also reachable with the keyboard |

## 13. Consultation

| # | Critère | Sur le site |
|---|---|---|
| [13.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.1) | Pour chaque page web, l'utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers) ? | n/a, no time limit; the GDPR banner waits for the user |
| [13.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.2) | Dans chaque page web, l'ouverture d'une nouvelle fenêtre ne doit pas être déclenchée sans action de l'utilisateur. Cette règle est-elle respectée ? | A `target="_blank"` link says so in its name: `aria-label="<destination>, ouvre dans un nouvel onglet"` (the CV button, the social links, the GitHub buttons); nothing opens a window without a click |
| [13.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.3) | Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible (hors cas particuliers) ? | The CV PDF is a downloadable document: it is exported from HTML by Chrome, so it is tagged, has a title and a language; keep the HTML source semantic (headings, lists, `alt`) so the PDF stays readable |
| [13.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.4) | Pour chaque document bureautique ayant une version accessible, cette version offre-t-elle la même information ? | The HTML source of the CV is the accessible version when the PDF falls short; the same content |
| [13.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.5) | Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) a-t-il une alternative ? | An emoji conveying meaning goes through `Emoji` with a `label`; a decorative one is `aria-hidden` |
| [13.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.6) | Dans chaque page web, pour chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente ? |  |
| [13.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.7) | Dans chaque page web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés ? | n/a, no flashing content |
| [13.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.8) | Dans chaque page web, chaque contenu en mouvement ou clignotant est-il contrôlable par l'utilisateur ? | `Reveal` (react-awesome-reveal 5) plays its entrance only under `prefers-reduced-motion: no-preference` and shows the content without JavaScript; a new CSS `animation` or `transition` goes under a `prefers-reduced-motion` query too |
| [13.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.9) | Dans chaque page web, le contenu proposé est-il consultable quelle que soit l'orientation de l'écran (portrait ou paysage) (hors cas particuliers) ? | The manifest `orientation` is `any`; nothing locks the orientation |
| [13.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.10) | Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d'un geste complexe peuvent-elles être également disponibles au moyen d'un geste simple (hors cas particuliers) ? | n/a, no complex gesture |
| [13.11](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.11) | Dans chaque page web, les actions déclenchées au moyen d'un dispositif de pointage sur un point unique de l'écran peuvent-elles faire l'objet d'une annulation (hors cas particuliers) ? | Actions fire on click, not on `pointerdown` / `touchstart` |
| [13.12](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.12) | Dans chaque page web, les fonctionnalités qui impliquent un mouvement de l'appareil ou vers l'appareil peuvent-elles être satisfaites de manière alternative (hors cas particuliers) ? | n/a, no motion input |
