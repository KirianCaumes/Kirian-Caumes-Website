module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            node: {
                paths: ['./'],
                extensions: ['.js', '.jsx'],
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
        jsdoc: {
            mode: 'typescript',
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsdoc/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    plugins: ['jsdoc', 'react', 'react-hooks'],
    rules: {
        indent: ['error', 4, { ignoredNodes: ['TemplateLiteral'], SwitchCase: 1 }],
        semi: ['warn', 'never'],
        curly: ['warn', 'multi', 'consistent'],
        'template-curly-spacing': 'off', // Issue: https://stackoverflow.com/questions/48391913/eslint-error-cannot-read-property-range-of-null
        'max-len': ['warn', { code: 160 }],
        'comma-dangle': ['warn', 'always-multiline'],
        'nonblock-statement-body-position': ['warn', 'below'],
        'arrow-parens': ['warn', 'as-needed'],
        'no-restricted-imports': ['error', { patterns: ['../*', './*'] }],
        'no-restricted-modules': ['error', { patterns: ['../*', './*'] }],
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] },
        ],
        'react/jsx-first-prop-new-line': ['warn', 'multiline'],
        'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'always' }],
        'react/jsx-indent-props': ['warn', 4],
        'react/no-unescaped-entities': ['warn', { forbid: ['>', '}'] }],
        'react/prop-types': 'off',
        'react/jsx-indent': ['warn', 4],
        'react/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
        'jsdoc/no-undefined-types': ['warn', {
            definedTypes: [
                'JSX',
                'NodeJS',
            ],
        }],
        'jsdoc/check-tag-names': ['warn', {
            definedTags: ['debug'],
        }],
        'jsdoc/require-jsdoc': ['warn', {
            require: {
                ClassDeclaration: true,
            },
        }],
        'jsdoc/valid-types': 'off',
        'jsdoc/newline-after-description': 'off',
    },
}
