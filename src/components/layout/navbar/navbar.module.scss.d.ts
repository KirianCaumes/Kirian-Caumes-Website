/* eslint-disable jsdoc/require-jsdoc */
export type StylesType = {
    'is-active': string
    navbar: string
    'navbar-burger': string
    'navbar-icon': string
    'navbar-item': string
    'navbar-list': string
    'navbar-lists': string
}

export type ClassNamesType = keyof StylesType

declare const styles: StylesType

export default styles
