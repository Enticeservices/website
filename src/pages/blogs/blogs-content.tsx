import BlogCard from '../../components/shared/blog-card'
import { useBlogPosts } from './use-blog-posts'

export default function BlogsContent() {
    const { posts } = useBlogPosts()

    return (
        <div className="grid grid-cols-30 md:grid-cols-12 py-10 md:py-20 bg-white">
            <div className="col-start-2 col-end-30 md:col-end-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-primary-dark mb-4 md:mb-6  title lg:mb-8">Latest Articles</h2>
                    <p className="text-sm pr-6 md:pr-0 md:text-base lg:text-xl text-gray-600 mb-8 md:mb-12">
                        Discover actionable insights, industry trends, and expert advice to elevate your B2B marketing strategy.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <BlogCard key={post.guid} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
