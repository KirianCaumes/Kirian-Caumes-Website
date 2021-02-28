import React from 'react'
// @ts-ignore
import styles from 'styles/components/containers/cards/skillcard.module.scss'
import classNames from 'classnames'

/**
 * @typedef {object} SkillRow SkillRow props
 * @property {string} props.title Title
 * @property {number} props.score Score
 */

/**
 * A skill card
 * @param {object} props
 * @param {string} props.title Title
 * @param {number} props.score Score
 * @param {SkillRow[]} props.rows Rows
 * @param {'yellow' | 'pink' | 'purple' | 'blue'} props.color Color
 */
export default function Skillcard({ title, score, rows, color }) {
    return (
        <div className={styles['skillcard']}>
            <div
                className={classNames(styles['skillcard-body'], styles[`is-${color}`])}
            >
                <div
                    className={styles['skillcard-body-left']}
                >
                    <p
                        className={styles['skillcard-title']}
                    >
                        <span title={title}>{title}</span>
                        <Score
                            value={score}
                        />
                    </p>
                </div>
                <div
                    className={styles['skillcard-body-right']}
                >
                    <ul className={styles['skillcard-content']}>
                        {rows.map((row, i) => (
                            <li key={`skillrow_${i}`}>
                                <span title={row.title}>{row.title}</span>
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
 * @param {object} props
 * @param {number} props.value
 * @param {number=} props.max
 * @param {string=} props.icon
 * @param {string=} props.unselectedIcon
 */
function Score({ value, max = 5, icon = "★", unselectedIcon = "☆", }) {
    return (
        <span className={styles['skillcard-stars']}>
            {new Array(max).fill({}).map((_, i) => i + 1 <= value ? icon : unselectedIcon)}
        </span>
    )
}