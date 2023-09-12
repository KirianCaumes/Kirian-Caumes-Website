/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    'is-black': string
    'is-grey': string
    'is-grey-medium': string
    'is-medium': string
    'is-normal': string
    'is-primary': string
    'is-primary-dark': string
    'is-secondary': string
    'is-tertiary': string
    'is-white': string
    tag: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
