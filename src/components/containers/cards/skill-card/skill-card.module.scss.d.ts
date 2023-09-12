/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    'is-black': string
    'is-grey': string
    'is-grey-medium': string
    'is-primary': string
    'is-primary-dark': string
    'is-secondary': string
    'is-tertiary': string
    'is-white': string
    'skill-card': string
    'skill-card-body': string
    'skill-card-body-left': string
    'skill-card-body-right': string
    'skill-card-content': string
    'skill-card-stars': string
    'skill-card-title': string
    'skill-card-title-subtitle': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
