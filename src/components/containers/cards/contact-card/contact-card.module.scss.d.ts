/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    'contact-card': string
    'contact-card-body': string
    'contact-card-icon': string
    'contact-card-title': string
    'contact-card-value': string
    'is-primary': string
    'is-secondary': string
    'is-tertiary': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
