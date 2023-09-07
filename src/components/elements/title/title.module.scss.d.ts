/* eslint-disable jsdoc/require-jsdoc */
export type StylesType = {
    'is-centered': string
    subtitle: string
    title: string
}

export type ClassNamesType = keyof StylesType

declare const styles: StylesType

export default styles
