import { Helmet } from "react-helmet-async";
import ServiceBanner from "../service-banner";
import Pointers from "../pointers";

export default function BusinessProcessOutsourcing() {
    return <div className="min-h-dvh">
        <Helmet>
            <title>Business Process Outsourcing | Entice</title>
            <meta name="description" content="Scale your operations with Entice's BPO services — from intelligent lead generation and omnichannel contact centers to digital marketing, data management, and CX analytics." />
        </Helmet>
        <ServiceBanner title="Business Process Outsourcing" subtitle="Engineering B2B Connections through targeted outreach" />
        <Pointers service="business-process-outsourcing" data={[{
            id: 1,
            title: "Intelligent Lead Generation & Sales Growth",
            slug: "bpo-intelligent-lead-generation",
            description: "We accelerate your revenue by identifying and qualifying high-potential prospects from our database of 86 million verified B2B profiles. Our multi-channel approach ensures your sales team receives only high-intent leads, streamlining the journey from first touch to final conversion.",
        },
        {
            id: 2,
            title: "Omnichannel Contact Center & Support",
            slug: "bpo-omnichannel-contact-center",
            description: "Deliver a \"white-glove\" customer experience with our 24/7 inbound and outbound call center services. We utilize AI-driven routing and cloud technology to manage everything from proactive sales outreach to empathetic technical support, ensuring your brand is always reachable.",
        },
        {
            id: 3,
            title: "Strategic BPO & Operations Activation",
            slug: "bpo-strategic-bpo-operations",
            description: "Focus on your core business while we optimize your back-office and administrative workflows. Our scalable outsourcing solutions span finance, HR, and supply chain operations, integrating advanced technology to reduce overhead and increase productivity.",
        },
        {
            id: 4,
            title: "Digital Marketing & Content Strategy",
            slug: "bpo-digital-marketing-content",
            description: "Build brand authority with data-driven storytelling and targeted campaign management. We create engaging narratives and precise content roadmaps that foster customer loyalty and increase visibility across the competitive B2B landscape.",
        },
        {
            id: 5,
            title: "CX Analytics & Market Intelligence",
            slug: "bpo-cx-analytics-market-intelligence",
            description: "Gain a competitive edge with comprehensive market research and attribution modeling. We decode the \"who, what, when, and where\" of your customer journey, providing actionable insights that allow you to make informed strategic decisions and maximize ROI.",
        }]} />
    </div>
}