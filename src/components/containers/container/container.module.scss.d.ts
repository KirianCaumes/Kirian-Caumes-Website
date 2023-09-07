/* eslint-disable jsdoc/require-jsdoc */
export type StylesType = {
    container: string
    'is-fullhd': string
    'is-max-desktop': string
    'is-max-widescreen': string
    'is-widescreen': string
}

export type ClassNamesType = keyof StylesType

declare const styles: StylesType

export default styles
