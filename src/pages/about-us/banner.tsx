import bgVideo from '../../assets/about_banner.mp4'

export default function Banner() {
    return (
        <div className="relative 2xl:h-[36rem] lg:h-[32rem] md:h-[28rem] h-[24rem] grid grid-cols-32 md:grid-cols-12 bg-primary-dark overflow-hidden max-w-[100vw]">
            <div className="absolute inset-0">
                <video
                    className="w-full h-full object-cover"
                    src={bgVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className='absolute inset-0 bg-linear-to-b from-transparent to-light z-20'></div>
            </div>

            <div className='relative col-start-2 col-end-32 md:col-end-12 flex flex-col gap-6 pt-10 md:pt-16 pb-10 lg:py-20 justify-end h-full z-20'>
                <span className='title text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl font-medium text-primary-dark leading-snug max-w-xl'>Converting Strategic Connections into B2B Growth</span>
                {/* <span className='text-sm md:text-base xl:text-base 2xl:text-xl text-white/90 leading-relaxed  pr-6 md:pr-0 pt-2 block max-w-md'>
                    Entice is redefining the B2B landscape by providing customized solutions that drive operational efficiency and measurable success.
                </span> */}
            </div>
        </div>
    )
}
