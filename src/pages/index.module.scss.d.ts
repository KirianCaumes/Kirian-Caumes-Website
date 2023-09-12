/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    'index-page': string
    'last-update': string
    row: string
    'row-about': string
    'row-about-fade-container': string
    'row-career': string
    'row-intro': string
    'row-passions': string
    'row-passions-columns': string
    'row-productions': string
    'row-quote': string
    'row-skills': string
    'row-skills-fade-container': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
