/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    'not-found': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
