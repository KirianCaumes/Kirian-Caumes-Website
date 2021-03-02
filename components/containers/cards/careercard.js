import React, { useMemo } from 'react'
// @ts-ignore
import styles from 'styles/components/containers/cards/careercard.module.scss'

/**
 * @typedef {object} Mission Mission props
 * @property {string} props.title Title
 * @property {string} props.desc Description
 */

/**
 * @typedef {object} Location Location props
 * @property {string=} props.company Company name
 * @property {string=} props.url Company url
 * @property {string} props.city City
 */

/**
 * A career card
 * @param {object} props
 * @param {[Date] | [Date, Date]} props.period Start and end date
 * @param {string} props.title Title
 * @param {Location} props.location Location
 * @param {Mission[]} props.missions Missions
 */
export default function CareerCard({ period, title, location, missions }) {
    /** @type {string} Start date clean */
    const periodStart = useMemo(
        () => {
            const val = period?.[0]?.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })
            return val.charAt(0).toUpperCase() + val.slice(1)
        },
        [period[0]]
    )

    /** @type {string} End date clean */
    const periodEnd = useMemo(
        () => {
            if (
                period[1]?.getDate() == (new Date()).getDate() &&
                period[1]?.getMonth() == (new Date()).getMonth() &&
                period[1]?.getFullYear() == (new Date()).getFullYear()
            )
                return "Aujourd'hui"
            const val = period?.[1]?.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })
            return val?.charAt(0)?.toUpperCase() + val?.slice(1)
        },
        [period[1]]
    )

    return (
        <div className={styles['careercard']}>
            <div className={styles['careercard-body']}>
                <p className={styles['careercard-period']}>
                    {periodStart}
                    {!!periodEnd && <> - {periodEnd}</>}
                </p>
                <p className={styles['careercard-title']}>
                    {title}
                </p>
                <p className={styles['careercard-location']}>
                    {!location?.url && !!location?.company && <>{location?.company}, </>
                    }
                    {!!location?.url && !!location?.company && <>
                        <a
                            href={location?.url}
                            target="_blank"
                            rel="noopener nofollow"
                        >
                            {location?.company}
                        </a>, </>
                    }
                    {location?.city}
                </p>
                {missions.map((mission, i) => (
                    <React.Fragment
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



