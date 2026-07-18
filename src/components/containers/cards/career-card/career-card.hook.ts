import { useMemo } from 'react'
import type { CareerCardProps } from 'components/containers/cards/career-card/career-card.component'

export type UseCareerCardHookParams = Pick<CareerCardProps, 'period' | 'now'>

/**
 * Use CareerCard hook
 * @returns UseCareerCardHookReturns
 */
export default function useCareerCard({ period, now }: UseCareerCardHookParams) {
    /** Start date clean */
    const periodStart = useMemo(() => {
        const val = period[0].toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
        return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
    }, [period])

    /** End date clean */
    const periodEnd = useMemo(() => {
        if (!period[1]) {
            return ''
        }

        if (period[1].getTime() === now?.getTime()) {
            return "Aujourd'hui"
        }

        const val = period[1].toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
        return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
    }, [period, now])

    const duration = useMemo(() => {
        const monthDiff = (period[1]?.getMonth() ?? 0) - period[0].getMonth()
        const yearDiff = (period[1]?.getFullYear() ?? 0) - period[0].getFullYear()
        const diff = monthDiff + yearDiff * 12

        if (diff <= 0) {
            return ''
        }

        if (diff >= 12) {
            const years = Math.ceil(diff / 12)
            if (years >= 2) {
                return `${years} ans`
            }
            return `${years} an`
        }

        return `${diff + 1} mois`
    }, [period])

    return {
        periodStart,
        periodEnd,
        duration,
    }
}
