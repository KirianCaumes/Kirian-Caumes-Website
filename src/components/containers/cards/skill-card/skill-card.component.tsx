import React, { Fragment } from 'react'
import classNames from 'classnames'
import styles from 'components/containers/cards/skill-card/skill-card.module.scss'
import { Icon } from 'components/elements'
import type { ReactElement } from 'react'

export interface ScoreProps {
    /** value */
    value: number
    /** max */
    max?: number
    /** fullIcon */
    fullIcon?: ReactElement
    /** emptyIcon */
    emptyIcon?: ReactElement
    /** halfIcon */
    halfIcon?: ReactElement
}
/**
 * Score with stars
 */
function Score({
    value,
    max = 5,
    fullIcon = <Icon name="star_full" />,
    emptyIcon = <Icon name="star_empty" />,
    halfIcon = <Icon name="star_half" />,
}: ScoreProps): React.ReactElement {
    const full = Math.floor(value)
    const half = value - full > 0 && value - full < 1 ? 1 : 0
    const empty = max - full - half

    return (
        <span className={styles['skill-card-stars']}>
            {Array.from({ length: full }, (_, i) => (
                <Fragment key={i}>{fullIcon}</Fragment>
            ))}
            {Array.from({ length: half }, (_, i) => (
                <Fragment key={i}>{halfIcon}</Fragment>
            ))}
            {Array.from({ length: empty }, (_, i) => (
                <Fragment key={i}>{emptyIcon}</Fragment>
            ))}
        </span>
    )
}

export interface SkillCardProps {
    /** title */
    title: string | Array<string>
    /** score */
    score: number
    /** rows */
    rows: Array<{
        /** title */
        title: string
        /** score */
        score: number
    }>
    /** color */
    color: 'tertiary' | 'secondary' | 'primary' | 'primary-dark'
}

/**
 * A skill card
 */
export default function SkillCard({ title, score, rows, color }: SkillCardProps): React.ReactElement {
    return (
        <div className={styles['skill-card']}>
            <div className={classNames(styles['skill-card-body'], styles[`is-${color}`])}>
                <div className={styles['skill-card-body-left']}>
                    <p
                        className={styles['skill-card-title']}
                        title={`${Array.isArray(title) ? title.join(' - ') : title} ${score > 0 ? `${score}/5` : ''}`}
                    >
                        <span>
                            {Array.isArray(title) ? (
                                <>
                                    {title[0]}
                                    <span className={styles['skill-card-title-subtitle']}>{title[1]}</span>
                                </>
                            ) : (
                                title
                            )}
                        </span>
                        {score > 0 && <Score value={score} />}
                    </p>
                </div>
                <div className={styles['skill-card-body-right']}>
                    <ul className={styles['skill-card-content']}>
                        {rows.map((row, i) => (
                            <li
                                // eslint-disable-next-line react/no-array-index-key
                                key={`skill-row_${i}`}
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
