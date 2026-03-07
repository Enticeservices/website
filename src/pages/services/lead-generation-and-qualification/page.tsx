import { Helmet } from "react-helmet-async";
import ServiceBanner from "../service-banner";
import Pointers from "../pointers";
import map from "../../../assets/map.svg";

export default function LeadGeneration() {
    return (
        <div className="min-h-dvh">
            <Helmet>
                <title>Lead Generation & Qualification | Entice</title>
                <meta name="description" content="Drive high-intent B2B leads with Entice's strategic lead generation and qualification services — including content syndication, BANT telemarketing, email nurture, and programmatic targeting." />
            </Helmet>
            {/* Banner Section focused on high-intent lead delivery */}
            <ServiceBanner
                title="Strategic Lead Generation & Qualification"
                subtitle="High-performance demand generation powered by a 86M+ B2B data repository."
            />

            {/* Service Pointers: Updated with your specific service requirements */}
            <Pointers service="lead-generation-and-qualification" data={[
                {
                    id: 1,
                    title: "Content Syndication",
                    slug: "content-syndication",
                    description: "Content syndication is a demand generation strategy where your content is distributed across third-party platforms to reach a wider audience. It’s a powerful way to increase brand visibility, drive qualified traffic to your website, and generate leads at scale.",
                },

                {
                    id: 2,
                    title: "BANT Telemarketing & Qualification",
                    slug: "bant-telemarketing",
                    description: "Our specialized tele-outreach team qualifies prospects using the BANT framework (Budget, Authority, Need, Timeline). We identify high-potential prospects with precision to streamline your sales process and drive higher conversion rates.",
                },
                {
                    id: 3,
                    title: "Email Nurture & Database Marketing",
                    slug: "email-nurture",
                    description: "Leverage our database of over 86 million verified business profiles to execute multi-faceted email campaigns. We blend captivating storytelling with industry expertise to create engaging narratives that drive brand loyalty and customer engagement.",
                },
                {
                    id: 4,
                    title: "Programmatic Nurture & Targeting",
                    slug: "programmatic-nurture",
                    description: "Stay top-of-mind with automated, data-driven nurture streams. We use attribution modelling to decode effective touchpoints, ensuring your prospects receive the right message at the right stage of their buyer journey.",
                },
                {
                    id: 5,
                    title: "Full-Funnel Content Creation",
                    slug: "full-funnel-content",
                    description: "We translate your unique value proposition into visually stunning HTML designs and interactive experiences. Our data-driven content increases visibility and established brand authority within competitive B2B sectors.",
                },
                {
                    id: 6,
                    title: "Display Advertising & ROI Optimization",
                    slug: "display-advertising",
                    description: "Reach your ideal audience with targeted display ads across the digital landscape. We focus on measurable, tangible results that yield a direct impact on your bottom line, moving beyond visual reach to actual sales realization.",
                }
            ]} />
            <div className="grid grid-cols-30 md:grid-cols-12 border-t border-primary/20 bg-light py-12 md:py-16 lg:py-20">
                <div className="col-start-2 col-end-30  text-center pb-10 md:pb-20 md:col-end-12">
                    <span className="text-3xl font-semibold">Our data to become your fuel</span>
                </div>
                <div className="col-start-2 col-end-30 md:col-end-12">
                    <img src={map} />
                </div>
            </div>
        </div>
    );
}