/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    icon: string
    'is-colored': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
