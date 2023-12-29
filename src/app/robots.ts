import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/coffee',
        },
        sitemap: 'https://beanstats.com.com/sitemap.xml',
    };
}