import NotFound from 'views/not-found/index.component'

/**
 * Custom 404, rendered for any unmatched route (served with an HTTP 404 status).
 * @returns The not-found page
 */
export default function NotFoundPage() {
    return <NotFound />
}
