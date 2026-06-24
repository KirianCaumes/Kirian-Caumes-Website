import { publicRuntimeConfig } from 'config'
import type { MetadataRoute } from 'next'

/** Crawlers explicitly allowed, in addition to the catch-all `*` rule */
const AI_CRAWLERS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']

/**
 * Native App Router robots, served at `/robots.txt`.
 * {@link https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots}
 * @returns The robots rules and sitemap reference
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/404',
            },
            {
                userAgent: AI_CRAWLERS,
                allow: '/',
            },
        ],
        sitemap: `${publicRuntimeConfig.appUrl}/sitemap.xml`,
    }
}
