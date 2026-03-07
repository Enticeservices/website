import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../components/ScrollToTop'
import Banner from './banner'
import BlogsContent from './blogs-content'

export default function Blogs() {
    return (
        <div>
            <Helmet>
                <title>Blog | Entice – B2B Marketing Insights & Strategies</title>
                <meta name="description" content="Stay ahead in B2B marketing with Entice's expert blog. Discover actionable insights on demand generation, lead qualification, content marketing, and data-driven growth strategies." />
            </Helmet>
            <ScrollToTop />
            <Banner />
            <BlogsContent />
        </div>
    )
}
