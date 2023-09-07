/* eslint-disable jsdoc/require-jsdoc */
export type StylesType = {
    icon: string
    'is-colored': string
}

export type ClassNamesType = keyof StylesType

declare const styles: StylesType

export default styles
