/** Base configuration for 'plugin/no-unsupported-browser-features' */
const unsupportedBrowserFeaturesConf = {
    severity: 'warning',
    ignore: [
        'css3-cursors',
        'css-color-adjust',
        'css-resize',
        'css-focus-visible',
        'css-scrollbar',
        'css-touch-action',
        'css-overflow-overlay',
    ],
    ignorePartialSupport: true,
}

/**
 * {@link https://stylelint.io/user-guide/configure/} Documentation
 * @type {import('stylelint').Config}
 */
module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
    plugins: ['stylelint-order', 'stylelint-no-unsupported-browser-features'],
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
                ignoreFunctions: ['adjust', 'math.div', 'channel'],
            },
        ],
        // Conflict with prettier
        'scss/dollar-variable-colon-space-after': null,
        // https://github.com/stylelint-scss/stylelint-scss/issues/1017#issuecomment-2654817953
        'declaration-property-value-no-unknown': null,
        'scss/declaration-property-value-no-unknown': true,
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
        'plugin/no-unsupported-browser-features': [true, unsupportedBrowserFeaturesConf],
        '@stylistic/function-parentheses-space-inside': 'never-single-line',
    },
    overrides: [
        {
            files: ['**/*.scss', '**/*.sass'],
            customSyntax: 'postcss-scss',
            rules: {
                'plugin/no-unsupported-browser-features': [
                    true,
                    {
                        ...unsupportedBrowserFeaturesConf,
                        ignore: [
                            ...unsupportedBrowserFeaturesConf.ignore,
                            'css-nesting', // Disable because of SCSS
                        ],
                    },
                ],
            },
        },
    ],
}
