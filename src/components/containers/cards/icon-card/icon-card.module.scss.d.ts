/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    'icon-card': string
    'icon-card-body': string
    'icon-card-content': string
    'icon-card-icon': string
    'icon-card-title': string
    'is-black': string
    'is-content-center': string
    'is-content-justify': string
    'is-grey': string
    'is-grey-medium': string
    'is-icon-border': string
    'is-primary': string
    'is-primary-dark': string
    'is-secondary': string
    'is-tertiary': string
    'is-white': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
