/* eslint-disable jsdoc/require-jsdoc */
export type StylesType = {
    'gdpr-banner': string
    'gdpr-banner-buttons': string
    'gdpr-banner-content': string
}

export type ClassNamesType = keyof StylesType

declare const styles: StylesType

export default styles
