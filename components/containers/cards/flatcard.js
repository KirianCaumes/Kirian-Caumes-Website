import React from 'react'
// @ts-ignore
import styles from 'styles/components/containers/cards/flatcard.module.scss'
import classNames from 'classnames'
import Img from 'components/elements/img'
import { SrcType } from 'components/elements/img'

/**
 * @typedef {object} SkillRow SkillRow props
 * @property {string} props.title Title
 * @property {number} props.score Score
 */

/**
 * A skill card
 * @param {object} props
 * @param {SrcType} props.imageSrc Image src
 * @param {string} props.title Title
 * @param {string | React.ReactNode} props.content Content
 * @param {'center' | 'justify'=} props.align Align
 */
export default function FlatCard({ imageSrc, title, content, align = "justify" }) {
    return (
        <div className={styles['flatcard']}>
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