import React, { useEffect } from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import 'styles/index.scss'
import Layout from 'components/layout'
import getConfig from 'next/config'

/**
 * Base layout
 * @param {AppProps} props 
 * {@link https://nextjs.org/docs/advanced-features/custom-app}
 */
export default function MyApp({ Component, pageProps }) {
    const { publicRuntimeConfig } = getConfig()

    useEffect(() => {
        //Add component on the top of the page
        document.querySelector('html').parentNode.insertBefore(
            document.createComment(publicRuntimeConfig.appComment),
            document.querySelector('html')
        )
    }, [publicRuntimeConfig])

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}