import { Helmet } from "react-helmet-async";
import ServiceBanner from "../service-banner";
import Pointers from "../pointers";

export default function ContentMarketing() {
    return (
        <div className="min-h-dvh">
            <Helmet>
                <title>B2B Content Marketing & Narrative Strategy | Entice</title>
                <meta name="description" content="Build authority and fuel your B2B sales funnel with Entice's content marketing services — full-funnel content creation, email distribution, SEO roadmaps, digital PR, and ROI attribution." />
            </Helmet>
            {/* Banner Section: Aligned with the high-impact, SEO-driven tone of the reference */}
            <ServiceBanner
                title="B2B Content Marketing & Narrative Strategy"
                subtitle="High-performance content designed to build authority, drive organic growth, and fuel your sales funnel."
            />

            {/* Service Pointers: 5 core points merging Entice's expertise with the Siege Media style */}
            <Pointers service="content-marketing" data={[
                {
                    id: 1,
                    title: "Full-Funnel Content Creation",
                    slug: "cm-full-funnel-content",
                    description: "We go beyond just writing; we build assets. From data-backed whitepapers to visually stunning interactive experiences, our creative approach translates your unique value proposition into stories that resonate deeply with B2B decision-makers. [cite: 107, 137, 140]",
                },
                {
                    id: 2,
                    title: "Strategic Email Nurture & Distribution",
                    slug: "cm-strategic-email-nurture",
                    description: "Your content deserves to be seen. We leverage our database of 86 million verified profiles to distribute your message through expert email management, ensuring your thought leadership reaches the right inbox at the right time. [cite: 34, 107]",
                },
                {
                    id: 3,
                    title: "Data-Driven SEO & Roadmap Planning",
                    slug: "cm-data-driven-seo",
                    description: "Achieve long-term visibility with a precise content roadmap. We combine industry-specific expertise with competitive market analysis to identify the keywords and topics that will drive consistent organic traffic and brand loyalty. [cite: 107, 123]",
                },
                {
                    id: 4,
                    title: "Digital PR & Programmatic Awareness",
                    slug: "cm-digital-pr",
                    description: "Elevate your brand's authority through targeted programmatic nurture and digital PR. We ensure your content is not just published, but promoted through the channels where your audience is most active, increasing visibility and trust. [cite: 107, 127]",
                },
                {
                    id: 5,
                    title: "ROI-Focused Attribution & Performance",
                    slug: "cm-roi-focused-attribution",
                    description: "We decode the 'Who, What, When, and Where' of your success. Using advanced attribution modelling, we measure how every piece of content impacts your bottom line, allowing us to fine-tune campaigns for maximum sales realization. [cite: 130, 131, 144]",
                }
            ]} />
        </div>
    );
}