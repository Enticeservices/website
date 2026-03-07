import { Link } from 'react-router-dom'
import type { BlogPost } from '../../pages/blogs/types'

interface BlogCardProps {
    post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
    const formattedDate = new Date(post.pubDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <Link
            to={`/blogs/${post.slug}`}
            className="group bg-white border p-0.5 md:p-1 lg:p-2 flex flex-col border-gray-200 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-primary no-underline"
        >
            <div className="basis-64 lg:basis-72 flex-shrink-0 bg-gray-100 border rounded-xl border-gray-200 overflow-hidden">
                {post.thumbnail ? (
                    <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            const parent = target.parentElement
                            if (parent && !parent.querySelector('.fallback-text')) {
                                const fallback = document.createElement('div')
                                fallback.className =
                                    'fallback-text flex items-center justify-center h-full text-gray-400 text-sm'
                                fallback.textContent = 'Image not available'
                                parent.appendChild(fallback)
                            }
                        }}
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                        No image available
                    </div>
                )}
            </div>

            <div className="px-2 pt-4 flex flex-col flex-1 pb-4">
                <div className="flex items-center gap-3 mb-3">
                    {post.category && (
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                            {post.category}
                        </span>
                    )}
                    <span className="text-xs text-gray-400">{formattedDate}</span>
                </div>

                <div className="flex-1">
                    <h3 className="text-basse md:text-lg font-semibold mb-2 text-primary-dark leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                        {post.description}
                    </p>
                </div>

                <div className="pt-4 pr-2 flex items-center justify-between">
                    {post.author && (
                        <span className="text-xs text-gray-400">By {post.author}</span>
                    )}
                    <span className="text-sm font-medium text-primary-dark group-hover:text-primary transition-colors ml-auto">
                        Read More →
                    </span>
                </div>
            </div>
        </Link>
    )
}

