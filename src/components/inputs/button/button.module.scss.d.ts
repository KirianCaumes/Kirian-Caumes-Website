/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    button: string
    'is-black': string
    'is-fullwidth': string
    'is-grey': string
    'is-grey-medium': string
    'is-outlined': string
    'is-primary': string
    'is-primary-dark': string
    'is-secondary': string
    'is-tertiary': string
    'is-white': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
