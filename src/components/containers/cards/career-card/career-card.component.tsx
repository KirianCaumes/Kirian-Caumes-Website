import React from 'react'
import styles from 'components/containers/cards/career-card/career-card.module.scss'
import useCareerCard from 'components/containers/cards/career-card/career-card.hook'
import { Title } from 'components/elements'
import type { ComponentProps } from 'react'

export interface CareerCardProps {
    /** period */
    period: [Date] | [Date, Date]
    /** title */
    title: ComponentProps<'p'>['children']
    /** location */
    location: {
        /** company */
        company?: ComponentProps<'a'>['children']
        /** href */
        href?: ComponentProps<'a'>['href']
        /** city */
        city: ComponentProps<'p'>['children']
    }
    /** missions */
    missions: Array<{
        /** title */
        title: ComponentProps<'p'>['children']
        /** description */
        description: ComponentProps<'p'>['children']
    }>
}

/**
 * A career card
 */
export default function CareerCard({ period, title, location, missions }: CareerCardProps): React.ReactElement {
    const { periodEnd, periodStart, duration } = useCareerCard({ period })

    return (
        <div className={styles['career-card']}>
            <div className={styles['career-card-body']}>
                <p className={styles['career-card-period']}>
                    {periodStart}
                    {!!periodEnd && <> - {periodEnd}</>}
                    {duration && <> ({duration})</>}
                </p>
                <Title
                    level={4}
                    className={styles['career-card-title']}
                >
                    {title}
                </Title>
                <p className={styles['career-card-place']}>
                    {!location?.href && !!location?.company && <>{location?.company}, </>}
                    {!!location?.href && !!location?.company && (
                        <>
                            <a
                                href={location?.href}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                aria-label={`${location?.company}, ouvre dans un nouvel onglet`}
                            >
                                {location?.company}
                            </a>
                            ,{' '}
                        </>
                    )}
                    {location?.city}
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
