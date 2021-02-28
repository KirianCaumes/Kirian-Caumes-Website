const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap')

configureSitemap({
    baseUrl: 'https://kiriancaumes.fr',
    exclude: ['/404', '/mentions-legales'],
    excludeIndex: true,
    pagesConfig: {
        '/*': {
            priority: '0.5',
            changefreq: 'monthly',
        },
    },
    isTrailingSlashRequired: true,
    targetDirectory: __dirname + '/public',
    pagesDirectory: __dirname + '/pages',
})
    .generateSitemap()