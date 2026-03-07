import { useNavigate } from "react-router";
import PrimaryButton from "../../components/primary-btn";

export default function Stats() {
    return (
        <div className="bg-light pt-20 md:pb-10">
            <div className="grid  grid-cols-30 md:grid-cols-12">
                <div className="col-start-2 col-end-30 md:col-end-12">
                    <span className="text-3xl md:text-4xl 2xl:text-5xl font-semibold leading-tight max-w-xl block text-primary-dark title">Our comprehensive suite of tailored services</span>
                    <span className="text-base leading-relaxed max-w-xl pt-6 block text-primary-dark/90">Discover how we can empower your business to achieve sustained growth, from strategic marketing solutions to dynamic B2B strategies</span>
                </div>
            </div>
            <div className="grid grid-cols-30 md:grid-cols-12 space-y-8 bg-light py-24">
                <div className="col-start-2 col-end-30 md:col-end-12">
                    <div className="md:block hidden">
                        <Card
                            title="Regulatory Compliance and Risk Management"
                            description="Our services include in-depth compliance audits and proactive risk mitigation strategies tailored for B2B environments, ensuring your business operates within industry-specific standards and minimizes potential risks."
                            bg="https://images.unsplash.com/photo-1562157811-50ef8d103c83?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </div>
                    <div className="md:hidden block">
                        <CardMobile
                            title="Regulatory Compliance and Risk Management"
                            description="Our services include in-depth compliance audits and proactive risk mitigation strategies tailored for B2B environments, ensuring your business operates within industry-specific standards and minimizes potential risks."
                            bg="https://images.unsplash.com/photo-1562157811-50ef8d103c83?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </div>
                </div>
                <div className="col-start-2 col-end-30 md:col-end-12  flex md:flex-row flex-col gap-8">
                    <Card
                        title="Lead Generation and Qualification"
                        description="Entice specializes in generating and qualifying leads with precision, utilizing a multi-faceted approach that identifies and nurtures high-potential prospects, ultimately streamlining your sales process and driving higher conversion rates."
                        bg="https://plus.unsplash.com/premium_photo-1695752728004-6846d17d5a09?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        href="/services/lead-generation-and-qualification"
                    />

                    <CardMobile
                        title="Lead Generation and Qualification"
                        description="Entice specializes in generating and qualifying leads with precision, utilizing a multi-faceted approach that identifies and nurtures high-potential prospects, ultimately streamlining your sales process and driving higher conversion rates."
                        bg="https://plus.unsplash.com/premium_photo-1695752728004-6846d17d5a09?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        href="/services/lead-generation-and-qualification"
                    />

                    <Card
                        title="Business Process Outsourcing (BPO)"
                        description="At Entice Services, we deliver innovative, technology-driven BPO solutions tailored to your specific needs. Our flexible service models and commitment to quality ensure optimized productivity and measurable growth. Partner with us for a reliable, strategic alliance dedicated to exceeding expectations and driving your business success."
                        bg="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        href="/services/business-process-outsourcing"
                    />

                    <CardMobile
                        title="Business Process Outsourcing (BPO)"
                        description="At Entice Services, we deliver innovative, technology-driven BPO solutions tailored to your specific needs. Our flexible service models and commitment to quality ensure optimized productivity and measurable growth. Partner with us for a reliable, strategic alliance dedicated to exceeding expectations and driving your business success."
                        bg="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        href="/services/business-process-outsourcing"
                    />
                </div>
                <div className="col-start-2 col-end-30 md:col-end-12 flex md:flex-row flex-col gap-8">
                    <Card
                        title="Content Marketing"
                        description="Entice specializes in content marketing strategies that blend captivating storytelling, industry-specific expertise, and data-driven insights to create engaging narratives, driving brand loyalty and customer engagement while increasing visibility and conversions for businesses in the B2B sector"
                        bg="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        href="/services/content-marketing"
                    />

                    <CardMobile
                        title="Content Marketing"
                        description="Entice specializes in content marketing strategies that blend captivating storytelling, industry-specific expertise, and data-driven insights to create engaging narratives, driving brand loyalty and customer engagement while increasing visibility and conversions for businesses in the B2B sector"
                        bg="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        href="/services/content-marketing"
                    />

                    <Card
                        title="Market Research and Analysis"
                        description="Gain a competitive edge with our comprehensive market research and analysis services, providing you with valuable insights into your industry landscape, competitor strategies, and emerging trends, enabling you to make informed strategic decisions"
                        bg="https://images.unsplash.com/photo-1761735486587-bcac08b15c79?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        href="/services/market-research-and-analysis"
                    />

                    <CardMobile
                        title="Market Research and Analysis"
                        description="Gain a competitive edge with our comprehensive market research and analysis services, providing you with valuable insights into your industry landscape, competitor strategies, and emerging trends, enabling you to make informed strategic decisions"
                        bg="https://images.unsplash.com/photo-1761735486587-bcac08b15c79?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        href="/services/market-research-and-analysis"
                    />
                </div>
            </div>
        </div >
    )
}

function Card({ title, description, bg, href }: { title: string, description: string, bg: string, href?: string }) {
    const navigate = useNavigate()
    return <article className="relative overflow-hidden hover:basis-64 transition-all duration-300 flex-1 rounded-3xl group h-96 md:flex  flex-col justify-end p-10 hidden">
        <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 w-full h-full opacity-100 card-bg backdrop-blur-none group-hover:backdrop-blur-sm group-hover:bg-light/40 transition-all duration-300"></div>
            <img src={bg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 flex flex-col justify-end ">
            <h3 className="text-2xl title text-primary-dark font-semibold">{title}</h3>
            <div className="h-0 pt-8 group-hover:h-52 transition-all duration-300 max-w-xl overflow-hidden">
                <p className="text-xs md:text-sm">{description}</p>
                {href && <div className="pl-1 pt-6">
                    <PrimaryButton size="md" text="Learn More" onClick={() => navigate(href)} />
                </div>}
            </div>
        </div>
    </article>
}

function CardMobile({ title, description, bg, href }: { title: string, description: string, bg: string, href?: string }) {
    const navigate = useNavigate()
    return (
        <article className="rounded-3xl md:hidden flex overflow-hidden bg-white  flex-col items-center px-1 pt-1 pb-8 shadow-md">
            <img src={bg} alt="" className="w-full h-48 object-cover rounded-[22px] mb-4" />
            <div className="flex flex-col  px-3 pt-2 items-start w-full">
                <h3 className="text-xl pr-6 lg:pr-0 text-primary-dark font-bold mb-2">{title}</h3>
                <p className="text-sm text-primary-dark/90">{description}</p>
            </div>
            {href && <div className="pl-1 pt-6">
                <PrimaryButton size="md" text="Learn More" onClick={() => navigate(href)} />
            </div>}
        </article>
    );
}