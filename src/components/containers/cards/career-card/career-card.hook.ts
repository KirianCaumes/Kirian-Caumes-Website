import { useMemo } from 'react'
import type { CareerCardProps } from 'components/containers/cards/career-card/career-card.component'

export type UseCareerCardHookParams = Pick<CareerCardProps, 'period'>

export interface UseCareerCardHookReturns {
    /** periodStart */
    periodStart: string
    /** periodEnd */
    periodEnd: string
    /** duration */
    duration: string
}

/**
 * Use CareerCard hook
 */
export default function useCareerCard({ period }: UseCareerCardHookParams): UseCareerCardHookReturns {
    /** Start date clean */
    const periodStart = useMemo(() => {
        const val = period?.[0]?.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
        return `${val?.charAt(0)?.toUpperCase()}${val?.slice(1)}`
    }, [period])

    /** End date clean */
    const periodEnd = useMemo(() => {
        if (!period[1]) {
            return ''
        }

        if (
            period[1]?.getDate() === new Date().getDate() &&
            period[1]?.getMonth() === new Date().getMonth() &&
            period[1]?.getFullYear() === new Date().getFullYear()
        ) {
            return "Aujourd'hui"
        }

        const val = period?.[1]?.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
        return `${val?.charAt(0)?.toUpperCase()}${val?.slice(1)}`
    }, [period])

    const duration = useMemo(() => {
        const monthDiff = (period[1]?.getMonth() ?? 0) - (period[0]?.getMonth() ?? 0)
        const yearDiff = (period[1]?.getFullYear() ?? 0) - (period[0]?.getFullYear() ?? 0)
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
