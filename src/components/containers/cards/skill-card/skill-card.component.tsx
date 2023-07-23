import React from 'react'
import classNames from 'classnames'
import styles from 'components/containers/cards/skill-card/skill-card.module.scss'

export type ScoreProps = {
    /** value */
    value: number
    /** max */
    max?: number
    /** icon */
    icon?: string
    /** unselectedIcon */
    unselectedIcon?: string
}
/**
 * Score with stars
 */
function Score({ value, max = 5, icon = '★', unselectedIcon = '☆' }: ScoreProps): React.ReactElement {
    return (
        <span className={styles['skillcard-stars']}>
            {new Array(max)
                .fill({})
                .map((_, i) => (i + 1 <= value ? icon : unselectedIcon))
                .join('')}
        </span>
    )
}

export type SkillcardProps = {
    /** title */
    title: string | string[]
    /** score */
    score: number
    /** rows */
    rows: {
        /** title */
        title: string
        /** score */
        score: number
    }[]
    /** color */
    color: 'tertiary' | 'secondary' | 'primary' | 'primary-dark'
}

/**
 * A skill card
 */
export default function Skillcard({ title, score, rows, color }: SkillcardProps): React.ReactElement {
    return (
        <div className={styles.skillcard}>
            <div className={classNames(styles['skillcard-body'], styles[`is-${color}`])}>
                <div className={styles['skillcard-body-left']}>
                    <p
                        className={styles['skillcard-title']}
                        title={`${Array.isArray(title) ? title.join(' - ') : title} ${score > 0 ? `${score}/5` : ''}`}
                    >
                        <span>
                            {Array.isArray(title) ? (
                                <>
                                    {title[0]}
                                    <span className={styles['skillcard-title-subtitle']}>{title[1]}</span>
                                </>
                            ) : (
                                title
                            )}
                        </span>
                        {score > 0 && <Score value={score} />}
                    </p>
                </div>
                <div className={styles['skillcard-body-right']}>
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
