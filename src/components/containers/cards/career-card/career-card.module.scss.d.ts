/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    'career-card': string
    'career-card-body': string
    'career-card-mission-description': string
    'career-card-mission-title': string
    'career-card-period': string
    'career-card-place': string
    'career-card-title': string
    'career-card-void': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
