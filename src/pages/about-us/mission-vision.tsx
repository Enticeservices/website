export default function MissionVision() {
    return <div className="grid bg-light grid-cols-30 md:grid-cols-12">
        <div className="col-start-2 space-y-10 md:space-y-16 lg:space-y-24 col-end-30 md:col-end-12">
            <Card
                title="Our Mission"
                subtitle="To empower businesses with innovative, reliable, and result-driven digital solutions that accelerate growth, enhance brand visibility, and create long-term success. At Entice Services, we help brands stand out in a competitive market by delivering strategic, creative, and performance-focused solutions tailored to their unique needs."
                bgImage="/mission.png"
            />

            <Card
                title="Our Vision"
                subtitle="To become a trusted global partner for businesses seeking smart digital transformation and sustainable growth. We aim to build long-term partnerships by combining creativity, technology, and strategy to deliver measurable results."
                bgImage="/vision.png"
            />
        </div>
    </div>
}

function Card({ title, subtitle, bgImage }: any) {
    return <article className="relative h-[24rem] md:h-[28rem] lg:h-[32rem] rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
            <img src={bgImage} alt={title} className="h-full w-full object-cover object-bottom" />
            <div className="absolute left-0 bottom-0 top-auto right-auto max-w-2xl p-4 md:p-6 lg:p-8 xl:p-10">
                <div className="bg-white rounded-2xl grid gap-2 md:gap-5 p-4 md:p-6 lg:p-8 xl:p-10">
                    <span className="text-xl title md:text-2xl lg:text-3xl font-medium text-primary-dark">{title}</span>
                    <span className="text-primary-dark text-xs md:text-sm lg:text-base leading-normal">{subtitle}</span>
                </div>
            </div>
        </div>

    </article>

}
