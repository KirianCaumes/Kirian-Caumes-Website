/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://kiriancaumes.fr',
    exclude: ['/404', '/mentions-legales'],
    generateIndexSitemap: false,
    transform: (_config, path) =>
        Promise.resolve({
            loc: path,
            lastmod: new Date().toISOString(),
        }),
}
