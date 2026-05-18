import { publicRuntimeConfig } from 'config'

/**
 * Use Layout hook
 * @returns JSX.Element
 */
export default function useLayout() {
    return {
        publicRuntimeConfig,
    }
}
