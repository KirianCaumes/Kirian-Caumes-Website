# AGENTS.md

kiriancaumes.fr: Kirian's personal site, a one-page portfolio in French (intro, skills, career, productions, hobbies,
contact) plus a legal notice page. Next.js 16 (App Router, Turbopack), React 19, TypeScript, SCSS modules with
generated typings, PWA manifest. Deployed on a VPS as a Docker image (`Dockerfile`) through a GitHub webhook.

Next.js is deliberately oversized for a static site: the point is to show React work, so keep the component
architecture rather than flattening it.

## Structure

- `src/app/`: the routes. `layout.tsx` (fonts, metadata from `config.ts`, `Layout`, GDPR banner), `page.tsx` (home,
  injects the JSON-LD), `mentions-legales/`, `not-found.tsx`, `robots.ts`, `sitemap.ts`.
- `src/views/<page>/`: one folder per page, `index.component.tsx` + `index.hook.ts` + `index.module.scss`. The home
  page holds all the profile texts.
- `src/components/`: `containers/` (cards, columns, container, tag), `elements/` (border, emoji, icon, title),
  `inputs/` (button), `layout/` (layout, navbar, gdpr-banner).
- `src/styles/`: `abstracts/` (`_variables.scss` colors and breakpoints, `_mixins.scss`), `bases/`, `index.scss`.
- `src/config.ts`: `publicRuntimeConfig` (URL, title, description, GA id). `src/lib/structured-data.ts`: the
  schema.org `Person` / `ProfilePage` / `WebSite` graph.
- `public/`: `documents/` (the CV: `Kirian-CAUMES-CV - Source.html` is the source, `Kirian-CAUMES-CV.pdf` the
  export), `llms.txt`, `manifest.webmanifest`, images and icons.

## Environment

A devcontainer exists (`.devcontainer/`, container `kiriancaumes_container`, repo at `/app_kiriancaumes`, ports 3000
and 5000). There is no database: once `node_modules` is installed, everything runs on the host too, with Node 24.
`npm run dev` may already be running in a terminal of the user: do not start a second one.

## Commands

| Task              | Command                                                              |
| ----------------- | -------------------------------------------------------------------- |
| Dev               | `npm run dev`                                                        |
| Typecheck         | `npx tsc --noEmit`                                                   |
| Lint              | `npm run eslint[:fix]`, `npm run stylelint[:fix]`                    |
| Format            | `npm run prettier[:fix]`                                             |
| Spellcheck        | `npm run cspell` (English and French; new words go in `cspell.config.js`) |
| Dead code         | `npm run knip`                                                       |
| SCSS typings      | `npm run typed-scss-modules` after any `.module.scss` change         |
| Build             | `npm run build`                                                      |
| CV PDF            | see « The CV » below                                                 |

Before handing work back, run `npx tsc --noEmit`, `npm run eslint` and `npm run prettier` (plus `stylelint` after
an SCSS change) on what changed. `max-len` is 160 and lint-staged runs eslint with `--max-warnings=0`: a warning
blocks the commit.

## Working rules

- **Code in English, content in French.** Comments, identifiers, commits: English. Everything a visitor reads (page
  copy, `alt`, `aria-label`, metadata, the CV): French, with French typography (« », spaces before `:` and `;`).
