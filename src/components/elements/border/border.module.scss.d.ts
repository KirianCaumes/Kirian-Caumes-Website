/* eslint-disable jsdoc/require-jsdoc */
export type StylesType = {
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

export type ClassNamesType = keyof StylesType

declare const styles: StylesType

export default styles
