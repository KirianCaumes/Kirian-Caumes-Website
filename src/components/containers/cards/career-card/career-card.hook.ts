import { useMemo } from 'react'

export type UseCareerCardHookParams = {
    /** period */
    period: [Date] | [Date, Date]
}

export type UseCareerCardHookReturns = {
    /** periodStart */
    periodStart: string
    /** periodEnd */
    periodEnd: string
}

/**
 * Use CareerCard hook
 */
export default function useCareercard({ period }: UseCareerCardHookParams): UseCareerCardHookReturns {
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

    return {
        periodStart,
        periodEnd,
    }
}
