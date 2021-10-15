import React from 'react'
import styles from 'styles/components/containers/cards/careercard.module.scss'
import useCareercard from 'hooks/components/containers/cards/useCareercard'

/**
 * @typedef {object} Mission Mission props
 * @property {string} title Title
 * @property {string} desc Description
 */

/**
 * @typedef {object} Location Location props
 * @property {string=} company Company name
 * @property {string=} url Company url
 * @property {string} city City
 */

/**
 * A career card
 * @param {object} props Props
 * @param {[Date] | [Date, Date]} props.period Start and end date
 * @param {string} props.title Title
 * @param {Location} props.location Location
 * @param {Mission[]} props.missions Missions
 * @returns {JSX.Element} Content
 */
export default function CareerCard({
    period, title, location, missions,
}) {
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
