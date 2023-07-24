import React from 'react'
import styles from 'components/containers/cards/career-card/career-card.module.scss'
import useCareercard from 'components/containers/cards/career-card/career-card.hook'
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
    missions: {
        /** title */
        title: React.HTMLAttributes<HTMLParagraphElement>['children']
        /** description */
        description: React.HTMLAttributes<HTMLParagraphElement>['children']
    }[]
}

/**
 * A career card
 */
export default function CareerCard({ period, title, location, missions }: CareerCardProps): React.ReactElement {
    const { periodEnd, periodStart, duration } = useCareercard({ period })

    return (
        <div className={styles.careercard}>
            <div className={styles['careercard-body']}>
                <p className={styles['careercard-period']}>
                    {periodStart}
                    {!!periodEnd && <> - {periodEnd}</>}
                    {duration && <> ({duration})</>}
                </p>
                <Title
                    level={4}
                    className={styles['careercard-title']}
                >
                    {title}
                </Title>
                <p className={styles['careercard-place']}>
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
                        <p className={styles['careercard-mission-title']}>{mission.title}</p>
                        <p className={styles['careercard-mission-description']}>{mission.description}</p>
                    </React.Fragment>
                ))}
            </div>
            <div className={styles['careercard-void']} />
        </div>
    )
}
