import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useBlogPost } from './use-blog-posts'

export default function BlogDetail() {
    const { slug } = useParams<{ slug: string }>()
    const { post } = useBlogPost(slug)

    if (!post) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-primary-dark mb-4">
                        Article not found
                    </h2>
                    <p className="text-gray-500 mb-6">
                        The article you're looking for doesn't exist.
                    </p>
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-primary-dark font-medium hover:text-primary transition-colors"
                    >
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        )
    }

    const formattedDate = new Date(post.pubDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <div className="bg-white">
            <Helmet>
                <title>{post.title} | Entice Blog</title>
                <meta name="description" content={`Read "${post.title}" on the Entice blog — insights on B2B demand generation, lead qualification, and data-driven marketing.`} />
            </Helmet>
            {/* Hero section */}
            <div className="relative bg-primary-dark">
                <div className="grid grid-cols-12">
                    <div className="col-start-2 col-end-12 pt-48 pb-16 md:pb-24">
                        <div className="max-w-3xl">

                            {post.category && (
                                <span className="inline-block text-sm font-medium text-white bg-primary px-3 py-1.5 rounded-full mb-4">
                                    {post.category}
                                </span>
                            )}

                            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-4 text-sm text-white">
                                {post.author && (
                                    <>
                                        <span className="font-medium text-white">
                                            {post.author}
                                        </span>
                                        <span>•</span>
                                    </>
                                )}
                                <span>{formattedDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thumbnail */}
            {post.thumbnail && (
                <div className="grid grid-cols-12 pt-20">
                    <div className="col-start-2 col-end-12 -mt-4">
                        <div className="max-w-4xl mx-auto">
                            <img
                                src={post.thumbnail}
                                alt={post.title}
                                className="w-full rounded-2xl shadow-lg object-cover max-h-[480px]"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="grid grid-cols-12 py-16">
                <div className="col-start-2 col-end-12">
                    <div
                        className="max-w-3xl mx-auto prose prose-sm md:prose-base lg:prose-lg prose-headings:text-primary-dark prose-headings:font-semibold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-strong:text-primary-dark prose-li:text-gray-600"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </div>

            {/* Footer CTA */}
            <div className="grid grid-cols-12 pb-20">
                <div className="col-start-2 col-end-12">
                    <div className="max-w-3xl mx-auto border-t border-gray-200 pt-10">
                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-2 text-primary-dark font-medium hover:text-primary transition-colors"
                        >
                            ← Back to all articles
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
