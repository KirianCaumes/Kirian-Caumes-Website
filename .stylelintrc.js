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
    plugins: ['stylelint-order'],
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
        /** {@link https://github.com/bjankord/stylelint-config-sass-guidelines/pull/278} */
        'order/order': [
            [
                'custom-properties',
                'dollar-variables',
                {
                    type: 'at-rule',
                    name: 'extend',
                },
                {
                    type: 'at-rule',
                    name: 'include',
                    hasBlock: false,
                },
                'declarations',
                {
                    type: 'at-rule',
                    name: 'include',
                    hasBlock: true,
                },
                'rules',
            ],
        ],
        'order/properties-alphabetical-order': true,
    },
}
