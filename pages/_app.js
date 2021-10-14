import React from 'react'
import { AppProps } from 'next/app'
import 'styles/index.scss'
import Layout from 'components/layout'
import GdprBanner from 'components/layout/gdprBanner'
import useApp from 'hooks/pages/useApp'

/**
 * Base layout
 * @param {AppProps} props
 * {@link https://nextjs.org/docs/advanced-features/custom-app}
 * @returns {JSX.Element} Content
 */
export default function MyApp({ Component, pageProps }) {
    useApp()

    return (
        <Layout>
            <GdprBanner />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </Layout>
    )
}
