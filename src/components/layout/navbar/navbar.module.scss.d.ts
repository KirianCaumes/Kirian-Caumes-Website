/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    'is-active': string
    navbar: string
    'navbar-burger': string
    'navbar-icon': string
    'navbar-item': string
    'navbar-list': string
    'navbar-lists': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
