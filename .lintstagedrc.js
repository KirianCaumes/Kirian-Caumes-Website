/**
 * {@link https://github.com/okonet/lint-staged#configuration} Documentation
 * @type {import('lint-staged').Config}
 */
module.exports = {
    '*': ['cspell --no-progress --dot --gitignore --no-must-find-files'],
    '*.{ts,tsx,js,jsx}': [
        'prettier --ignore-unknown --check',
        'eslint --max-warnings=0',
        'cspell --no-progress --dot --gitignore --no-must-find-files',
    ],
    '*.{css,scss,sass}': [
        'prettier --ignore-unknown --check',
        'stylelint --max-warnings 0',
        'cspell --no-progress --dot --gitignore --no-must-find-files',
    ],
    '*.{html,json,svg,yml,xml}': ['prettier --ignore-unknown --check', 'cspell --no-progress --dot --gitignore'],
}
