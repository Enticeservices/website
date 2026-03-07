
type Point = {
    title: string
    subtitle: string
    body: string
    icon: string
}

const points: Point[] = [
    {
        title: "Strategic Execution from Blueprint to Breakthrough",
        subtitle: "We don’t just launch campaigns; we land results.",
        body: "We partner with you to transform raw ideas into high-performing realities. By leveraging data, social engagement, and agile optimization, we bridge the gap between initial concepts and qualified leads (S/MQLs) to ensure your ROI hits new heights.",
        icon: "./icons/Frame-3.svg"
    },
    {
        title: "Decoding the DNA of Your Conversions",
        subtitle: "Stop guessing where your growth comes from.",
        body: "Success shouldn't be a mystery. We employ advanced attribution modeling to pinpoint exactly which touchpoints drive results. This data-driven clarity allows us to refine your strategy with precision, guiding your audience through the sales journey with absolute certainty.",
        icon: "./icons/Frame-2.svg"
    },
    {
        title: "Narratives That Connect, Designs That Convert",
        subtitle: "Moving beyond the visual to capture the vital.",
        body: "Our creative process translates your unique value into compelling storytelling. From high-impact HTML designs to interactive content, we build brand resonance while maintaining strict technical standards—including rigorous spam-compliance checks—to ensure your message lands exactly where it belongs.",
        icon: "./icons/Frame-1.svg"
    },
    {
        title: "Expertise You Can Bank On",
        subtitle: "Turning marketing engagement into measurable revenue.",
        body: "Our specialists craft demand generation engines designed to maximize your marketing ROI. We take a holistic approach—from initial strategic planning to final data insights—ensuring every interaction is a stepping stone toward a tangible sale.",
        icon: "./icons/Frame.svg"
    }
]
export default function AboutServices() {
    return <div className="py-10 md:py-16 lg:py-24 bg-light">
        <div className="grid grid-cols-32 md:grid-cols-12">
            <div className="col-start-2 col-end-30 md:col-end-12">
                <span className="text-lg pr-6 md:pr-0 md:text-xl lg:text-2xl block max-w-xl leading-normal text-primary-dark">
                    Our suite of services has got you covered!
                </span>
            </div>
        </div>

        <div className="grid grid-cols-32 md:grid-cols-12 mt-10">
            <div className="col-start-2 col-end-30 md:col-end-12">
                <div className="grid divide-y divide-solid pt-4 md:pt-6  divide-primary-dark/20">
                    {points.map((point, index) => (
                        <ServiceCard key={index} {...point} />
                    ))}
                </div>
            </div>
        </div>
    </div>
}


function ServiceCard({ title, subtitle, body, icon }: Point) {
    return (
        <div className="px-6 py-10 md:py-12 group lg:py-16 space-y-4 flex md:flex-row flex-col">
            <div className="text-primary-dark basis-24 md:basis-40 transition-all duration-300 group-hover:scale-110"><img src={icon} alt={title} className=" size-20 md:size-[100px]" /></div>
            <div className="space-y-2 flex-1 ">
                <h3 className="text-lg md:text-xl  title lg:text-3xl font-medium">{title}</h3>
                <p className="text-xs md:text-sm text-primary-dark/50">{subtitle}</p>
                <p className="text-xs md:text-sm pt-5 leading-relaxed block max-w-4xl">{body}</p>
            </div>

        </div>
    )
}