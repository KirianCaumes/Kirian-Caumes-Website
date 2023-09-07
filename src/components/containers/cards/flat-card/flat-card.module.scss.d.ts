/* eslint-disable jsdoc/require-jsdoc */
export type StylesType = {
    'flat-card': string
    'flat-card-content': string
    'flat-card-image': string
    'flat-card-title': string
    'is-content-center': string
    'is-content-justify': string
}

export type ClassNamesType = keyof StylesType

declare const styles: StylesType

export default styles
