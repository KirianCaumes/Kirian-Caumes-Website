const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap')

configureSitemap({
    domains: [{ domain: 'https://kiriancaumes.fr', defaultLocale: 'fr' }],
    exclude: ['/404', '/mentions-legales'],
    excludeIndex: true,
    pagesConfig: {
        '/*': {
            priority: '0.5',
            changefreq: 'monthly',
        },
    },
    targetDirectory: `${__dirname}/public`,
    pagesDirectory: `${__dirname}/pages`,
})
    .generateSitemap()
