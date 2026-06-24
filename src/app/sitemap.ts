import { publicRuntimeConfig } from 'config'
import type { MetadataRoute } from 'next'

/**
 * Native App Router sitemap, served at `/sitemap.xml`.
 * {@link https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap}
 * @returns The list of indexable URLs
 */
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: publicRuntimeConfig.appUrl,
            lastModified: new Date(),
        },
    ]
}
