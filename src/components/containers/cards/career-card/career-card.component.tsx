import React from 'react'
import styles from 'components/containers/cards/career-card/career-card.module.scss'
import useCareerCard from 'components/containers/cards/career-card/career-card.hook'
import Title from 'components/elements/title/title.component'
import type { ComponentProps } from 'react'

export interface CareerCardProps {
    /** Period */
    readonly period: [Date] | [Date, Date]
    /** Reference "current" date; when the period ends on it, "Aujourd'hui" is displayed instead of the date */
    readonly now?: Date
    /** Duration. If set, will override the calculated duration */
    readonly duration?: string
    /** Title */
    readonly title: ComponentProps<'p'>['children']
    /** Location */
    readonly location: {
        /** Company */
        company?: string
        /** Href */
        href?: ComponentProps<'a'>['href']
        /** City */
        city: ComponentProps<'p'>['children']
    }
    /** Missions */
    readonly missions: Array<{
        /** Title */
        title: ComponentProps<'p'>['children']
        /** Description */
        description: ComponentProps<'p'>['children']
    }>
}

/**
 * A career card
 * @returns JSX.Element
 */
// eslint-disable-next-line react/require-default-props
export default function CareerCard({ period, now, duration: customDuration, title, location, missions }: CareerCardProps) {
    const { periodEnd, periodStart, duration: calculatedDuration } = useCareerCard({ period, now })
    const duration = customDuration ?? calculatedDuration

    return (
        <div className={styles['career-card']}>
            <div className={styles['career-card-body']}>
                <p className={styles['career-card-period']}>
                    {periodStart}
                    {!!periodEnd && <> - {periodEnd}</>}
                    {duration && <> ({duration})</>}
                </p>
                <Title
                    className={styles['career-card-title']}
                    level={4}
                >
                    {title}
                </Title>
                <p className={styles['career-card-place']}>
                    {!location.href && !!location.company && <>{location.company}, </>}
                    {!!location.href && !!location.company && (
                        <>
                            <a
                                aria-label={`${location.company}, ouvre dans un nouvel onglet`}
                                href={location.href}
                                rel="noopener noreferrer nofollow"
                                target="_blank"
                            >
                                {location.company}
                            </a>
                            ,{' '}
                        </>
                    )}
                    {location.city}
                </p>
                {missions.map((mission, i) => (
                    <React.Fragment
                        // eslint-disable-next-line react/no-array-index-key
                        key={`mission-${i}`}
                    >
                        <p className={styles['career-card-mission-title']}>{mission.title}</p>
                        <p className={styles['career-card-mission-description']}>{mission.description}</p>
                    </React.Fragment>
                ))}
            </div>
            <div className={styles['career-card-void']} />
        </div>
    )
}
