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
    'skill-card-description': string
    'skill-card-header': string
    'skill-card-tags': string
    'skill-card-title': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
