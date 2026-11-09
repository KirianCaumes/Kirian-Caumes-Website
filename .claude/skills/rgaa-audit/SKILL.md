---
name: rgaa-audit
description: Audits the pages and components of kiriancaumes.fr against the RGAA 4.1.2 (French accessibility standard, WCAG 2.2 AA) and reports each gap with its criterion, its file:line and the fix the project's conventions prescribe. Use when the user asks for an accessibility / a11y / RGAA / WCAG review or audit, of the current diff, a page, a component, or before shipping a change.
---

# RGAA audit

Checks code against the 106 criteria of the RGAA 4.1.2, read through the conventions the site already settles. The
reference is `references/criteres.md`: the official title of each criterion, a link to its tests on
https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/, and what it means on this site.

## 1. Scope

- No argument: the current diff (`git diff HEAD` plus untracked files under `src/`)
- A path, a page name (« la page d'accueil », « les mentions légales ») or a section (« le parcours »): that view,
  its components and the layout it renders in
- « tout » / « le site »: every view under `src/views`, `src/components`, `src/app/layout.tsx`, the global styles
  and the CV (`public/documents/Kirian-CAUMES-CV - Source.html`, which is also a web page). Split it by section
  and say so before starting

Read the **Accessibility and SEO** block of `AGENTS.md` first: it lists the shared pieces that settle a criterion
once (`Icon` hidden, the « ouvre dans un nouvel onglet » labels, `Emoji`, `Title` levels, the landmarks of
`Layout`, `Reveal` visible without JavaScript) and the known debt (`<br />` spacing on the home page). A finding's
fix is the existing piece whenever one exists, never a local variant of it.

## 2. Review

Go through `references/criteres.md` theme by theme for the files in scope. Skip the rows marked « n/a » unless the
scope contains such content (an `<iframe>`, a video, a form, a table). For each file, read it fully: an accessible
name or a role is often set by the parent, so follow a component to where it is used before calling a name
missing.

Leads worth grepping in the scope (a hit is a lead, not a finding):

| Pattern                                                                          | Criteria              |
| -------------------------------------------------------------------------------- | --------------------- |
| `<Image` or `<img` without `alt`, or an `alt` repeating the text beside it       | 1.1, 1.2, 1.3         |
| an `<a>` whose only child is an `Icon`, without `aria-label`                     | 6.2                   |
| `target="_blank"` without « ouvre dans un nouvel onglet » in the name            | 13.2                  |
| `onClick` on a `div`, `li`, `img` or `span`                                      | 7.3                   |
| `aria-expanded` without `aria-controls`, a burger `aria-label` in English        | 7.1, 11.9             |
| `<br />` used for spacing, a `Title level` chosen for its size                   | 8.9, 9.1              |
| a `level={n}` skipping a level, two `level={1}` in one view                      | 9.1                   |
| a `.map(` rendering siblings outside a `<ul>` / `<ol>`                           | 9.3                   |
| an English word or quote without `lang="en"`                                     | 8.7                   |
| `outline: 0` / `outline: none`, a `:focus` rule with no visible ring             | 10.7                  |
| `px` font sizes, fixed `width` / `height` on text                                | 10.4, 10.11, 10.12    |
| a literal color in SCSS, light text on the `background-primary` SVG              | 3.2, 3.3              |
| `:hover` revealing content with no `:focus-within` twin (navbar, cards)          | 10.14, 12.11          |
| a `Reveal` / `transition` / `animation` with no `prefers-reduced-motion` guard     | 13.8                  |
| a `Tag` or color alone carrying a meaning                                        | 3.1                   |

What reading the code cannot settle (an actual contrast ratio on the SVG backgrounds, the rendering at 320px or
200% zoom, the order a screen reader announces, the PDF's tags) goes in the report as « à vérifier » with the check
to run, rather than as a finding. Compute a contrast when both colors are known: the `$colors` map and the
`$brand-*` variables are in `src/styles/abstracts/_variables.scss`; the site has a single light theme.

## 3. Report

Answer in French. One line per finding, most severe first (blocks a keyboard or screen-reader user > misleads
them > hinders them):

| Critère                                                                     | Fichier                                   | Problème                                 | Correctif                       |
| --------------------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------- | ------------------------------- |
| [12.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.7) | `src/components/layout/layout/layout.component.tsx:23` | pas de lien d'évitement vers `main` | un lien « Aller au contenu » avant le `header`, visible au focus |

Then the « à vérifier » list, then the criteria found compliant in one line (« 1.2, 6.1, 9.1 : conformes »), so
the reader knows what was looked at. Do not fix anything until the user picks the findings to fix, unless they
asked for the fixes up front. When fixing, follow `AGENTS.md` (French copy, short « why » comments citing the
criterion, `npm run typed-scss-modules` after an SCSS module change) and run `npx tsc --noEmit`, `npm run eslint`
and `npm run stylelint`.

A new shared piece or a new convention born from an audit goes into the Accessibility block of `AGENTS.md`, and its
criterion's note in `references/criteres.md` is updated to point at it.
