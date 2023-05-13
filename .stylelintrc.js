/**
 * {@link https://stylelint.io/user-guide/configure/} Documentation
 * @type {import('stylelint').Config}
 */
module.exports = {
    overrides: [
        {
            files: ['**/*.scss'],
            customSyntax: 'postcss-scss',
        },
    ],
    extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
    rules: {
        'max-nesting-depth': 10,
        'selector-max-compound-selectors': 10,
        'selector-no-qualifying-type': [
            true,
            {
                ignore: ['attribute', 'class', 'id'],
            },
        ],
        'color-function-notation': 'legacy',
        'alpha-value-notation': 'number',
        'function-no-unknown': [
            true,
            {
                ignoreFunctions: [
                    'color.adjust',
                    'math.div',
                    'map.merge',
                    'color.red',
                    'color.green',
                    'color.blue',
                    'functions.find-color-invert',
                ],
            },
        ],
        'at-rule-empty-line-before': null,
    },
}
