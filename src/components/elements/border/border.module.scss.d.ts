/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    border: string
    'is-black': string
    'is-bottom': string
    'is-grey': string
    'is-grey-medium': string
    'is-primary': string
    'is-primary-dark': string
    'is-secondary': string
    'is-tertiary': string
    'is-top': string
    'is-white': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
