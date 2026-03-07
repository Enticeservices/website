import rssData from '../../../public/hubspot_marketing_rss.json'
import type { BlogPost, RssItem } from './types'

function extractImageFromHtml(html: string): string {
    const imgMatch = html.match(/<img[^>]+src="([^"]+)"/)
    if (imgMatch && imgMatch[1]) {
        return imgMatch[1]
    }
    return ''
}

function stripHtml(html: string): string {
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
}

function createSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
}

function parseItems(items: RssItem[]): BlogPost[] {
    return items.map((item) => {
        const description = item.description || ''
        const contentEncoded = item['content:encoded'] || ''
        const thumbnail = extractImageFromHtml(description) || extractImageFromHtml(contentEncoded)
        const slug = createSlug(item.title)

        // Author can come from "author" field (email format) or "dc:creator"
        let author = ''
        if (item['dc:creator']) {
            author = item['dc:creator']
        } else if (item.author) {
            author = item.author.replace(/.*\((.+)\)/, '$1')
        }

        return {
            title: item.title,
            link: item.link,
            description: stripHtml(description),
            content: contentEncoded,
            category: item.category || '',
            pubDate: item.pubDate,
            author,
            guid: item.guid,
            thumbnail,
            slug,
        }
    })
}

const items = (rssData as { rss: { channel: { item: RssItem[] } } }).rss.channel.item
const blogPosts: BlogPost[] = parseItems(items)

export function useBlogPosts() {
    return { posts: blogPosts }
}

export function useBlogPost(slug: string | undefined) {
    const post = blogPosts.find((p) => p.slug === slug) || null
    return { post }
}
