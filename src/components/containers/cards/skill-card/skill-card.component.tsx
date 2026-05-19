import classNames from 'classnames'
import styles from 'components/containers/cards/skill-card/skill-card.module.scss'
import Tag from 'components/containers/tag/tag.component'
import type { ReactNode } from 'react'

export interface SkillCardProps {
    /** Title */
    readonly title: string
    /** Description */
    readonly description: ReactNode
    /** Color */
    readonly color: 'tertiary' | 'secondary' | 'primary' | 'primary-dark'
    /** Optional technology tags displayed below the description */
    readonly tags?: ReadonlyArray<string>
}

/**
 * A skill card
 * @returns JSX.Element
 */
// eslint-disable-next-line react/require-default-props
export default function SkillCard({ title, description, color, tags }: SkillCardProps) {
    return (
        <div className={classNames(styles['skill-card'], styles[`is-${color}`])}>
            <div className={styles['skill-card-header']}>
                <p className={styles['skill-card-title']}>{title}</p>
            </div>
            <div className={styles['skill-card-body']}>
                <p className={styles['skill-card-description']}>{description}</p>
                {tags && tags.length > 0 && (
                    <div className={styles['skill-card-tags']}>
                        {tags.map(tag => (
                            <Tag
                                color={color}
                                key={tag}
                            >
                                {tag}
                            </Tag>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
