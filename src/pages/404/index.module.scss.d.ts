/* eslint-disable jsdoc/require-jsdoc */
export type StylesType = {
    'not-found': string
}

export type ClassNamesType = keyof StylesType

declare const styles: StylesType

export default styles
