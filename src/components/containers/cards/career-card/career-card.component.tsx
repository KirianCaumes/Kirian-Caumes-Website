import React from 'react'
import styles from 'components/containers/cards/career-card/career-card.module.scss'
import useCareerCard from 'components/containers/cards/career-card/career-card.hook'
import { Title } from 'components/elements'

export type CareerCardProps = {
    /** period */
    period: [Date] | [Date, Date]
    /** title */
    title: React.HTMLAttributes<HTMLParagraphElement>['children']
    /** location */
    location: {
        /** company */
        company?: React.LinkHTMLAttributes<HTMLLinkElement>['children']
        /** href */
        href?: React.LinkHTMLAttributes<HTMLLinkElement>['href']
        /** city */
        city: React.HTMLAttributes<HTMLParagraphElement>['children']
    }
    /** missions */
    missions: Array<{
        /** title */
        title: React.HTMLAttributes<HTMLParagraphElement>['children']
        /** description */
        description: React.HTMLAttributes<HTMLParagraphElement>['children']
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
