import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import 'styles/index.scss'
import Layout from 'components/layout'

/**
 * Base layout
 * @param {AppProps} props 
 * {@link https://nextjs.org/docs/advanced-features/custom-app}
 */
export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}