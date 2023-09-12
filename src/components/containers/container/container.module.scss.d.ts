/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    container: string
    'is-fullhd': string
    'is-max-desktop': string
    'is-max-widescreen': string
    'is-widescreen': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
