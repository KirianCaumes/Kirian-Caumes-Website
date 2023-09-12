/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    'is-centered': string
    subtitle: string
    title: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
