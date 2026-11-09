/* eslint-disable jsdoc/require-jsdoc, @typescript-eslint/consistent-type-definitions */
// prettier-ignore
export type Styles = {
  'contact-card': string;
  'contact-card-body': string;
  'contact-card-icon': string;
  'contact-card-title': string;
  'contact-card-value': string;
  'is-black': string;
  'is-grey': string;
  'is-grey-medium': string;
  'is-link': string;
  'is-primary': string;
  'is-primary-dark': string;
  'is-secondary': string;
  'is-tertiary': string;
  'is-white': string;
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
