/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    'flat-card': string
    'flat-card-content': string
    'flat-card-image-container': string
    'flat-card-title': string
    'is-content-center': string
    'is-content-justify': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
