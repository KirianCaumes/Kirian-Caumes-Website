import Home from 'views/home/index.component'
import { structuredData } from 'lib/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    alternates: { canonical: '/' },
}

// eslint-disable-next-line react-refresh/only-export-components
export const revalidate = 7 * 60 * 60 * 24 // Revalidate every 7 days (in seconds)

/**
 * Home route (`/`). Title/description are inherited from the root layout metadata.
 * @returns The home page
 */
export default function Page() {
    return (
        <>
            {/* Captured once at (pre)render so date-derived text matches between server HTML and client hydration */}
            <Home now={new Date()} />
            <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                type="application/ld+json"
            />
        </>
    )
}
