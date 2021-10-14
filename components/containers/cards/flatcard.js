import React from 'react'
import styles from 'styles/components/containers/cards/flatcard.module.scss'
import classNames from 'classnames'
// eslint-disable-next-line import/named
import Img, { SrcType } from 'components/elements/img'

/**
 * @typedef {object} SkillRow SkillRow props
 * @property {string} title Title
 * @property {number} score Score
 */

/**
 * A skill card
 * @param {object} props Props
 * @param {SrcType} props.imageSrc Image src
 * @param {string} props.title Title
 * @param {string | React.ReactNode} props.content Content
 * @param {'center' | 'justify'=} props.align Align
 * @returns {JSX.Element} Content
 */
export default function FlatCard({
    imageSrc, title, content, align = 'justify',
}) {
    return (
        <div className={styles.flatcard}>
            <div
                className={styles['flatcard-image']}
            >
                <Img
                    src={imageSrc}
                    alt={title}
                    width={320}
                    height={180}
                />
            </div>
            <p
                className={styles['flatcard-title']}
            >
                {title}
            </p>
            <p
                className={classNames(styles['flatcard-content'], styles[`is-content-${align}`])}
            >
                {content}
            </p>
        </div>
    )
}
