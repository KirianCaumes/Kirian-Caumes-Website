---
name: commit
description: Commits the current work of kiriancaumes.fr with a gitmoji message, the way the husky hooks expect (lint-staged with tsc, eslint, stylelint, prettier and cspell). Use when the user types /commit or asks to commit (« commit », « commite »), with or without a message of their own.
---

# Commit

Typing `/commit` is the go: commit without asking for the message to be validated first.

## 1. The hooks stay in charge

- `pre-commit` runs lint-staged (`.lintstagedrc.js`): `tsc --noEmit`, `prettier --check`, `eslint --max-warnings=0`
  (a `max-len` warning above 160 characters is enough to refuse), `stylelint --max-warnings 0`, and **cspell on
  every staged file**, English and French dictionaries. A new proper noun or tech word (a library, a product, a
  place) goes in the `words` list of `cspell.config.js`, in its section, and is staged with the commit.
- `prepare-commit-msg` runs gitmoji only on a terminal; from here it keeps the message as written, so the message
  must already be a gitmoji one.

## 2. What goes in

Read `git status` and `git diff HEAD` (the edits, not only the file names), then stage the files yourself, by path
(`git add <paths>`): what the user asked for, or the work of this session. A file nobody mentioned (untracked, or
changed outside this session) is named and asked about, never swept in. « Tout » from the user means everything
`git status` lists: then `git add -A`. The `.env` files are never staged, whatever the user says about « tout ».

A `.module.scss` change comes with its regenerated `.module.scss.d.ts`; a CV source change comes with the
regenerated PDF (`AGENTS.md` § The CV).

## 3. The message

The history decides: `<emoji> <Subject>`, the emoji as a character (✨, not `:sparkles:`), no scope, the subject
in English, capitalized, imperative, under ~72 characters (`🐛 Fix font issue`, `💄 Rework lot of UI/style stuff`,
`📝 Update CV`). Emojis in use here: ✨ feature, 🐛 fix, 💄 style and UI, 🎨 structure, ♻️ refactor, 📝 docs and
CV, 💬 texts, ⬆️ dependencies, 🔧 config, 🔍️ SEO, ♿️ accessibility, 🔥 removal, 🚀 deployment. A body (second
`-m`) only when the why is not obvious. A message the user gave is used as is, with an emoji added if it has none.
Never a `Co-Authored-By`, a « Generated with » line or any other AI attribution.

## 4. Commit

`git commit -m "<subject>"` (plus `-m "<body>"`).

- lint-staged refuses: fix what it reports when it is plainly the staged work's fault (a cspell word, a formatting
  diff, a warning), re-stage, commit again.
- Never `--no-verify`, never `--amend` unless asked, never a branch other than the current one.

## 5. After

Show `git log --oneline -1`. Push only when asked: the production deploy follows the push through the GitHub
webhook, so say so when the user asks to push.
