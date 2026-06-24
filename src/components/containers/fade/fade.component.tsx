'use client'

import { Fade as RevealFade } from 'react-awesome-reveal'
import classNames from 'classnames'
import type { FadeProps as RevealFadeProps } from 'react-awesome-reveal'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FadeProps extends RevealFadeProps {}

// eslint-disable-next-line react-refresh/only-export-components
export const DISABLE_ANIMATION_NO_JS = 'disable-animation-no-js'

/**
 * Fade - reveal-on-scroll wrapper. The no-JS fallback style lives in the root layout.
 * @returns JSX.Element
 */
export default function Fade({ children, className, ...props }: FadeProps) {
    return (
        <RevealFade
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            className={classNames(DISABLE_ANIMATION_NO_JS, className)}
        >
            {children}
        </RevealFade>
    )
}
