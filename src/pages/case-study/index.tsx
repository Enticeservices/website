import { Helmet } from 'react-helmet-async'
import Banner from './banner'
import CaseStudyContent from './case-study-content'

export default function CaseStudy() {
    return (
        <div>
            <Helmet>
                <title>Case Studies | Entice – B2B Success Stories</title>
                <meta name="description" content="Discover how Entice has helped B2B companies achieve measurable growth through targeted demand generation, lead qualification, and data-driven marketing campaigns." />
            </Helmet>
            <Banner />
            <CaseStudyContent />
        </div>
    )
}
