import { Helmet } from "react-helmet-async";
import ServiceBanner from "../service-banner";
import Pointers from "../pointers";

export default function MarketResearchAnalysis() {
    return (
        <div className="min-h-dvh">
            <Helmet>
                <title>Market Research & Strategic Analysis | Entice</title>
                <meta name="description" content="Turn 86M+ B2B data points into competitive advantage. Entice's market research services cover competitive intelligence, buyer persona discovery, product validation, and attribution modeling." />
            </Helmet>
            {/* Banner Section: Aligned with the 'Elevate Every Interaction' and 'ROI' focus */}
            <ServiceBanner
                title="Market Research & Strategic Analysis"
                subtitle="Turning 86M+ B2B data points into actionable intelligence for market leadership."
            />

            {/* Service Pointers: Merged into 5 high-impact points based on Qualtrics' structure and Entice's expertise */}
            <Pointers service="market-research-and-analysis" data={[
                {
                    id: 1,
                    title: "B2B Market Landscape & Opportunity Mapping",
                    slug: "mr-market-landscape-opportunity",
                    description: "Identify the 'white space' in your industry. We leverage our massive repository of 86 million business profiles to map market size, saturation, and emerging demand, allowing you to enter new segments with total confidence.",
                },
                {
                    id: 2,
                    title: "Competitive Intelligence & Benchmarking",
                    slug: "mr-competitive-intelligence",
                    description: "Gain a definitive edge by understanding your rivals' moves. We conduct deep-dive analysis into competitor USPs, pricing models, and market share, providing a SWOT analysis that highlights exactly how to differentiate your brand.",
                },
                {
                    id: 3,
                    title: "Buyer Persona & Sentiment Discovery",
                    slug: "mr-buyer-persona-sentiment",
                    description: "Move beyond demographics to understand 'The Why' behind B2B decisions. Using targeted surveys and sentiment analysis, we profile your ideal decision-makers, uncovering their specific pain points, purchase triggers, and barriers to entry.",
                },
                {
                    id: 4,
                    title: "Product Validation & Concept Testing",
                    slug: "mr-product-validation-concept",
                    description: "Reduce launch risk by testing ideas before you build. Our research frameworks evaluate product-market fit, feature preferences, and pricing sensitivity, ensuring your offering is optimized for immediate adoption and ROI.",
                },
                {
                    id: 5,
                    title: "Attribution Modeling & CX Analytics",
                    slug: "mr-attribution-modeling-cx",
                    description: "Map the complete B2B buyer journey to maximize every marketing dollar. We decode the complex touchpoints of your sales cycle using advanced attribution modeling, identifying the exact interactions that drive conversions and long-term loyalty.",
                }
            ]} />
        </div>
    );
}