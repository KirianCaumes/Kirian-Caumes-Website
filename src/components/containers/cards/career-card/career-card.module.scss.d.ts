/* eslint-disable jsdoc/require-jsdoc */
export type StylesType = {
    'career-card': string
    'career-card-body': string
    'career-card-mission-description': string
    'career-card-mission-title': string
    'career-card-period': string
    'career-card-place': string
    'career-card-title': string
    'career-card-void': string
}

export type ClassNamesType = keyof StylesType

declare const styles: StylesType

export default styles