- **YAGNI and KISS.** Write what the task asks for, nothing "for later". Of two ways, the plainer.
- **Inline over helpers.** A function, const or type used once stays at its call site. Extract only what is reused.
- **Few, short comments.** Only the why the code cannot tell, in one line. JSDoc stays short.
- **No emojis or em-dashes** in code, comments or docs (gitmoji commits and the site's existing emojis excepted).
- **Git.** Stay on the current branch. Leave the changes unstaged: the user reads the diff, and staging belongs to
  `/commit`. Commit only through `/commit` or when asked in so many words, never on the back of a "fix it". Never
  `--no-verify`.
- The real `.env*` files are off limits (`.claude/settings.json`). Ask for a value rather than looking for it.

## Conventions

- kebab-case files and folders; the default export matches the file name; `.component.tsx`, `.hook.ts`,
  `.module.scss` with its generated `.module.scss.d.ts` (never edited by hand). Absolute imports from `src`
  (`components/...`, `views/...`, `config`).
- A component takes a `readonly` props interface with a one-line JSDoc per prop; `classNames` for conditional
  classes, `styles['kebab-class']` for module classes.
- `'use client'` only on components that use hooks or browser APIs.
- Date-derived text (age, years of experience, seasons) takes `now` from the server page (`page.tsx` passes
  `new Date()`), never `new Date()` in a client component: the SSR and client texts must match at hydration.
- Reveal-on-scroll goes through react-awesome-reveal 5 `Reveal` (`from="left" | "bottom" | "right"`): one `div`
  around its children, revealed together, once.
- `Title` sets the heading level explicitly: one `h1` per page, `h2` per section, `h3` for the section subtitle.
- Colors come from the `$colors` map and `$brand-*` variables in `_variables.scss`; breakpoints through the
  `mixins.mobile` / `tablet` / `desktop` mixins.

## Content: one profile, several copies

The profile lives in several places that must stay consistent. Changing a date, a skill or a claim means checking
each of them:

| Where                                             | What                                                             |
| ------------------------------------------------- | ---------------------------------------------------------------- |
| `src/views/home/index.component.tsx`              | intro, skill cards, `CareerCard` periods and missions, hobbies  |
| `src/config.ts` and `public/manifest.webmanifest` | the same `description`, twice                                    |
| `src/lib/structured-data.ts`                      | `jobTitle`, `knowsAbout`, `worksFor.startDate`, diplomas, `sameAs` |
| `public/llms.txt`                                 | the profile for LLMs                                             |
| `public/documents/Kirian-CAUMES-CV - Source.html` | the CV, and the « Dernière mise à jour » line of the intro       |

The user's LinkedIn profile is the third copy; it is edited by hand.

### The CV

`Kirian-CAUMES-CV - Source.html` is a standalone Tailwind (play CDN) page sized to one A4 page: `.page` is
`297mm` high with `overflow-hidden`, so text past the bottom is silently cut. After an edit, render it and look at
the whole page before exporting:

```sh
google-chrome --headless=new --disable-gpu --no-sandbox --window-size=794,1123 --virtual-time-budget=8000 \
  --screenshot=/tmp/cv.png "file://$PWD/public/documents/Kirian-CAUMES-CV - Source.html"
google-chrome --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer --virtual-time-budget=8000 \
  --print-to-pdf=public/documents/Kirian-CAUMES-CV.pdf "file://$PWD/public/documents/Kirian-CAUMES-CV - Source.html"
```

`pdfinfo` must say one page; its title comes from the HTML `<title>`. When the content no longer fits, condense
the longest bullets of the main column before touching paddings or font sizes.

## Accessibility and SEO

The site follows the RGAA 4.1.2; audit with `/rgaa-audit`. Pieces that settle a criterion once:

- `Icon` SVGs are `aria-hidden`; a link holding only an icon carries the `aria-label`.
- A `target="_blank"` link has an `aria-label` « <destination>, ouvre dans un nouvel onglet » (RGAA 13.2).
- `Emoji` renders a `role="img"` with its `label`, or `aria-hidden` without one (RGAA 13.5).
- `Title` gives the heading levels (RGAA 9.1); `Layout` gives the `header` / `nav` / `main` / `footer` landmarks.
- `html lang` comes from `config.ts`. react-awesome-reveal 5 keeps `Reveal` content visible without JavaScript
  (`scripting: none`) and with reduced motion, through its own stylesheet (RGAA 13.8).
- Repeated items are lists: `SkillCard` tags are a `ul`, `CareerCard` missions a `dl` (RGAA 9.3).
- Known debt, not to extend: the home page still spaces some blocks with `<br />` (RGAA 8.9); the intro uses
  paragraphs with a margin, new code uses margins or `gap`.

SEO: metadata in `app/layout.tsx` and each `page.tsx` from `config.ts`; JSON-LD in `lib/structured-data.ts`;
`robots.ts` allows the AI crawlers by name; `sitemap.ts` lists the home only; `mentions-legales` is `noindex`;
`public/llms.txt` is the profile for LLMs.
