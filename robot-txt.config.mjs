import siteConfig from './site.config.mjs';

/** @type {import('astro-robots-txt').RobotsTxtOptions} */
const robotsConfig = {
  policy: [
    {
      userAgent: '*',
      // The next line enables or disables the crawling on the `robots.txt` level
      disallow: siteConfig.disableIndexing ? '/' : '',
    },
  ],
  sitemap: false,
//   sitemapBaseFileName: 'sitemap-index', // default 'sitemap-index'
  transform(content) {
    const commentsList = ['Personal website for exploring, integrating, and showcasing different web technologies and paradigms.'];
    const comments = commentsList.map((item) => `# ${item}.`).join('\n');
    return `${comments}\n\n${content}`;
  },
};

export default robotsConfig;
