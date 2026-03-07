export interface RssItem {
    title: string
    link: string
    description: string
    'content:encoded': string
    category: string
    pubDate: string
    author?: string
    'dc:creator'?: string
    guid: string
    'dc:date'?: string
}

export interface BlogPost {
    title: string
    link: string
    description: string
    content: string
    category: string
    pubDate: string
    author: string
    guid: string
    thumbnail: string
    slug: string
}
