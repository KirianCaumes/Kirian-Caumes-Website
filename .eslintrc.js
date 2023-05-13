/**
 * {@link https://eslint.org/docs/latest/use/configure/configuration-files} Documentation
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@next/next/recommended',
        /**
         * Turns off all rules that are unnecessary or might conflict with Prettier.
         * Check conflict between Eslint and Prettier with: `npx eslint-config-prettier .eslintrc.js`.
         */
        'prettier',
    ],
    parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
    },
    plugins: ['jsdoc'],
    rules: {
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        '@typescript-eslint/naming-convention': [
            'error',
            { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: true } },
            { selector: 'enum', format: ['PascalCase'], custom: { regex: '^E[A-Z]', match: true } },
            {
                selector: 'variable',
                types: ['boolean'],
                format: ['PascalCase'],
                prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
            },
            { selector: 'typeAlias', format: ['PascalCase'], suffix: ['Type', 'State', 'Props', 'Returns', 'Params'] },
        ],
        '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
        'jsdoc/require-jsdoc': [
            'warn',
            {
                checkConstructors: false,
                contexts: [
                    'ClassDeclaration',
                    'FunctionDeclaration',
                    'MethodDefinition',
                    { context: 'TSPropertySignature', inlineCommentBlock: true },
                ],
            },
        ],
        'jsdoc/require-description': [
            'warn',
            {
                checkConstructors: false,
                contexts: [
                    'TSPropertySignature',
                    'ClassDeclaration',
                    'ArrowFunctionExpression',
                    'FunctionDeclaration',
                    'FunctionExpression',
                    'MethodDefinition',
                ],
            },
        ],
        'jsdoc/require-param-description': ['warn', { contexts: ['any'] }],
        'jsdoc/require-param': ['warn', { checkDestructuredRoots: false }],
        // 'capitalized-comments': ['warn', 'always'], // Not always usefull as it also fix comment with code
        camelcase: ['error', { allow: [] }],
        'no-underscore-dangle': ['error', { allow: ['_id', '__WB_MANIFEST'] }],
        curly: ['warn', 'all'],
        'template-curly-spacing': 'off', // Issue: https://stackoverflow.com/questions/48391913/eslint-error-cannot-read-property-range-of-null
        'max-len': ['warn', { code: 160 }],
        'no-restricted-imports': ['error', { patterns: ['../*', './*'] }],
        'no-restricted-modules': ['error', { patterns: ['../*', './*'] }],
        'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
        'react/react-in-jsx-scope': 0, // Not usefull as vite auto add react in scope
        'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
        'react/no-unescaped-entities': ['warn', { forbid: ['>', '}'] }],
        'react/prop-types': 'off',
        'react/require-default-props': ['error', { functions: 'defaultArguments' }],
        'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // Must be at the end
    },
}
