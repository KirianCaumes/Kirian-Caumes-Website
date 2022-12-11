import React from 'react'
import styles from 'components/containers/cards/career-card/career-card.module.scss'
import useCareercard from 'components/containers/cards/career-card/career-card.hook'

export type MissionType = {
    /** title */
    title: string
    /** desc */
    desc: string
}
export type LocationType = {
    /** company */
    company?: string
    /** url */
    url?: string
    /** city */
    city: string
}

export type CareerCardProps = {
    /** period */
    period: [Date] | [Date, Date]
    /** title */
    title: string
    /** location */
    location: LocationType
    /** missions */
    missions: MissionType[]
}

/**
 * A career card
 */
export default function CareerCard({
    period, title, location, missions,
}: CareerCardProps): React.ReactElement {
    const { periodEnd, periodStart } = useCareercard({ period })

    return (
        <div className={styles.careercard}>
            <div className={styles['careercard-body']}>
                <p className={styles['careercard-period']}>
                    {periodStart}
                    {!!periodEnd && (
                        <>
                            {' '}
                            -
                            {' '}
                            {periodEnd}
                        </>
                    )}
                </p>
                <p className={styles['careercard-title']}>
                    {title}
                </p>
                <p className={styles['careercard-place']}>
                    {!location?.url && !!location?.company && (
                        <>
                            {location?.company}
                            ,
                            {' '}
                        </>
                    )}
                    {!!location?.url && !!location?.company && (
                        <>
                            <a
                                href={location?.url}
                                target="_blank"
                                rel="noopener nofollow noreferrer"
                            >
                                {location?.company}
                            </a>
                            ,
                            {' '}
                        </>
                    )}
                    {location?.city}
                </p>
                {missions.map((mission, i) => (
                    <React.Fragment
                        // eslint-disable-next-line react/no-array-index-key
                        key={`mission-${i}`}
                    >
                        <p className={styles['careercard-mission-title']}>
                            {mission.title}
                        </p>
                        <p className={styles['careercard-mission-desc']}>
                            {mission.desc}
                        </p>
                    </React.Fragment>
                ))}
            </div>
            <div className={styles['careercard-void']} />
        </div>
    )
}
