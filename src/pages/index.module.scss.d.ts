/* eslint-disable jsdoc/require-jsdoc */
export type StylesType = {
    'index-page': string
    'last-update': string
    row: string
    'row-about': string
    'row-about-fade-container': string
    'row-career': string
    'row-intro': string
    'row-productions': string
    'row-quote': string
    'row-skills': string
    'row-skills-fade-container': string
}

export type ClassNamesType = keyof StylesType

declare const styles: StylesType

export default styles
