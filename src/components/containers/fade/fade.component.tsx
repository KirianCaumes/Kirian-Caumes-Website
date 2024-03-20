import React from 'react'
import { Fade as RevealFade } from 'react-awesome-reveal'
import Head from 'next/head'
import classNames from 'classnames'
import type { FadeProps as RevealFadeProps } from 'react-awesome-reveal'

interface FadeProps extends RevealFadeProps {}

const DISABLE_ANIMATION_NO_JS = 'disable-animation-no-js'

/**
 * Fade
 */
export default function Fade({ children, className, ...props }: FadeProps) {
    return (
        <>
            <Head>
                <noscript key={DISABLE_ANIMATION_NO_JS}>
                    <style>{`div.${DISABLE_ANIMATION_NO_JS} { animation: none!important; opacity: 1!important; }`}</style>
                </noscript>
            </Head>

            <RevealFade
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...props}
                className={classNames(DISABLE_ANIMATION_NO_JS, className)}
            >
                {children}
            </RevealFade>
        </>
    )
}
