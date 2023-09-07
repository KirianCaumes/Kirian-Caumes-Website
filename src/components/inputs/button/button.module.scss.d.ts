/* eslint-disable jsdoc/require-jsdoc */
export type StylesType = {
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

export type ClassNamesType = keyof StylesType

declare const styles: StylesType

export default styles
