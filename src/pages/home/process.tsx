import process from '../../assets/home/process.png'

export default function Process() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-primary-dark border-t border-primary-dark/20 border-b">
            <div className="overflow-hidden  min-h-[400px]">
                <img src={process} alt="project" className="w-full h-full object-cover" />
            </div>
            <div>
                <div className='w-10/12 mx-auto py-12 md:py-16 lg:py-20 xl:py-24'>
                    <span className='text-2xl title md:text-3xl lg:text-4xl 2xl:text-5xl  pr-6 md:pr-0 leading-snug max-w-4xl block text-white'>
                        How do we work?
                    </span>
                    <span className='text-sm block max-w-sm pt-5 text-light'>Through close collaboration, we create custom marketing solutions for exceptional results. Our team's expertise and innovation ensure your success.
                    </span>
                    <div className='grid text-white gap-10 pt-10'>
                        <ProcessPoint
                            index="01"
                            title="Research"
                            subtitle="Exploring insights to drive strategies. Unveiling opportunities through data-driven analysis."
                        />

                        <ProcessPoint
                            index="02"
                            title="Analyze"
                            subtitle="Diving into database profiles to unearth valuable insights and patterns through data-driven analysis."
                        />

                        <ProcessPoint
                            index="03"
                            title="Optimize"
                            subtitle="Enhancing for peak performance. Fine-tuning for optimal results."
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}



function ProcessPoint({ index, title, subtitle }: any) {
    return (
        <div className='space-y-4 flex gap-6'>
            <div className='basis-16'>
                <div className='w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-xl font-semibold'>
                    {index}
                </div>
            </div>
            <div className='max-w-sm'>
                <h3 className='text-lg font-semibold title'>{title}</h3>
                <p className='text-white/80 text-sm md:text-sm font-light leading-normal pt-2'>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}