/* eslint-disable jsdoc/require-jsdoc */
export type StylesType = {
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

export type ClassNamesType = keyof StylesType

declare const styles: StylesType

export default styles
