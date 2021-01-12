import React from 'react'
import Head from 'next/head'
// @ts-ignore
import styles from 'styles/pages/index.module.scss'

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                Test
                <br/>
                {new Date().toString()}
            </main>           
        </>
    )
}
