import React, { Fragment } from 'react'
import classNames from 'classnames'
import styles from 'components/containers/cards/skill-card/skill-card.module.scss'
import Icon from 'components/elements/icon/icon.component'
import type { ReactElement } from 'react'

const FULL_ICON = <Icon name="star_full" />
const EMPTY_ICON = <Icon name="star_empty" />
const HALF_ICON = <Icon name="star_half" />

export interface ScoreProps {
    /** Value */
    readonly value: number
    /** Max */
    readonly max?: number
    /** FullIcon */
    readonly fullIcon?: ReactElement
    /** EmptyIcon */
    readonly emptyIcon?: ReactElement
    /** HalfIcon */
    readonly halfIcon?: ReactElement
}

/**
 * Score with stars
 * @returns JSX.Element
 */
function Score({ value, max = 5, fullIcon = FULL_ICON, emptyIcon = EMPTY_ICON, halfIcon = HALF_ICON }: ScoreProps) {
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
    /** Title */
    readonly title: string | Array<string>
    /** Score */
    readonly score: number
    /** Rows */
    readonly rows: Array<{
        /** Title */
        title: string
        /** Score */
        score: number
    }>
    /** Color */
    readonly color: 'tertiary' | 'secondary' | 'primary' | 'primary-dark'
}

/**
 * A skill card
 * @returns JSX.Element
 */
export default function SkillCard({ title, score, rows, color }: SkillCardProps) {
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
