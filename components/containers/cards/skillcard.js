import React from 'react'
import styles from 'styles/components/containers/cards/skillcard.module.scss'
import classNames from 'classnames'

/**
 * @typedef {object} SkillRow SkillRow props
 * @property {string} title Title
 * @property {number} score Score
 */

/**
 * A skill card
 * @param {object} props Props
 * @param {string} props.title Title
 * @param {number} props.score Score
 * @param {SkillRow[]} props.rows Rows
 * @param {'yellow' | 'pink' | 'purple' | 'blue'} props.color Color
 * @returns {JSX.Element} Content
 */
export default function Skillcard({
    title, score, rows, color,
}) {
    return (
        <div className={styles.skillcard}>
            <div
                className={classNames(styles['skillcard-body'], styles[`is-${color}`])}
            >
                <div
                    className={styles['skillcard-body-left']}
                >
                    <p
                        className={styles['skillcard-title']}
                        title={`${title} ${score > 0 ? `${score}/5` : ''}`}
                    >
                        <span>{title}</span>
                        {score > 0
                            && (
                                <Score
                                    value={score}
                                />
                            )}
                    </p>
                </div>
                <div
                    className={styles['skillcard-body-right']}
                >
                    <ul className={styles['skillcard-content']}>
                        {rows.map((row, i) => (
                            <li
                                // eslint-disable-next-line react/no-array-index-key
                                key={`skillrow_${i}`}
                                title={`${row.title} ${row.score > 0 ? `${row.score}/5` : ''}`}
                            >
                                <span>{row.title}</span>
                                <Score value={row.score} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

/**
 * Score with stars
 * @param {object} props props
 * @param {number} props.value value
 * @param {number=} props.max max
 * @param {string=} props.icon icon
 * @param {string=} props.unselectedIcon unselectedIcon
 * @returns {JSX.Element} Content
 */
function Score({
    value, max = 5, icon = '★', unselectedIcon = '☆',
}) {
    return (
        <span className={styles['skillcard-stars']}>
            {new Array(max).fill({}).map((_, i) => (i + 1 <= value ? icon : unselectedIcon)).join('')}
        </span>
    )
}
