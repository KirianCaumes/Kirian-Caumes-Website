/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
export type Styles = {
    'index-page': string
    'index-page-row': string
    'is-about': string
    'is-career': string
    'is-intro': string
    'is-last-update': string
    'is-passions': string
    'is-productions': string
    'is-quote': string
    'is-skills': string
    'row-about-fade-container': string
    'row-passions-columns': string
    'row-skills-fade-container': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
